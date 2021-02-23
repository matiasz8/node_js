const events = require("events")
const emmiter = new events.EventEmitter()

emmiter.on("getInfo", (status, message) => {
    console.log(`${status}. ${message}`)
})

emmiter.emit("getInfo", 200, "Info received Ok")
