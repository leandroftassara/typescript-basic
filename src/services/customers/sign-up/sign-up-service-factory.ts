import { SignUp } from "../../../../domain/usecases/customers/sign-up";
import { SignUpService } from "./sign-up-service";

export const makeSignUpService = (): SignUp => {
  return new SignUpService();
};
