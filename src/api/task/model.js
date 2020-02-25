import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    stockNumber: Number,
    storeName: String,
    productCode: Number,
    productCount: Number,
    productPrice: Number
})

const task = model("task", taskSchema);

export default task;