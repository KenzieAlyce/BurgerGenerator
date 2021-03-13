const path = require('path');
const express = require('express');
var router = express.Router();
// burger.js no code
var burger = require(path.resolve(__dirname, "../models/burger.js"));

router.get("/", (req, res) => {
  burger.all(data => {
      var handleBarsObj = {
          burgers: data 
      }
      response.render("index", handleBarsObj)
  });
});

router.post("/api/burger", (req, res) => {
 burger.create(['burgers'], [req.body.burgers], res => {
  response.json({id: res.insertId})
});
});

router.put("/api/burger/:id", (req, res) => {
 burger.update({devoured: (req.body.devoured) ? true:false},
 {
     id: req.params.id
 }, res => {
  if (res.changedRows === 0) {
      return response.status(404).end()
  }
  response.status(200).end()
 });
});
  module.exports = router;