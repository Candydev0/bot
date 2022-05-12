const mysql = require('mysql');
const con = mysql.createConnection({
  host : 'b2tloosk76zoocvyjvw9-mysql.services.clever-cloud.com' ,
    	database : 'b2tloosk76zoocvyjvw9',
    	user     : 'uckltov7fgtmolln',
    	password : 'a9zkM0RjmT7nKBIFzmo'
  });
var mysql_data;
con.connect(function(err) {
  if (err) {
    mysql_data = "Mysql Error On Connection Time:\n"+err;
    return mysql_data;
  } else {
    mysql_data = "true";
    return mysql_data;
  }});
  
module.exports = con;
