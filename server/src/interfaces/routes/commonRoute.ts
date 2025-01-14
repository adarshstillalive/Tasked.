import express from "express";
import userController from "../controllers/userController";

const commonRoute = express.Router();

// User
commonRoute.post("/api/signup", userController.signup);
commonRoute.post("/api/login", userController.login);

export default commonRoute;
