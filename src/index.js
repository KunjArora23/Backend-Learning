import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({
    path: './env'
})

connectDb();



// In this method we are connecting the db and writing all the code in index.js
/*
import express from "express";

const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;


            app.listen(process.env.PORT, () => {
                console.log(`App is listening on ${process.env.PORT}`)
            })
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})();
*/ 