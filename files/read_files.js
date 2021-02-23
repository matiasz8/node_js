var fs = require("fs")

var files = fs.readdirSync(".")

// sync read dir
console.log(files)
console.log("Second case")

// async read dir
fs.readdir("./", (err, files) => {
    if(err){ throw err;}
    console.log(files)

    // Sync read file
    // var file = fs.readFileSync("./texts.txt", "UTF-8")
    // console.log(file)

    // Async read file
    fs.readFile("./texts.txt", "UTF-8", (err, file) => {
        if(err){ throw err;}
        console.log(file)
    })

    console.log("Content File")

})

