import { Router } from "express";
import { create, deleteTasks, findTasks, setTaskCompleted, updateTask } from "../controllers/tasks.controller.js";
import { validTasks } from "../middleware/global.middleware.js";
const router = Router();


router.post("/", create);
router.get("/", findTasks);
router.put("/:id", validTasks, updateTask);
router.delete("/:id", validTasks, deleteTasks);
router.patch("/:id/complete", validTasks, setTaskCompleted);

export default router;