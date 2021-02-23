const fs = require("fs")
const file = "./blog.txt"

let file_size = fs.readFileSync(file)

console.log(`File size: ${file_size.length}`);
