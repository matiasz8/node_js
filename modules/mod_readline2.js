readline = require("readline")
util = require("util")

var rl = readline.createInterface(process.stdin, process.stdout)

var day = {
    weather : "",
    temperature: []
}

rl.question("what's the weather like? ", response => {
    day.weather = response
    rl.setPrompt("What's the temperature? ")
    rl.prompt()
})

rl.on("line", input => {
    if (input === "exit"){
        console.log(`weather: ${day.weather}`)
        console.log(`Temperatures: ${day.temperature}`)
        var mensaje = util.format(
            "Weather: %s. Temps: %j",
            day.weather,
            day.temperature)
        console.log(mensaje)
        process.exit()
    }

    day.temperature.push(input.trim())
    rl.setPrompt("What's the temperature? ")
    rl.prompt()
})
