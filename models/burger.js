const path = require('path');
const orm = require('../config/orm');
var burger = {
    all:function(cb){
        orm.selectAll("burgers", res => {
            console.log(res);
            cb(res)
        })
    },
    create:function(cols, vals, cb){
         orm.insertOne("burgers", cols, vals, function(res){
             cb(res)
         })
    },
    update:function(fieldsKeyVal, whereKeyVal, cb){
        orm.updateOne("burgers", fieldsKeyVal, whereKeyVal, function(res){
            cb(res)
        })
    }
    //create:
};


module.exports = burger;