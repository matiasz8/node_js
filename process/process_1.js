
var preguntas = [
    "Name: ",
    "Surname: ",
    "Note: "
]
var respuestas = [];

function show(i){
    process.stdout.write(preguntas[i])
}

process.stdin.on("data", function(data){
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length){
        show(respuestas.length)
    }
    else{
        console.log(`Student: ${respuestas[1]}, ${respuestas[0]}. Note: ${respuestas[2]}.`)
        process.exit()
    }
})

show(0)