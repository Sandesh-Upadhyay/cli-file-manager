const fs = require("fs");

function createFile(filePath) {
  fs.writeFileSync(filePath, "");
  console.log(`File '${filePath}' created successfully!`);
}

function readFile(filePath) {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(`File Content:\n${data}`);
}

function writeFile(filePath, content) {
  const existingContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";
  const newContent = existingContent ? `${existingContent}\n${content}` : content;
  fs.writeFileSync(filePath, newContent);
  console.log(`Content written to '${filePath}'`);
}

function deleteFile(filePath) {
  fs.unlinkSync(filePath);
  console.log(`File '${filePath}' deleted successfully!`);
}

module.exports = { createFile, readFile, writeFile, deleteFile };

