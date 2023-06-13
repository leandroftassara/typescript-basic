import { makeSignUpService } from "../../../../data/services/customers/sign-up/sign-up-service-factory";
import { makeHttpResponses } from "../../../helpers/http-responses-factory";
import {
  SignUpController,
  SignUpControllerInterface,
} from "./sign-up-controller";

export const makeSignUpController = (): SignUpControllerInterface => {
  return new SignUpController(makeHttpResponses(), makeSignUpService());
};
