import chalk from "chalk";
import User from "../src/models/studentModel.js";

const showUser = async () => {
  try {
    const users = await User.find();
    let all_users = users.map((user) => ({
      username: user.username,
      password: user.password,
    }));
    console.table(all_users);
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};


export default showUser;
