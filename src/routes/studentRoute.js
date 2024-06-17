import express from "express";
import {
  createStudent,
  deleteStudent,
  showStudent,
  updateStudent,
} from "../controllers/studentController.js";

const userRouter = express.Router();

userRouter.post("/add", createStudent);
userRouter.get("/show", showStudent);
userRouter.put("/edit/:id", updateStudent);
userRouter.delete("/delete", deleteStudent);

// userRouter.all("*", showStudent);
export default userRouter;
