"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTasks = exports.DeleteTask = exports.UpdateTask = exports.CreateTasks = exports.CreateTask = exports.GetTasks = void 0;
const db_1 = require("../config/db");
const handleError = (res, message) => res.status(500).send({ message });
const GetTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield db_1.db.task.findMany();
        res.json(tasks);
    }
    catch (error) {
        handleError(res, "Error retrieving tasks");
    }
});
exports.GetTasks = GetTasks;
const CreateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield db_1.db.task.create({ data: req.body });
        res.status(201).json(task);
    }
    catch (error) {
        handleError(res, "Error creating task");
    }
});
exports.CreateTask = CreateTask;
const CreateTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield db_1.db.task.createMany({ data: req.body });
        res.status(201).json(tasks);
    }
    catch (error) {
        handleError(res, "Error creating tasks");
    }
});
exports.CreateTasks = CreateTasks;
const UpdateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield db_1.db.task.update({
            where: { id: String(req.params.id) },
            data: req.body,
        });
        res.json(task);
    }
    catch (error) {
        handleError(res, "Error updating task");
    }
});
exports.UpdateTask = UpdateTask;
const DeleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield db_1.db.task.delete({ where: { id: String(req.params.id) } });
        res.json(task);
    }
    catch (error) {
        handleError(res, "Error deleting task");
    }
});
exports.DeleteTask = DeleteTask;
const DeleteTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield db_1.db.task.deleteMany({
            where: { id: { in: req.body } },
        });
        res.json(tasks);
    }
    catch (error) {
        handleError(res, "Error deleting tasks");
    }
});
exports.DeleteTasks = DeleteTasks;
