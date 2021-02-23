const { stderr } = require("process")

const exec = require("child_process").exec

exec("ls", (err, stdout) => {
    if (err){
        throw err
    }
    console.log("Command executed succesfully")
    console.log(stdout)
})

const x = 3
const y = 2
elements = ["./sum.sh", x, y]

exec(elements.join(' '), (err, stdout) => {
    if(err){
        throw err
    }
    console.log("Script executed")
    console.log(stdout)

})