import { Request, Response } from "express";
import { BadRequestError, UnprocessableEntityError } from "../middleware/errors";
import { isOnlyAlphabetic, isTooLong } from "../util/helper";
import logger from "../middleware/logger";

/**
 * @controller wordController
 *
 * @description
 * Performs operations on request data
 *
 * @param {Request} req - Express Request obj
 * @param {Response} req - Express Response obj
 *
 * @returns {void}
 */
export const wordController = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;
  if (!data || !data.trim()) throw new BadRequestError("Data is required");
  // if (isTooLong(data)) throw new UnprocessableEntityError("Data must not be longer than 52 characters");
  // if (!isOnlyAlphabetic(data))
  //   throw new UnprocessableEntityError("Data must be a single word without non-alphabetic characters.");

  const wordArr: string[] = data.trim().split("");
  const sortedWordArr: string[] = wordArr.sort();

  res.status(200).json({ word: sortedWordArr });
  logger.info(`processed: ${data.trim()} -> ${sortedWordArr}`);
};
