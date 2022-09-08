import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/controller";

const router: Router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
