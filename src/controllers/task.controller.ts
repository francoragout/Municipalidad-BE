import { db } from "../config/db";
import { Request, Response } from "express";

const handleError = (res: Response, message: string) =>
  res.status(500).send({ message });

export const GetTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await db.task.findMany();
    res.json(tasks);
  } catch (error) {
    handleError(res, "Error retrieving tasks");
  }
};

export const CreateTask = async (req: Request, res: Response) => {
  try {
    const task = await db.task.create({ data: req.body });
    res.status(201).json(task);
  } catch (error) {
    handleError(res, "Error creating task");
  }
};

export const CreateTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await db.task.createMany({ data: req.body });
    res.status(201).json(tasks);
  } catch (error) {
    handleError(res, "Error creating tasks");
  }
};

export const UpdateTask = async (req: Request, res: Response) => {
  try {
    const task = await db.task.update({
      where: { id: String(req.params.id) },
      data: req.body,
    });
    res.json(task);
  } catch (error) {
    handleError(res, "Error updating task");
  }
};

export const DeleteTask = async (req: Request, res: Response) => {
  try {
    const task = await db.task.delete({ where: { id: String(req.params.id) } });
    res.json(task);
  } catch (error) {
    handleError(res, "Error deleting task");
  }
}

export const DeleteTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await db.task.deleteMany({
      where: { id: { in: req.body } },
    });
    res.json(tasks);
  } catch (error) {
    handleError(res, "Error deleting tasks");
  }
};
