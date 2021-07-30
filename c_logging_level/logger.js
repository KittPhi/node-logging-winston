const winston = require('winston');

const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: 'warn',
    }),
    new winston.transports.File({
      level: 'error',
      // Create the log directory if it does not exist
      filename: 'logs/errors.log',
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `Label🏷️`,
    }),
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const logger = winston.createLogger(logConfiguration);

// Log a message
logger.error('Hello, Winston logger, the first error!');
logger.warn('Hello, Winston logger, the first warning!');
logger.warn('Hello, Winston logger, the second warning!');
logger.error('Hello, Winston logger, the second error!');
logger.info('Hello, Winston logger, some info!');
logger.debug('Hello, Winston logger, a debug!');

// All Logs will be shown in the console output.
// Only the log that falls under level 'error' will be recorded in the example.log file.
