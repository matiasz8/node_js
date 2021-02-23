const fs = require("fs")
const file = "./blog.txt"

let stream = fs.createReadStream(file, "UTF-8")

let data = "";

// la primera vez que detecte el evento "data" 
// se va a ejecutar esta funcion
stream.once("data", () => {
    console.log("Init stream");
})

// configuro el evento
stream.on("data", chunk => {
    console.log(`Chunk size working: ${chunk.length}`);
    data += chunk
})

//cuando termina
stream.on("end", () => {
    console.log("Event data finished.");
    console.log(data.length);
})
