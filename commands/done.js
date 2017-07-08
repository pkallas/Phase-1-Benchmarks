'use strict'
const fs = require('fs');
const tasks = fs.readFileSync('./tasks.json', 'utf8');
const tasksParsed = JSON.parse(tasks);

const done = (num) => {
  try {
    let index = tasksParsed.findIndex((task) => {
      return task.id === +num
    })
    if (index === -1) {
      throw new Error('ID ' + num + ' does not exist')
    }
    console.log('Task ' + num + ' was completed!')
    tasksParsed.splice(index, 1)
    fs.writeFileSync('./tasks.json', JSON.stringify(tasksParsed));
    }
  catch(error) {
    num === undefined ? console.log('Please provide an ID; use list to see available IDs') :
    console.log('ID ' + num + ' does not exist; use list to see available IDs')
  }
}

module.exports = done
