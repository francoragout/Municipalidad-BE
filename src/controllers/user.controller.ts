import { db } from "../config/db";
import { Request, Response } from "express";

export const GetUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await db.user.findMany();
    return res.json(users);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving users" });
  }
};

export const CreateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await db.user.create({
      data: {
        email,
      },
    });

    return res.status(201).json(user);
  } catch (error: any) {
    res.status(500).send({ message: "Error creating user" });
  }
};