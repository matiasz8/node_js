// console.log(process.argv)

function param(p){
    index = process.argv.indexOf(p)
    return process.argv[index +1]
}

nombre = param("--nombre")
edad = param("--edad")
// console.log(`Nombre: ${nombre}, Edad ${edad}`)
// node process.js --nombre "raul" --edad 22

var name;
var questions = [
    "Name: ",
    "Surname: ",
    "Note: "
]
var answers = [];

process.stdout.write("Name: ")


process.stdin.on("data", function(data){
    name_str = data.toString().trim()
    process.stdout.write(`The name is: ${name_str}. Welcome!`)
    process.exit()
})