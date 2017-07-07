'use strict'
const fs = require('fs');
const tasks = fs.readFileSync('./tasks.json', 'utf8');
const tasksParsed = JSON.parse(tasks);
const print = require('node-print');

const list = () => {
  print.pt(tasksParsed);
}

module.exports = list
