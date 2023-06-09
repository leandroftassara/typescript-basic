import { Controller } from "../../../domain/bases/controller";
import { SignUpController } from "./sign-up-controller";

export const makeSignUpController = (): Controller => {
  return new SignUpController();
};
