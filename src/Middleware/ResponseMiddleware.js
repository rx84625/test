

// middleware used to log the response

const responseMiddleware = async (req, res, next) => {
    try {
      //------
      // LOG
      //------
      const code = res.locals.responseCode || 200;
  
      const info = res.locals;
  
      console.log({
        info,
        code,
        response: res.locals.responseSend,
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
  
      
      res.status(code).send(res.locals.responseSend);
  
    } catch (e) {
      console.error(e);
    }
  };

  module.exports.responseMiddleware = responseMiddleware;