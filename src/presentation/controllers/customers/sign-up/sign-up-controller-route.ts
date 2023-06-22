import { Router } from "express";
import { makeSignUpController } from "./sign-up-controller-factory";
import { Request, Response } from "express";
import { createRouteResponse } from "../../../../main/routes/create-route-response";

export const signUpRoute = Router();

signUpRoute.post(
  "/sign-up",
  async (req: Request, res: Response): Promise<void> => {
    const controllerResponse = await makeSignUpController().handle(req.body);
    createRouteResponse(res, controllerResponse);
  }
);
