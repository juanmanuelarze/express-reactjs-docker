import {fetchIpsum} from './../utils/hipsterIpsumAPI.js';

export default (database)=>{

    return {
        /*
        Generate tasks titles using HipsterIpsum API https://hipsum.co/the-api/
        size: int | number of titles
        */
        _generateTasksTitles: async (titlesLength)=>{
            const titles = await fetchIpsum(titlesLength);
            console.log(titles);
            return titles;
        },
        /*
        Store task in DB
        title: string
        */
        storeTask: async (title)=>{
            await database.tasks.storeTask(title);
        },
        /*
        Get number of tasks from database and if have some left create the necesary quantity, 
        stores it and return the number of tasks requested
        size: int
        */
        getTasks: async (tasksLength)=>{

            var tasks = await database.tasks.getTasks(tasksLength);

            if(tasks.length < tasksLength){
                
                const newTasksSize = tasksLength - tasks.length
                const newTasks = this._generateTasksTitles(newTasksSize);

                for await(tasksTitles of newTasks){
                    await this.storeTask(tasksTitles);
                }

                tasks = await database.tasks.getTasks(tasksLength);

            }

            return tasks;

        },
        /*
        Updates task state from 0 to 1
        uuid: string | UUID identifier of the task
        */
        finishTask: async (uuid)=>{

            await server.database.tasks.finishTask(uuid);

        }
    }

}