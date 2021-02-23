const eventEmitter = require("events").EventEmitter
const util = require("util")

var Person = function(name){
    this.name = name
}

util.inherits(Person, eventEmitter)

module.exports = Person