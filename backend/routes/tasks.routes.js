const tasksController = require('./../controllers/tasks.controller.js');
const apiMiddleware = require('../middlewares/api.middleware.js');

const PREFIX = 'tasks';

module.exports = (server)=>{

    const taskCntl = tasksController(server.database);

    server.get(`/${PREFIX}/:size`, apiMiddleware, async (req, res)=>{

        try{

            const size = req.params.size || 3;
            const tasks = await taskCntl.getTasks(size);

            res.send(200).json(tasks);

        }catch(e){
            console.log(e);
            return res.send(500).json({message: e});;
        }

    });

    server.put(`/${PREFIX}/:uuid`, apiMiddleware, async ()=>{

        try{

            const uuid = req.params.uuid;

            if(!uuid)
                throw new Exception("UUID does not specified.");

            await taskCntl.finishTask(uuid);

            res.send(200);

        }catch(e){
            console.log(e);
            return res.send(500).json({message: e});
        }

    });

}