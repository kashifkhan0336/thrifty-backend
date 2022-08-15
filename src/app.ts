import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: Number = 5000;
app.get("/", (request: Request, response: Response) => {
  response.json({ status: "200 Ok" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
