import dotenv from "dotenv";

const result = dotenv.config();

// console.log(result);

const { parsed: envs } = result;

export default envs;
