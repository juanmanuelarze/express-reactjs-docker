import {API_KEY} from '../config/server.js';

export default (req, res)=>{

    const apikey = req.headers["api-key"];

    if(apikey === API_KEY)
        return res.next();

    return res.send(401);

}