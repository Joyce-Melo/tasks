import { Router } from "express";
import { create } from "../controllers/tasks.controller.js";
const router = Router();


router.post("/", create);

export default router;