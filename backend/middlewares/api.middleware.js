const {API_KEY} = require('../config/server');

module.exports = (req, res)=>{

    const apikey = req.headers["api-key"];

    if(apikey === API_KEY)
        return res.next();

    return res.send(401);

}