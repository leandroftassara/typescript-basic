import { Router } from "express";
import { customerRoutes } from "./customers/customer-routes";

export const appRouter = Router();

appRouter.use("/customers", customerRoutes);
