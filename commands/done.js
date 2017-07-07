'use strict'
const fs = require('fs');
const tasks = fs.readFileSync('./tasks.json', 'utf8');
const tasksParsed = JSON.parse(tasks);

const done = (num) => {
  try {
    let index = tasksParsed.findIndex((task) => {
      return task.id === +num
    })
    if (index < 0) {
      throw new Error('ID ' + num + ' does not exist')
    }
    tasksParsed.splice(index, 1)
    fs.writeFileSync('./tasks.json', JSON.stringify(tasksParsed));
    }
  catch(error) {
    console.log('ID ' + num + ' does not exist')
  }
}

module.exports = done
