const { query } = require('express');
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root' 
})



conn.connect(() => {
    console.log('Mysql woth docker container connected.')
})



conn.end(() => {
    console.log('Mysql disconnected.')
})


