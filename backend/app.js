const express = require('express');
const {PORT} = require('./config/server');
const connection = require('./database');
const cors = require('cors');

const corsOptions = {
  origin: [`127.0.0.1:${PORT}`, "http://localhost:3001"]
};

//MODELS
const tasksModel = require('./models/tasks.model');

//ROUTES
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
app.use(cors(corsOptions));

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

