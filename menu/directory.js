const fs = require("fs")
const path = require("path")

class Directory{

    constructor(){
        this._directory = "docs"
        this._path = __dirname
        this.createDocsDir()
    }

    createDocsDir(){
        this._path = path.join(this._path, this._directory)
        //crea la carpeta
        if(!fs.existsSync(this._directory)){
            fs.mkdirSync(this._directory)
        }
    }

    getPath(){
        return this._path
    }

    getShortPath(){
        const paths = path.parse(this._path)
        let delimiter = '/'

        //for windows
        if(paths.dir.indexOf(delimiter) < 0){
            delimiter = `\\`
        }
        
        // que devuelve esto?
        return `${paths.root}...${delimiter}${paths.name}`
    }

    getFilesInDir(){
        const files = fs.readdirSync(this._path) 
        let n = 0

        console.log(`
################################################
File List from: \n[${this.getShortPath()}]
################################################`);

        files.forEach(file => {
            console.log(file);
            n++;
        })
    }
}

module.exports = Directory