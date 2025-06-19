import { app } from ".";

const initServer = async () => {
  app.listen(4000, () => console.log("....Server's running🚀 -> http://localhost:4000...."));
};

initServer();
