import { Router } from 'express';
import { CreateTask, GetTasks } from '../controllers/task.controller';

const taskRouter = Router();

taskRouter.get("/", GetTasks);
taskRouter.post("/", CreateTask);

export default taskRouter;


