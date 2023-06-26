import { Router } from "express";
import { createCustomerRoute } from "./create-customer/create-customer-controller-route";
import { getCustomerRoute } from "./get-customer/get-customer-controller-route";

export const customersRoutes = Router();

customersRoutes.use(createCustomerRoute);
customersRoutes.use(getCustomerRoute);
