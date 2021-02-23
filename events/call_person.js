const person = require("./libs/person")

let john = new person("John")

john.on("Say", message => {
    console.log(`This was ${john.name}. ${message}`)
})

john.emit("Say", "Call me later...")
