//  create students

const createStudent = async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createStudent;
