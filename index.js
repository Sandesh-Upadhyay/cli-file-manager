const readline = require("readline");
const { createFile, readFile, writeFile, deleteFile } = require("./fileOperations");
const { createFolder, listFiles, deleteFolder } = require("./folderOperations");
const { systemInfo } = require("./systemInfo");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to CLI File Manager!");
console.log("Commands: create file, read file, write file, delete file, create folder, delete folder, list folder, system info");

rl.question("Enter command: ", (cmd) => {
  const args = cmd.split(" ");

  switch (args[0]) {
    case "create":
      if (args[1] === "file") createFile(args[2]);
      else if (args[1] === "folder") createFolder(args[2]);
      break;

    case "read":
      readFile(args[1]);
      break;

    case "write":
      writeFile(args[1], args.slice(2).join(" "));
      break;

    case "delete":
      if (args[1] === "file") deleteFile(args[2]);
      else if (args[1] === "folder") deleteFolder(args[2]);
      break;

    case "list":
      listFiles(args[1]);
      break;

    case "system":
      systemInfo();
      break;

    default:
      console.log("Invalid command!");
  }

  rl.close();
});

