import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRouter);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});