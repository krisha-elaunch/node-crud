import user from "../models/studentModel.js";

//  create students

const createStudent = async (req, res) => {
  try {
    // const new_user = new user(req.body);
    // await new_user.save();
    const student = await user.create(req.body);
    console.log(student);
    // const stud = await user.insertMany([req.body]);
    // console.log(stud);
    res.status(200).send(" Added Successfully ..! ");
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

const showStudent = async (req, res) => {
  try {
    const student_data = await user.find();
    console.log(student_data);
    res.status(200).send(student_data);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Details Updated");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const user_deleted = await user.findByIdAndDelete(req.query.id);
    if (!user_deleted) response.status(404).send("No item found");
    res.status(200).send("Student Deleted ");
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export { createStudent, showStudent, updateStudent, deleteStudent };
