import express from "express";

const router = express.Router();

router.get("/tags", (req, res) => {
  res.send("Hola Mundo Tag GET");
});

export default router;