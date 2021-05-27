const {API_KEY} = require('../config/server');

module.exports = (req, res, next)=>{

    const apikey = req.headers["api-key"];

    if(apikey === API_KEY)
        return next();

    return res.send(401);

}