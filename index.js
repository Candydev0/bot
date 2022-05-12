const bot = require("./tele.js");
const mysql= require("./mysql.js");
const express = require('express');
const app = express();
//components Inducld
const start= require('./user/start.js');
///bot Work
bot.start(start);

///Express Work
app.get('/demoref/', (req, res) => res.send('i am out of world!'));
app.get('/demoref/mysql', (req, res) => {
  mysql.ping((err) => {
        if(err) return res.status(500).send("MySQL Server is Down");
        res.send("MySQL Server is Active");});});
app.use(bot.webhookCallback("/demoref/"));
app.listen(3000);