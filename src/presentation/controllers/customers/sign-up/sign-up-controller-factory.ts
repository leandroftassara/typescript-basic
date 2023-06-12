import { makeHttpResponses } from "../../../helpers/http-responses-factory";
import {
  SignUpController,
  SignUpControllerInterface,
} from "./sign-up-controller";

export const makeSignUpController = (): SignUpControllerInterface => {
  return new SignUpController(makeHttpResponses());
};
