const { BroadcastLog, RegularLogsSet } = require("../util/logbroadcaster");

const broadcast = BroadcastLog(RegularLogsSet);

const requestlogger = (req,res,next)=>{
    const logData = "Method: "+req.method+ "\tUrl: "+req.url+"\tTime: "+(new Date());
    broadcast(logData);
  next();
};

module.exports = requestlogger;