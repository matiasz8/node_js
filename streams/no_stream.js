const fs = require("fs")
const readline = require("readline")

let i = readline.createInterface(process.stdin, process.stdout)

i.question("Tell me your name: ", human => {
    human_book = `${human.trim()}_wishes.txt`
    fs.writeFileSync(human_book, `The ${human}'s wishes contains: \n`)
    process.stdout.write("Now, tell me your wishes ([exit] to scape): \n")

    i.on("line", new_wish =>{
        if(new_wish.trim() == "exit" ){
            console.log(`Ok ${human}, find your wishes on [${human_book}]`);
            i.close()
        }else{
            fs.appendFileSync(human_book, new_wish.trim()+ "\n")
        }
    })
})

