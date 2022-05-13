const path = require('path');
const dirPath = path.join(__dirname, '../mysql.js');
const mysql= require(dirPath);
const setnew = (msg, refby, refst)=> {
  var sql = `INSERT INTO users(id, fname, lname, username, balance, refer_count, refer_by, total_earned, refer_status) VALUES (${msg.message.chat.id},'${msg.message.chat.first_name}','${msg.message.chat.last_name}','${msg.message.chat.username}',0,0,${refby},0,${refst})`;
  mysql.query(sql, function (err, result, fields) {
  if (err) throw err;
  });
};
const join_text= `💡<b> You must join our channel

➡ </b>@FreeNetflixbySuborno

<b>▫ ️before starting using the Bot</b>`;
const start = (msg)=>{
  var sql= "SELECT * FROM `users` WHERE id="+msg.message.chat.id;
  mysql.query(sql, function (err, result, fields) {
      if(result.length!=1){
        msg.replyWithHTML(join_text);
        setnew(msg,0,1);
      }else{
        msg.reply("old user");
      }
    });


};
module.exports = start;