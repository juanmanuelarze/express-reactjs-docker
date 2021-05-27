import express from 'express';
import {PORT} from './config.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})
 
app.listen(PORT,() => {
  console.log(`Example app listening at http://127.0.0.1:${PORT}`)
})

