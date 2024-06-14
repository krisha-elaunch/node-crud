import express from "express";
import database from "./database.js";
import router from "./src/routes/studentRoute.js";

const app = express();

const data = database();

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send(" Server is Running   ");
});

app.listen(8000, () => {
  console.log("server running on 8080");
});
