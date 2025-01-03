import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route";

const app = express();

// Middleware
const allowedOrigins = ["http://localhost:3000", "https://municipalidad-fe.vercel.app"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tasks", taskRouter);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});