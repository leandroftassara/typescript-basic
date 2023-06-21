import { Router } from "express";
import { customerRoutes } from "../../presentation/controllers/customers/customer-routes";

export const appRouter = Router();

appRouter.use("/customers", customerRoutes);
