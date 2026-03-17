import { Document, model, Schema, Types } from "mongoose";

const StudentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

export interface IStudent {
  _id: Types.ObjectId;
  name: String;
  firstname: String;
  age: Number;
}

export interface Student extends Omit<IStudent, "_id">, Document {}

export const StudentsModel = model(
  "students",
  StudentSchema
);