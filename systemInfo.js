const os = require("os");

function systemInfo() {
  console.log(`OS: ${os.platform()}`);
  console.log(`CPU: ${os.cpus().length} cores`);
  console.log(`RAM: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
}

module.exports = { systemInfo };

