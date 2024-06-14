import User from "../src/models/studentModel.js";
import chalk from "chalk";

async function addUser() {
  try {
    const data = await User.insertMany([
      {
        username: "Krisha Patel",
        password: "krisha@123",
      },
      {
        username: "Jeet Patel",
        password: "jeet@123",
      },
    ]);
    console.log(data);
  } catch (e) {
    console.error(chalk.red(e.message));
    process.exit();
  }
}

export default addUser;
