import Application from "./app";
("./app/index");
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

Application.listen(PORT, () => {
  console.log(`Server listing on port, ${PORT}`);
});
