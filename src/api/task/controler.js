import { MongoClient, ObjectID } from 'mongodb';
import task from "./model";
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017';
const dbName = 'taskDB';
mongoose.connect(url + '/' + dbName);

const taskControler = {
    get: function (req, res) {
        res.send("ljgjzdg aerrgilueargberjgb zergerbherb erberhbvkejhvgbzd");
    }
}

export default taskControler;
