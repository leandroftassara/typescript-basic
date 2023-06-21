import { ControllerResponse } from "./controller-response";
import { ControllerResponseInterface } from "./controller-response-interface";

export const makeHttpResponse = (): ControllerResponseInterface => {
  return new ControllerResponse();
};
