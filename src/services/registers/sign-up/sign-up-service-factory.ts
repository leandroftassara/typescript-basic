import { SignUp } from "../../../domain/usecases/registers/sign-up";
import { SignUpService } from "./sign-up-service";

export const makeSignUpService = (): SignUp => {
  return new SignUpService();
};
