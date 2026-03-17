import { Student, StudentsModel } from "../models/students.model";

const getStudents = async () => {
  return await StudentsModel.find();
};

const getStudent = async (id: string) => {
  return await StudentsModel.findById(id)
};

const createStudent = async (studentToCreate: Student) => {
  const newStudent = new StudentsModel(studentToCreate);
  await newStudent.save();
  return getStudents();
};

const updateStudent = async (id: string, studentToUpdate: Student) => {
  await StudentsModel.findByIdAndUpdate(id, studentToUpdate);
  return await getStudents();
};

const deleteStudent = async (id: string) => {
  await StudentsModel.findByIdAndDelete(id);
  return await getStudents();
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};