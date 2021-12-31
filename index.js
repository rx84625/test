#!/usr/bin/env node

/**
 * Module dependencies.
 */

 const app = require('./src/app');
 
 /**
  * Get port from environment and store in Express.
  */
 
const port = process.env.PORT || '3000';
app.set('port', port);
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



// Uncaught JavaScript exception
process.on("uncaughtException", (err) => {
    // LOG
    console.error({
        error: err,
        info: { method: "uncaughtException", message: "unhandle error" },
        stack: err.stack || new Error().stack
    });
});

// Promise is rejected AND No error handler is attached to the promise
process.on("unhandledRejection", (reason, promise) => {
    // LOG
    console.error({
        error: reason,
        info: { method: "unhandledRejection", message: "unhandle Promise" },
        promise: promise,
        stack: reason.stack || new Error().stack
    });
});

//-----------------
// Signal events
//-----------------

// Exist -> Ctrl + C
process.on('SIGINT', function() {
    console.log({
        info: {
        method: "APP Exist",
        message: `SIGINT`
        }
    });  

    // No Error
    process.exit(0);
});
