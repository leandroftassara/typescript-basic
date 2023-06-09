import { Router } from "express";
import { makeSignUpController } from "./sign-up-controller-factory";
import { HttpResponse } from "../../../domain/types/http-response";

export const signUpRoute = Router();

signUpRoute.post("/sign-up", async (req: any, res: any): Promise<void> => {
  const resp = await makeSignUpController().handle(req);

  res.status(resp.statusCode);
  res.send(resp.body);
});
