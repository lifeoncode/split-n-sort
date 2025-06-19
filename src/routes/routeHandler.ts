import { Router } from "express";
import { wordController } from "../controllers/wordController";
import { statusController } from "../controllers/statusController";

const router = Router();

router.get("/status", statusController);
router.post("/word", wordController);

export default router;
