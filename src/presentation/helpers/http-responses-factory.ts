import { ControllerResponses } from "../protocols/controller-responses";
import { HttpResponses } from "./http-responses";

export const makeHttpResponses = (): ControllerResponses => {
  return new HttpResponses();
};
