import { Router } from "express";
import { registersRoutes } from "../../presentation/controllers/registers/registers-routes";
import { customersRoutes } from "../../presentation/controllers/customers/customers-routes";

export const appRouter = Router();

appRouter.use("/", registersRoutes);
appRouter.use("/customers", customersRoutes);
