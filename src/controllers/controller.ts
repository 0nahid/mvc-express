import { Request, Response } from "express";
import { ObjectId } from "mongodb";
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
    const { id } = req.params;
    const getDb = await getDbConnection();
    // valid object id check
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid Object Id",
      });
    }
    const user = await getDb.collection("users").findOne({ _id: new ObjectId(id) });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User Not Found",
      });
    }
    res.status(200).json({
      status: true,
      message: "User Found",
      data: user,
    });

};

export const userRoute = { getAllUsers, createUser, getUserById };
