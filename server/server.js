import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employee from './routes/employee.js';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/', employee);

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
})