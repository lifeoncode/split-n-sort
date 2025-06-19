import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import bodyParser from "body-parser";
import { rateLimit } from "express-rate-limit";
import router from "./routes/routeHandler";
import { errorHandler, NotFoundError } from "./middleware/errors";

export const app = express();
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const limiter = rateLimit({ windowMs: 1 * 60 * 1000, limit: 60 });
app.use(limiter);
app.use("/splitnsort/api", router);

app.use(() => {
  throw new NotFoundError("Route not found");
});
app.use(errorHandler);
