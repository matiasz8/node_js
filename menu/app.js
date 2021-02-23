const readline = require('readline');
const Messages = require('./messages');
const Document = require('./document');
const Directory = require('./directory');

const dir = new Directory();

let interface = readline.createInterface(process.stdin, process.stdout);

const tools = `Commans: :q = exit  |  :sa = save as  |  :s = save
===================================`;

const screen = `
    ###### Text editor ###### \n
    Choose an option: \n
    1 - Creace a document
    2 - Open document
    3 - Close editor\n
`;

mainScreen();

function mainScreen() {
    clear()
    interface.question(screen, res => {
        switch(res.trim()){
            case '1':
                createFile();
            break
        
            case '2':
                openFileInterface();
            break
        
            case '3':
                interface.close()
            break

            default:
                mainScreen();

        }
    })
}


function createFile(){
    let file = new Document(dir.getPath());
    renderInterface(file);
    readCommands(file);
}


function openFileInterface(){
    console.log("en 2");

}

function renderInterface(file, message) {
    clear();
    if (file.getPath() == ''){
        console.log(`| Untitle |`) 
    }
    else{
        console.log(`| ${file.getName()} |`)
    }
    // (file.getPath() == '') ? console.log(`| Untitle |`) : console.log(`| ${file.getName()} |`)

    console.log(tools);
}

function readCommands(file) {
    
}

function clear() {
    process.stdout.write('\033c');
}