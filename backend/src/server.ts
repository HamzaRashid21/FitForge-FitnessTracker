import type { Server } from 'http';
import { app } from './app.js';
import { config } from './config/env.js';
import { connectDatabase, disconnectDatabase } from './database/connection.js';
import { logger } from './common/utils/logger.js';

let server: Server | null = null;

async function startServer(): Promise<void> {
  try {
    logger.info('Initializing FitForge Backend API...', {
      environment: config.nodeEnv,
      apiPrefix: config.apiPrefix,
    });

    // 1. Establish Database Connection
    try {
      await connectDatabase();
    } catch (dbError) {
      logger.warn(
        'MongoDB could not be connected at startup. The server will start in degraded mode.',
        { error: dbError instanceof Error ? dbError.message : 'Unknown' }
      );
    }

    // 2. Start HTTP Server
    server = app.listen(config.port, () => {
      logger.info(`FitForge Backend server is listening on port ${config.port}`, {
        healthUrl: `http://localhost:${config.port}${config.apiPrefix}/health`,
        corsOrigins: config.corsOrigins,
      });
    });
  } catch (error) {
    logger.error('Fatal server startup failure', {
      error: error instanceof Error ? error.message : 'Unknown',
    });
    process.exit(1);
  }
}

async function shutdown(signal: string): Promise<void> {
  logger.info(`Received ${signal}. Starting graceful shutdown...`);

  if (server) {
    server.close(async () => {
      logger.info('HTTP server closed.');
      try {
        await disconnectDatabase();
      } catch (err) {
        logger.error('Error during database disconnection', {
          error: err instanceof Error ? err.message : 'Unknown',
        });
      }
      logger.info('Graceful shutdown completed. Exiting process.');
      process.exit(0);
    });

    // Force shutdown if cleanup takes too long
    setTimeout(() => {
      logger.error('Graceful shutdown timed out. Forcefully terminating process.');
      process.exit(1);
    }, 10000).unref();
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => void shutdown('SIGTERM'));
process.on('SIGINT', () => void shutdown('SIGINT'));

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Promise Rejection', {
    reason: reason instanceof Error ? reason.message : reason,
  });
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception', {
    error: error.message,
    stack: error.stack,
  });
  process.exit(1);
});

// Launch server
void startServer();
