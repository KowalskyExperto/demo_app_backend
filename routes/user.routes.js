import express from "express";
import userController from "../controllers/user/index.controlller.js";
const router = express.Router();

router.get("/users/hola", userController.saludar);
router.get("/users/adios", userController.despedir);
export default router;
