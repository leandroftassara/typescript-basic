import { RequestParamsValidator } from "./request-params-validator";
import { RequestParamsValidatorInterface } from "./request-params-validator-interface";

export const makeRequestParamsValidator = (
  classToValidate: any
): RequestParamsValidatorInterface => {
  return new RequestParamsValidator(classToValidate);
};
