const assert = require('chai').assert
const add = require('.././commands/add')
const print = require('node-print')
const done = require('.././commands/done')

  describe('add', function() {
    it('Should be a function', function() {
      assert.isFunction(add)
    })

    it('Should not be null or undefined', function() {
      assert.exists(add, 'add is neither null or undefined')
    })

    // it('Should add a task to the list', function() {
    //   assert.changes(add, tasksParsed)
    // })

    it('Should add a task to the list', function() {
      add('Buy coffee')
      const fs = require('fs')
      const tasks = fs.readFileSync('./tasks.json', 'utf8')
      const tasksParsed = JSON.parse(tasks)
      assert.isNotEmpty(tasksParsed)
      done(1)
    })

    // it('Should fail when not given an argument', function() {
    //   assert.throws(add, Error())
    // })

  })
