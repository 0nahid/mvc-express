import { MongoClient } from "mongodb";

const connectionString: string = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let dbConnection: any = null;

export const dbConnect = async (): Promise<void> => {
  if (dbConnection) return;

  try {
    await client.connect();
    dbConnection = client.db("test");
    console.log("🚀 Database connected");
  } catch (error) {
    console.log(`Database connection error: ${error}`);
  }
};

export const getDbConnection = (): any => {
  return dbConnection;
};

