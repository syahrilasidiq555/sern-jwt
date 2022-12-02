import express from 'express';
import db from './config/Database.js';
import router from './route/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('database connected!');
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use(router);


app.listen(5000,()=>console.log("running on port 5000"));