import {
  RequestParamsValidator,
  RequestParamsValidatorInterface,
} from "./request-params-validator";

export const makeRequestParamsValidator = (
  classToValidate: any
): RequestParamsValidatorInterface => {
  return new RequestParamsValidator(classToValidate);
};
