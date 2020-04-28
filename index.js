const TelegramBot = require('node-telegram-bot-api');
const token = '946921278:AAGk69mnPplCOpXHozlDqvfzDs85pHOiRr4';

const bot = new TelegramBot(token, {polling: true});
