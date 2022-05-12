const {
  Telegraf,
  session,
  Markup
} = require('telegraf');
const v = require("./var.js");
const bot = new Telegraf(v.token);
module.exports = bot;