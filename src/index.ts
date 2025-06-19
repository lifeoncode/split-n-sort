import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { rateLimit } from "express-rate-limit";
import router from "./routes/routeHandler";

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

const initServer = async () => {
  app.listen(4000, () => console.log("....Server's running🚀 -> http://localhost:4000...."));
};

initServer();
