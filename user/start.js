const path = require('path');
const dirPath = path.join(__dirname, '../mysql.js');
const mysql= require(dirPath);
const start = (msg)=>{
const join_text= `💡 You must join our channel

➡ @FreeNetflixbySuborno

▫ ️before starting using the Bot`;
mysql.ping((err) => {
        if(err) return msg.reply("MySQL Server is Down");
        msg.reply("MySQL Server is Active");});
  
};
module.exports = start;