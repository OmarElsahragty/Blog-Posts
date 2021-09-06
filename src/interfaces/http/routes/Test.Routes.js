import express from "express";
import { testController } from "../controllers";

const router = express.Router();

router.get("/ping", testController.ping);

export default router;
