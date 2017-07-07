'use strict'
const fs = require('fs');
const tasks = fs.readFileSync('./tasks.json', 'utf8');
const tasksParsed = JSON.parse(tasks);

const add = (task) => {
  try {
    if (!task) {
      throw new Error()
    }
    let toDo = new Object();
    toDo.task = task;
    const id = () => tasksParsed.length !== 0 ? tasksParsed[tasksParsed.length - 1].id + 1 : 1;
    toDo.id = id();
    tasksParsed.push(toDo);
    console.log('Created task ' + toDo.id + '.');
    fs.writeFileSync('./tasks.json', JSON.stringify(tasksParsed));
  }
  catch(error) {
    console.log("Please include a task after add")
    console.log("Don't forget to use quotes")
  }
}

module.exports = add
