import { Router } from "express";
import { InfoController } from "../../controllers/index.js";

const router: Router = Router();

router.get("/info", InfoController.info);

export default router;
