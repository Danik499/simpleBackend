import Router from "express";
import taskControler from "./controler";

const taskRouter = new Router();

taskRouter.get("/", taskControler.get);


export default taskRouter;