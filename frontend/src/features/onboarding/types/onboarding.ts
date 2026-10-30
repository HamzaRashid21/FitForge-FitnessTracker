export type FitnessGoal = 'Muscle gain' | 'Fat loss' | 'Strength' | 'Endurance' | 'General fitness';

export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type EquipmentOption =
  | 'Full gym'
  | 'Dumbbells'
  | 'Barbell'
  | 'Kettlebells'
  | 'Resistance bands'
  | 'Pull-up bar'
  | 'Machines'
  | 'Bodyweight only';

export type UnitSystem = 'metric' | 'imperial';

export type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type SessionDuration = '20–30 min' | '30–45 min' | '45–60 min' | '60+ min';

export type PlanChoice = 'free' | 'premium';

export interface OnboardingState {
  name: string;
  hear: string;
  adult: boolean;
  goal: FitnessGoal | null;
  exp: ExperienceLevel | null;
  equip: EquipmentOption[];
  units: UnitSystem;
  height: string;
  weight: string;
  age: string;
  days: WeekDay[];
  dur: SessionDuration | null;
  plan: PlanChoice;
}

export interface BodyValidationErrors {
  h?: string;
  w?: string;
  a?: string;
}
