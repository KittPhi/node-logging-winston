const winston = require('winston');

const logConfiguration = {
  transports: [
    // To Terminal
    // new winston.transports.Console()
    new winston.transports.File({
      filename: 'logs/logs.log',
    }),
  ],
};

const logger = winston.createLogger(logConfiguration);

// Log a message
logger.log({
  // Message to be logged
  message: 'Hello, Winston!',

  // Level of the message logging
  level: 'info',
});
// Log a message
logger.info('Hello, Winston!');
