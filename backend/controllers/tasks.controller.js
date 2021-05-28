const {fetchIpsum} = require('./../utils/hipsterIpsumAPI.js');

module.exports = (database)=>{

    return {
        /*
        Get number of tasks from database and if have some left create the necesary, 
        stores its and return the number of tasks requested
        tasksLength: int
        */
        getTasks: async (tasksLength)=>{

            var tasks = await database.tasks.getTasks(tasksLength);

            if(tasks.length < tasksLength){
                
                const newTasksSize = tasksLength - tasks.length
                const newTasksTitles = await fetchIpsum(newTasksSize);

                for await(title of newTasksTitles){
                    await database.tasks.storeTask(title.trim());
                }

                tasks = await database.tasks.getTasks(tasksLength);

            }

            return tasks;

        },
        /*
        Updates task state from 0 to 1
        uuid: string | UUID identifier of the task
        */
        finishTask: (uuid)=>{
            
            console.log(`Task ${uuid} done!`);
            database.tasks.finishTask(uuid);

        }
    }

}