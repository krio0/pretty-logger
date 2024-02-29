const PrettyLogger = require('./prettyLogger');

const logger = new PrettyLogger();

// log example
logger.log('This is a normal message');
logger.log('This is a warning', 'warn');
logger.log('This is an error', 'error');
