import { Router } from "express";
import { userRoute } from "../controllers/controller";

const router: Router = Router();

router.get("/", userRoute.getAllUsers);
router
  .route("/:id")
  .get(userRoute.getUserById)
  .patch(userRoute.updateUser)
  .delete(userRoute.deleteUser);

router.post("/", userRoute.createUser);

export default router;
