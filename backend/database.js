import {HOST, USER, PASSWORD, DATABASE} from './config/database.js';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD
});

export default connection;