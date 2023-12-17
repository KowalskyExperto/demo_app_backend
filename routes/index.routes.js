import express from "express";
import userRoute from "./user.routes.js";
import tagRoute from "./tag.routes.js";

const router = express.Router();
router.use(userRoute);
router.use(tagRoute);

export default router;
