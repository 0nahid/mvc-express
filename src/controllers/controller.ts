import { Request, Response } from "express";
import { getDbConnection } from "./../utils/dbConnect";

/* for get all the users */
const getAllUsers = async (req: Request, res: Response) => {
  const getDb = await getDbConnection();
  const users = await getDb.collection("users").find().toArray();
  res.status(200).json(users);
};

const createUser = async (req: Request, res: Response) => {
  const getDb = await getDbConnection();
  const user = await getDb.collection("users").insertOne(req.body);
  res.status(201).json({
    status: true,
    message: "User Created Successfully",
    data: user,
  });
};

const getUserById = async (req: Request, res: Response) => {
  const getDb = await getDbConnection();
  const user = await getDb.collection("users").findOne({ _id: req.params.id });
};

export const userRoute = { getAllUsers, createUser, getUserById };
