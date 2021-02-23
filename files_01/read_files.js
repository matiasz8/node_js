const fs = require("fs")
const file = "chem.txt"
const file2 = "chem_2.txt"
const file3 = "chem_3.txt"

// creating files

// sync ways: exists and constants.F_OK
if (fs.existsSync(file)) {
    console.log("File1 founded!")
}
else {
    console.log("File1 does not found")
    // process.exit()
}

console.log("Continue...")

fs.access(file, fs.constants.F_OK, err => {
    if (err) {
        console.log("File1 does not found")
    }
    else {
        console.log("File1 founded!")
        // process.exit()
    }
})

// Write in file
const content = "\nChemistry new content";

// Sync way
console.log("Writting in file1");
fs.writeFileSync(file, content)
console.log("File1 has been written synchronously");


// async way
fs.writeFile(file2, content, err => {
    if(err){ throw("Hubo un error al escribir en el archivo")}

    console.log("File2: writing content.");
})

const additional = "\nThis is an append text."


// Sync append
fs.appendFile(file3, additional, err => {
    if(err){ throw("It was not possible to attach text.")}

    console.log("File3: Text attached.");
})
