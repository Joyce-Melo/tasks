import { Router } from "express";
import { create, findTasks, updateTask } from "../controllers/tasks.controller.js";
const router = Router();


router.post("/", create);
router.get("/", findTasks);

router.put("/:id", updateTask);

export default router;