import mongoose from "mongoose"
import dotenv from 'dotenv'
import { DB_NAME } from "../constants.js";

dotenv.config({
    path: '../../.env'
})



const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Database is succesfully connected");

    } catch (error) {
        console.log("MONGODB CONNECTION FAILED: ",error);
        process.exit();

    }
}

export default connectDb;