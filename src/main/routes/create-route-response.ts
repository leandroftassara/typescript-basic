import { Response } from "express";
import { HttpResponse } from "../../presentation/protocols/http-response";

export const createRouteResponse = (
  expressReponse: Response,
  controllerResponse: HttpResponse
): void => {
  expressReponse.status(controllerResponse.statusCode);
  expressReponse.send(controllerResponse.body);
};
