import { Router } from "express";
import { signUpRoute } from "./sign-up/sign-up-controller-route";

export const registersRoutes = Router();

registersRoutes.use(signUpRoute);
