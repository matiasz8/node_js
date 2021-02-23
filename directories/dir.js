const fs = require("fs")

dir_img = "img"
dir_css = "css"

if(fs.existsSync(dir_img)){
    console.log(`Directory [${dir_img}] has been created.`);
}
else{
    //Sync mkdir
    fs.mkdirSync("img")
}

if(fs.existsSync(dir_css)){
    console.log(`Directory [${dir_css}] has been created.`);
}else{
    fs.mkdir("css", function(err){
        if(err){ throw("Error: " + err) }
    
        console.log("Folder created.");
    })
}
