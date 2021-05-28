module.exports = (connection)=>{
    
    const tableName = "tasks";

    return {
        getTasks: async (size)=>{
            const [rows, fields] = await connection.promise().query(`SELECT * FROM ${tableName} LIMIT ${size}`);
            return rows;
        },
        storeTask: async (title)=>{
            await connection.promise().query(`INSERT INTO ${tableName} (uuid, title) VALUES (UUID(), ?)`, [title]);
        },
        finishTask:(uuid)=>{
            connection.promise().query(`UPDATE ${tableName} SET state = 1, updated_at = NOW() WHERE ${tableName}.uuid = ?`, [uuid]);
        },
        _getUndoneTask: async ()=>{
            const [rows] = await connection.promise().query(`SELECT ${tableName}.uuid FROM ${tableName} WHERE state = 0 LIMIT 1`);

            if(rows.length === 1)
                return rows[0];

            return false;
            
        }
    }

}