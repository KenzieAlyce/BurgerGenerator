const path = require('path');
const connection = require(path.resolve(__dirname, './connection.js'));

var orm = {
 insertOne:function(table, cols, vals, cb = this.loopObject){
     let queryString = `INSERT INTO ${table} (${cols,toString()}) VALUES (${this.printQuestionMarks(vals.length)});`
     connection.query(queryString, vals, function(err, res){
         if(err) throw err;
         cb(res);
     })
 },
 create:function(table, cols, vals, cb = this.loopObject){
     let queryString = `INSERT INTO ${table} (${cols,toString()}) VALUES (${this.printQuestionMarks(vals.length)});`
     connection.query(queryString, vals, function(err, res){
        if(err) throw err;
        cb(res);
    })
 },
 query:function(sql){
     if(sql === undefined) return;
     connection.query(sql, function(err, res, fields){
         if(err) throw err;
         let topRow = [];
         let rows = [];
         for(var i = 0; i < res.length; i++){
             var cells = [];
             for(var property in res[i]){
                 if(res[i].hasOwnProperty(property)){
                     if(topRow === undefined || topRow.length<Object.keys(res[i].length)){
                         topRow.push(property.red)
                     }
                 }
             }
         }
     })
 },
 querySelect:function(){},
 selectAll:function(){},
 updateOne:function(){}
};