import RequestUtil from './RequestUtil';

const fetchTasks = async function(taskLength){

    const tasks = await RequestUtil(`/tasks/${taskLength}`, "get");

    if(tasks)
        return tasks;

}

const finishTask = async function(uuid){

    const response = await RequestUtil(`/tasks/finish/${uuid}`, "put");

    if(response)
        return response.success;

}

export {fetchTasks, finishTask};