import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
/* middleware  */
app.use(cors());
app.use(express.json());

/* here will be all the imports routes */
import userRoute from "./routes/apiRoute";
import testRoute from "./routes/v1/test";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  const filePath = fs.readFileSync(
    path.join(__dirname, "../public/index.html"),
    "utf8"
  );
  res.send(filePath);
});

/* Here is the User Routes */
app.use("/api/v1/test", testRoute);
app.use("/api/v1/user", userRoute);

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
