import { Router } from "express";

const router = Router();

router.get("/status", async (req, res) => {
  try {
    res.send({ msg: "it works" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/word", async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.trim()) throw new Error("data required");

    const wordArr: string[] = data.split("");
    const sortedWordArr: string[] = wordArr.sort();
    res.send({ word: sortedWordArr.join("") });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
