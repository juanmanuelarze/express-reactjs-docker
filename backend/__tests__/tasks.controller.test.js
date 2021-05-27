import tasksController from './../controllers/tasks.controller.js';
import connection from './../database.js';

test("Fetch tasks", ()=>{

    const taskCntl = tasksController(connection);
    const taskLength = 10;

    const tasks = await taskCntl.getTasks(taskLength);

    // expect(tasks.length).toBe(taskLength);

})

test("Finish task", ()=>{

    // const taskCntl = tasksController(connection);
    // taskCntl.finishTask();

})