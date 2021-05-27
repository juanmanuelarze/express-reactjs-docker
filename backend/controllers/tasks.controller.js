const fetchTasks = (req, res)=>{

    return res.send(200).json([]);

}

const finishTask = (req, res)=>{

    return res.send(200);

}

export {fetchTasks, finishTask};