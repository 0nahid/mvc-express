import { Router } from "express";
import { userRoute } from "../controllers/controller";

const router: Router = Router();

router.get("/", userRoute.getAllUsers);
router.get("/:id", userRoute.getUserById);

router.post("/", userRoute.createUser);

export default router;
