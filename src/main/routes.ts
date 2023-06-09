import { Router } from "express";
import { customerRoutes } from "../presentation/customers/customer-routes";

export const appRouter = Router();

appRouter.use("/customers", customerRoutes);
