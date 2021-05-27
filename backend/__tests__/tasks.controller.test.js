const connection = require('./../database.js');
const tasksController = require('./../controllers/tasks.controller.js');
const tasksModel = require('./../models/tasks.model');

afterAll(()=>{
    connection.end();
})

test("Fetch tasks", async ()=>{

    const taskCntl = tasksController({
        tasks: tasksModel(connection)
    });

    const taskLength = 10;
    const tasks = await taskCntl.getTasks(taskLength);

    expect(tasks.length).toBe(taskLength);

})

test("Finish task", async ()=>{

    const database = {
        tasks: tasksModel(connection)
    };

    const taskCntl = tasksController(database);
    const undoneTask = await database.tasks._getUndoneTask();

    expect(undoneTask !== false).toBe(true);

    await taskCntl.finishTask(undoneTask.uuid);

})