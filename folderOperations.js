const fs = require("fs");

function createFolder(folderPath) {
    fs.mkdirSync(folderPath);
    console.log(`Folder '${folderPath}' created successfully!`);
    }

function listFiles(folderPath) {
    const files = fs.readdirSync(folderPath);
    console.log(`Files in '${folderPath}':`, files);
    //
    // The above code will print the files in the folder as an array.       
    // To print each file on a new line, you can use the forEach method:    
    files.forEach((file) => console.log(files));
    }
function deleteFolder(folderPath) {
    fs.rmdirSync(folderPath, { recursive: true });
    console.log(`Folder '${folderPath}' deleted successfully!`);
    }

module.exports = { createFolder, listFiles, deleteFolder };
// The createFolder function creates a folder at the specified path using fs.mkdirSync method.
// The listFiles function lists the files in the specified folder using fs.readdirSync method.
// The files are printed as an array, and then each file is printed on a new line using the forEach method.
// The module.exports statement exports the createFolder and listFiles functions for use in other files