const fs = require("fs");
const consoleLogReceiver = (log) => {
    console.log(log);
}
const fileLogReceiver = (filename) =>  (log) =>{
    fs.appendFile(filename, log+"\n", (err) => {console.log(err)});
}

const RegularLogsSet = [consoleLogReceiver,  fileLogReceiver("plainlogs.txt")];
const ErrorLogsSet = [consoleLogReceiver, fileLogReceiver("errorlogs.txt")];

const BroadcastLog = (logset) => (log) => logset.forEach(recipient=>recipient(log));

module.exports = {BroadcastLog, RegularLogsSet, ErrorLogsSet};
