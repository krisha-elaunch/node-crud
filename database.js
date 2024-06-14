import mongoose from "mongoose";
import envs from "./config.js";

const server = envs.DATABASE;

console.log(server);

async function database() {
  try {
    await mongoose.connect(server);
    return true;
  } catch (e) {
    console.log(e);
  }
}

export default database;
