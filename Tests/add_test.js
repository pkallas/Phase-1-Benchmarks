const expect = require('chai').expect
const add = require('.././commands/add')
const print = require('node-print')
const done = require('.././commands/done')
const list = [{"task":"Buy coffee","id":1}]

  describe('add', function() {
    beforeEach(function() {
      done(1)
    })

    it('Should be a function', function() {
      expect(add).to.be.a('function')
    })

    it('Should add Buy coffee with id of 1 to the list', function() {
      const fs = require('fs')
      const tasks = fs.readFileSync('./tasks.json', 'utf8')
      const tasksParsed = JSON.parse(tasks)
      add('Buy coffee')
      expect(list).to.deep.equal(tasksParsed)
    })

    it('Should add a task to the list', function() {
      const fs = require('fs')
      const tasks = fs.readFileSync('./tasks.json', 'utf8')
      const tasksParsed = JSON.parse(tasks)
      add('Buy coffee')
      expect(tasksParsed).to.have.lengthOf(1)
    })

    afterEach(function() {
      done(1)
    })

  })
