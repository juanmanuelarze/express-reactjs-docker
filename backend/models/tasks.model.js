export default (connection)=>{

    const tableName = "tasks";

    return {
        getTasks: async (size)=>{
            const [rows, fields] = await connection.query(`SELECT * FROM ${tableName} LIMIT ${size}`);
            return rows;
        },
        storeTasks: async (title)=>{

            const store = await connection.query(`INSERT INTO ${tableName} (uuid, title) VALUES (UUID(), ${title})`);
            console.log(store);

        },
        finishTask:async (uuid)=>{
            const update = await connection.query(`UPDATE FROM ${tableName} SET state = 1, updated_at = NOW() WHERE uuid = '${uuid}'`);
            console.log(update);
        }
    }

}