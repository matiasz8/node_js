const { read } = require("fs")

readline = require("readline")

var rl = readline.createInterface(process.stdin, process.stdout)

// rl.question("Tell me your secrets: ", response => {
//     console.log(`Secret: ${response}`)
//     // process.exit()
// })

var person = {
    wheater : "",
    temperature: BigInt
}

rl.question("what's the weather like? ", response => {
    person.wheater = response
    rl.setPrompt("Tell me the current temperature: ")
    rl.prompt()
    process.exit()
})