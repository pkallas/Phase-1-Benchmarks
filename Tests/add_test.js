const assert = require('chai').assert
const add = require('.././commands/add')
const print = require('node-print')

  describe('add', function() {
    it('Should add a task to the list', function() {
      let result = add('Buy Milk');
      assert.deepEqual(result, 'Created task 1')
    })
  })
