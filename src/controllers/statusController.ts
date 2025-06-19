import { Request, Response } from "express";

export const statusController = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      message: "system online",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
