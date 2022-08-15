import * as dotenv from "dotenv";

const cors = require("cors");
dotenv.config();
// export interface ProcessEnv {
//   [key: string]: string | undefined;
// }
import express, { Express, Request, Response, json } from "express";
//console.log(process.env.PORT);
const app: Express = express();
const port: Number = parseInt(process.env.PORT as string) || 5000;
app.use(cors());
app.use(json());
app.get("/", (request: Request, response: Response) => {
  response.json({ status: "200 Ok" });
});

app.post("/register", (request: Request, response: Response) => {
  console.log(request.body);
  response.json({ status: "200 Ok" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
