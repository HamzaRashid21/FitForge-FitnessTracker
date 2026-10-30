import mongoose, { Schema, type Document, type Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import type {
  IUser,
  ISafeUser,
  UserRole,
  SubscriptionTier,
  AccountStatus,
  IRefreshTokenSession,
} from '../types/user.types.js';

export interface IUserDocument extends Omit<IUser, '_id'>, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
  toSafeUser(): ISafeUser;
}

export interface IUserModel extends Model<IUserDocument> {
  hashPassword(password: string): Promise<string>;
}

const RefreshTokenSessionSchema = new Schema<IRefreshTokenSession>(
  {
    tokenHash: { type: String, required: true },
    family: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters long'],
      maxlength: [100, 'Full name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
      index: true,
    },
    passwordHash: {
      type: String,
      required: [true, 'Password hash is required'],
      select: false,
    },
    role: {
      type: String,
      enum: ['Admin', 'User'],
      default: 'User',
      required: true,
      index: true,
    },
    subscriptionTier: {
      type: String,
      enum: ['Free', 'Premium'],
      default: 'Free',
      required: true,
      index: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
      index: true,
    },
    isOnboardingCompleted: {
      type: Boolean,
      default: false,
      index: true,
    },
    profileImage: {
      type: String,
      default: undefined,
    },
    accountStatus: {
      type: String,
      enum: ['active', 'suspended', 'deactivated'],
      default: 'active',
      index: true,
    },
    verificationTokenHash: {
      type: String,
      default: undefined,
      select: false,
    },
    verificationTokenExpiresAt: {
      type: Date,
      default: undefined,
    },
    verificationLastSentAt: {
      type: Date,
      default: undefined,
    },
    passwordResetTokenHash: {
      type: String,
      default: undefined,
      select: false,
    },
    passwordResetExpiresAt: {
      type: Date,
      default: undefined,
    },
    refreshTokens: {
      type: [RefreshTokenSessionSchema],
      default: [],
      select: false,
    },
    onboarding: {
      type: Object,
      default: undefined,
    },
    lastLoginAt: {
      type: Date,
      default: undefined,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret: Record<string, unknown>) => {
        delete ret.passwordHash;
        delete ret.verificationTokenHash;
        delete ret.passwordResetTokenHash;
        delete ret.refreshTokens;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Method to verify candidate password
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  if (!this.passwordHash) {
    return false;
  }
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

// Static helper to hash passwords
UserSchema.statics.hashPassword = async function (password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

// Return safe user representation
UserSchema.methods.toSafeUser = function (): ISafeUser {
  return {
    id: this._id.toString(),
    fullName: this.fullName,
    email: this.email,
    role: this.role as UserRole,
    subscriptionTier: this.subscriptionTier as SubscriptionTier,
    isEmailVerified: this.isEmailVerified,
    isOnboardingCompleted: this.isOnboardingCompleted,
    profileImage: this.profileImage,
    accountStatus: this.accountStatus as AccountStatus,
    onboarding: this.onboarding,
    lastLoginAt: this.lastLoginAt,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
