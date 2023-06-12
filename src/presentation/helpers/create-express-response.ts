import { Response } from "express";
import { HttpResponse } from "../protocols/http-response";

export const createExpressResponse = (
  expressReponse: Response,
  controllerResponse: HttpResponse
): void => {
  expressReponse.status(controllerResponse.statusCode);
  expressReponse.send(controllerResponse.body);
};