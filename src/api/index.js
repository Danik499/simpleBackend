import { Router } from "express";
import taskRouter from "./task";

const apiRouter = new Router();

apiRouter.use("/task", taskRouter);

export default apiRouter;