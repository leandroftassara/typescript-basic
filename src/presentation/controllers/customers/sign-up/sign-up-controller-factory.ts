import { SignUpParams } from "../../../../domain/usecases/customers/sign-up";
import { makeSignUpService } from "../../../../services/customers/sign-up/sign-up-service-factory";
import { makeHttpResponses } from "../../../helpers/http-responses-factory";
import { makeRequestParamsValidator } from "../../../helpers/request-params-validator-factory";
import { Controller } from "../../../../domain/protocols/controller";
import { SignUpController } from "./sign-up-controller";

export const makeSignUpController = (): Controller => {
  return new SignUpController(
    makeHttpResponses(),
    makeSignUpService(),
    makeRequestParamsValidator(SignUpParams)
  );
};
