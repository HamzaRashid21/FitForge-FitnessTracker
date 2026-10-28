import mongoose from 'mongoose';
import { logger } from '../common/utils/logger.js';
import { config } from '../config/env.js';

export interface DatabaseHealth {
  status: 'connected' | 'connecting' | 'disconnected' | 'disconnecting';
  readyState: number;
  host?: string;
  name?: string;
}

const READY_STATE_MAP: Record<number, DatabaseHealth['status']> = {
  0: 'disconnected',
  1: 'connected',
  2: 'connecting',
  3: 'disconnecting',
};

export function getDatabaseHealth(): DatabaseHealth {
  const readyState = mongoose.connection.readyState;
  const status = READY_STATE_MAP[readyState] ?? 'disconnected';

  return {
    status,
    readyState,
    ...(status === 'connected'
      ? {
          host: mongoose.connection.host,
          name: mongoose.connection.name,
        }
      : {}),
  };
}

export async function connectDatabase(uri: string = config.database.uri): Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    logger.info('Database already connected.');
    return mongoose;
  }

  // Setup connection lifecycle event handlers
  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connection established successfully.');
  });

  mongoose.connection.on('error', (err) => {
    logger.error('MongoDB connection runtime error:', { message: err.message });
  });

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB connection disconnected.');
  });

  try {
    if (config.database.debug) {
      mongoose.set('debug', true);
    }

    const instance = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      autoIndex: config.nodeEnv !== 'production',
    });

    return instance;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    logger.error(`Initial MongoDB connection failed: ${message}`);
    throw error;
  }
}

export async function disconnectDatabase(): Promise<void> {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    logger.info('MongoDB disconnected gracefully.');
  }
}
