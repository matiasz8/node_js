const eventEmitter = require("events").EventEmitter
const util = require("util")

var Person = function(name){
    this.name = name
}

util.inherits(Person, eventEmitter)

let person = new Person("Miuachi")

person.on("Talk", message => {
    console.log(`${person.name}: ${message}`)
})

person.emit("Talk", "miaaaauuu")
person.emit("Talk", "miaaaauuu")
person.emit("Talk", "miaaaauuu")

