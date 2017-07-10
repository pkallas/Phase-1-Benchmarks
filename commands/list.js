'use strict'
const fs = require('fs');
const tasks = fs.readFileSync('./tasks.json', 'utf8');
const tasksParsed = JSON.parse(tasks);
const print = require('node-print');

const list = () => {
  print.pt(tasksParsed);
  if (tasksParsed.length !== 0) {
    console.log(tasksParsed[tasksParsed.length - 1].id + ' tasks')
  }
}

module.exports = list
