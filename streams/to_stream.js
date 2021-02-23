const fs = require("fs")
const readline = require("readline")

let i = readline.createInterface(process.stdin, process.stdout)

i.question("Tell me your name: ", human => {
    human_book = `${human.trim()}_wishes.txt`

    let stream = fs.createWriteStream(human_book)
    stream.write(`The ${human}'s wishes contains: \n`)
    process.stdout.write("Now, tell me your wishes. Only have three!\n")

    let counter = 0
    i.on("line", new_wish =>{
        counter +=1
        if(counter == 3 || new_wish.trim() == "exit" ){
            console.log(`Ok ${human}, find your wishes on [${human_book}]`);
            stream.close()
            i.close()
        }else{
            stream.write(new_wish.trim()+ "\n")
        }
    })
})

