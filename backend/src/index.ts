import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/students.route";

dotenv.config();

const hostname = "127.0.0.1";
const port = 5000;

mongoose.connect(
  `mongodb+srv://jsabloneilco:BJ40M3zJufOMtAm6@cluster0.z8fyo6z.mongodb.net/eilco_web?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/students", router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});