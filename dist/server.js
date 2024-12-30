"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const task_route_1 = __importDefault(require("./routes/task.route"));
// import userRouter from "./routes/user.route";
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use("/api/tasks", task_route_1.default);
// app.use("/api/v1/users", userRouter);
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
