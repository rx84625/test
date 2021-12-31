

// middleware used to log the response

const errorMiddleware = async (err, req, res, next) => {
    try {
      //------
      // LOG
      //------
      const code = err.statusCode || 500;

      const message = err.statusCode ? err.message : "Error in the server" 
  
      const info = res.locals;
  
      console.log({
        info,
        code,
        message,
        error: err,
        stack: err.stack,
        headers: req.headers,
        body: req.body,
        baseUrl: req.baseUrl,
        hostname: req.hostname,
        method: req.method,
        originalUrl: req.originalUrl,
        params: req.params,
        path: req.path,
        query: req.query,
        route: req.route
      });
  
  
      //---------
      // Respose 
      //---------
  
      
      res.status(code).send({message});
  
    } catch (e) {
      console.error(e);
    }
  };

  module.exports.errorMiddleware = errorMiddleware;