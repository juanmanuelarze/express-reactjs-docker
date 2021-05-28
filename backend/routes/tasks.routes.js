const tasksController = require('./../controllers/tasks.controller.js');
const apiMiddleware = require('../middlewares/api.middleware.js');

const PREFIX = 'tasks';

module.exports = (server)=>{

    const taskCntl = tasksController(server.database);

    server.get(`/${PREFIX}/:size`, apiMiddleware, async (req, res)=>{

        try{

            const size = req.params.size ? req.params.size : 3;
            const tasks = await taskCntl.getTasks(size);

            return res.status(200).send(tasks);

        }catch(e){
            console.log(e);
            return res.status(500).send({success: false, message: e});;
        }

    }); 

    server.put(`/${PREFIX}/finish/:uuid`, apiMiddleware, async (req, res)=>{

        try{
            
            const uuid = req.params.uuid;

            if(!uuid)
                throw "UUID does not specified.";

            await taskCntl.finishTask(uuid);

            res.status(200).send({success: true});

        }catch(e){
            console.log(e);
            return res.status(500).send({success: false, message: e});
        }

    });

}