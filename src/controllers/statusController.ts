import { Request, Response } from "express";
import logger from "../middleware/logger";
import { ServiceUnavailableError } from "../middleware/errors";

/**
 * @controller statusController
 *
 * @description
 * Checks if application is operational
 *
 * @param {Request} req - Express Request obj
 * @param {Response} req - Express Response obj
 *
 * @returns {void}
 */
export const statusController = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      message: "system online",
    });
    logger.info("status check");
  } catch (error) {
    logger.error(error);
    throw new ServiceUnavailableError();
  }
};
