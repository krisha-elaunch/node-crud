import express from "express";
import database from "./database.js";
import userRouter from "./src/routes/studentRoute.js";

const app = express();

const data = database();

app.use(express.json());

// A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
// The top-level express object has a Router() method that creates a new router object.

app.use("/api/students", userRouter);

app.get("/", (req, res) => {
  res.send(" Server is Running   ");
});

app.listen(8000, () => {
  console.log("server running on 8080");
});
