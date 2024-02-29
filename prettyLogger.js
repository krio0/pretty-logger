const chalk = require('chalk');
const moment = require('moment');

class PrettyLogger {
  constructor() {
    this.format = 'YYYY-MM-DD HH:mm:ss';
  }

  log(message, level = 'info') {
    const timestamp = moment().format(this.format);
    let logFunction = console.log;
    let colorFunction = chalk.white;

    switch (level) {
      case 'info':
        colorFunction = chalk.blue;
        break;
      case 'warn':
        colorFunction = chalk.yellow;
        logFunction = console.warn;
        break;
      case 'error':
        colorFunction = chalk.red;
        logFunction = console.error;
        break;
      default:
        break;
    }

    const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    logFunction(colorFunction(formattedMessage));
  }
}

module.exports = PrettyLogger;
