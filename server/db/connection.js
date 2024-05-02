import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url)
const db = client.db(dbName);

export default db;