fs = require("fs")

// rename file Sync

const file_1 = "./hello_1.txt"
if (fs.existsSync(file_1)) {
    fs.renameSync(file_1, "./bye_1.txt")
    console.log("File Changed!")
}
else {
    console.log(`File [${file_1}] does not found`)
    // process.exit()
}

// rename file Async

const file_2 = "./hello_2.txt"
if (fs.existsSync(file_2)) {
    fs.rename(file_2, "./bye_2.txt", err => {
        if(err){ throw err;}
    })
    console.log("File Changed!")
}
else {
    console.log(`File [${file_2}] does not found`)
    // process.exit()
}

const move_file = "./to_move.txt"
// move file async
if (fs.existsSync(move_file)) {
    console.log("Moving file...")

    fs.rename(move_file, "./moved/to_move.txt", err => {
        if(err){ throw err;}
        console.log("file moved")
        
    })
}
else {
    console.log(`File [${move_file}] does not found`)
    // process.exit()
}

const del_file = "./del.txt"
// delete file async
if (fs.existsSync(del_file)) {
    fs.unlinkSync(del_file)
    console.log(`File [${del_file}] deleted.`) 
}
else {
    console.log(`File [${del_file}] does not found`)
    // process.exit()
}
