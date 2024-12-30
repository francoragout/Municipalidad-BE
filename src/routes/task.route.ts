import { Router } from "express";
import {
  CreateTask,
  CreateTasks,
  DeleteTask,
  DeleteTasks,
  GetTasks,
  UpdateTask,
} from "../controllers/task.controller";

const taskRouter = Router();

taskRouter.get("/", GetTasks);
taskRouter.post("/", CreateTask);
taskRouter.post("/", CreateTasks);
taskRouter.put("/:id", UpdateTask);
taskRouter.delete("/", DeleteTasks);
taskRouter.delete("/:id", DeleteTask);

export default taskRouter;
