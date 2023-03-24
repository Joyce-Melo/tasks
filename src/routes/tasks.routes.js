import { Router } from "express";
import { create, deleteTasks, findTasks, setTaskCompleted, updateTask } from "../controllers/tasks.controller.js";
const router = Router();


router.post("/", create);
router.get("/", findTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTasks);
router.patch("/:id/complete", setTaskCompleted);

export default router;