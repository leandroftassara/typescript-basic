import { RequestParamsValidatorInterface } from "../protocols/request-params-validator-interface";
import { RequestParamsValidator } from "./request-params-validator";

export const makeRequestParamsValidator = (
  classToValidate: any
): RequestParamsValidatorInterface => {
  return new RequestParamsValidator(classToValidate);
};
