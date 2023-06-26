import { SignUpParams } from "../../../../domain/usecases/registers/sign-up";
import { makeSignUpService } from "../../../../services/registers/sign-up/sign-up-service-factory";
import { makeHttpResponse } from "../../../helpers/controller-response/controller-response-factory";
import { makeRequestParamsValidator } from "../../../helpers/request-params-validator/request-params-validator-factory";
import { Controller } from "../../../protocols/controller";
import { SignUpController } from "./sign-up-controller";

export const makeSignUpController = (): Controller => {
  return new SignUpController(
    makeHttpResponse(),
    makeSignUpService(),
    makeRequestParamsValidator(SignUpParams)
  );
};
