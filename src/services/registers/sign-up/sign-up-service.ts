import {
  SignUp,
  SignUpParams,
  SignUpResponse,
} from "../../../domain/usecases/registers/sign-up";

export class SignUpService implements SignUp {
  async execute(signUpParams: SignUpParams): Promise<SignUpResponse> {
    return { token: "jwtExample" };
  }
}
