const { BroadcastLog, ErrorLogsSet, RegularLogsSet} = require("../util/logbroadcaster");

const broadcast = BroadcastLog(ErrorLogsSet);

const errorlogger = (err,req,res,next)=>{
  const logData = "Method: "+req.method+ "\tUrl: "+req.url+"\tTime: "+(new Date())+"\tError: "+err;
    broadcast(logData);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
};

module.exports = errorlogger;