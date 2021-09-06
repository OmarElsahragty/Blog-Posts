import express from "express";
import { validate } from "../middlewares";
import { postsController } from "../controllers";
import { postsPackage } from "../../../app/packages";

const router = express.Router();

router.get(
  "/posts",
  validate(postsPackage.validation.params, "query"),
  postsController.showPosts
);

export default router;
