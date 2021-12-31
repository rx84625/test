


const authMiddleware = async (req, res, next) => {
    try {
      /*if(!req.headers["authorization"]){
        throw new Error('Unauthorization')
      }*/

      next();
    } catch (e) {
      next(e);
    }
  };

  module.exports.authMiddleware = authMiddleware;