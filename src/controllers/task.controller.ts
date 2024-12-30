import { db } from "../config/db";
import { Request, Response } from "express";

export const GetTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await db.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving tasks" });
  }
};

export const CreateTask = async (req: Request, res: Response) => {
  try {
    const { title, status, label, priority, userId } = req.body;

    const task = await db.task.create({
      data: {
        title,
        status,
        label,
        priority,
        userId,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).send({ message: "Error creating task" });
  }
};

export const UpdateTask = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { title, status, label, priority, userId } = req.body;

    const task = await db.task.update({
      where: { id },
      data: {
        title,
        status,
        label,
        priority,
        userId,
      },
    });

    res.json(task);
  } catch (error) {
    res.status(500).send({ message: "Error updating task" });
  }
};

export const DeleteTask = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    await db.task.delete({
      where: { id },
    });

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting task" });
  }
};
