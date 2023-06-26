import { Router } from "express";
import { Request, Response } from "express";
import { createRouteResponse } from "../../../../main/routes/create-route-response";
import { makeGetCustomerController } from "./get-customer-controller-factory";

export const getCustomerRoute = Router();

getCustomerRoute.get(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    console.log(req.params);
    const controllerResponse = await makeGetCustomerController().handle(
      req.params
    );
    createRouteResponse(res, controllerResponse);
  }
);
