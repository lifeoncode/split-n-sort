import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  try {
    res.send({ msg: "it works" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
