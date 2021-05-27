import express from 'express';
import {PORT} from './config/server.js';
import connection from './database.js';
//MODELS
import tasksModel from './models/tasks.model.js';

//ROUTES
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

const database = {
  tasks: tasksModel(connection)
}

//ATTACH DATABASE MODELS TO SERVER
app.database = database;

//INJECT SERVER TO ROUTES
tasksRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})
 
app.listen(PORT,() => {
  console.log(`Example app listening at http://127.0.0.1:${PORT}`)
})

