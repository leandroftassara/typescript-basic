import { makeSignUpService } from "../../../../data/services/customers/sign-up/sign-up-service-factory";
import { makeHttpResponses } from "../../../helpers/http-responses-factory";
import { makeRequestParamsValidator } from "../../../helpers/request-params-validator-factory";
import {
  SignUpController,
  SignUpControllerInterface,
} from "./sign-up-controller";
import { SignUpParams } from "./sign-up-params";

export const makeSignUpController = (): SignUpControllerInterface => {
  return new SignUpController(
    makeHttpResponses(),
    makeSignUpService(),
    makeRequestParamsValidator(SignUpParams)
  );
};
