import { Request, Response } from "express";

export const wordController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = req.body;
    if (!data) throw new Error("data required");

    const wordArr: string[] = data.split("");
    const sortedWordArr: string[] = wordArr.sort();
    const word = sortedWordArr.join("");

    res.status(200).json({ word });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
