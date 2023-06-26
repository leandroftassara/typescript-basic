import { Router } from "express";
import { Request, Response } from "express";
import { createRouteResponse } from "../../../../main/routes/create-route-response";
import { makeCreateCustomerController } from "./create-customer-controller-factory";

export const createCustomerRoute = Router();

createCustomerRoute.post(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    const controllerResponse = await makeCreateCustomerController().handle(
      req.body
    );
    createRouteResponse(res, controllerResponse);
  }
);
