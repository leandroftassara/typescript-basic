import {
  SignUp,
  SignUpParams,
  SignUpResponse,
} from "../../../../domain/usecases/customers/sign-up";

export class SignUpService implements SignUp {
  async execute(signUpParams: SignUpParams): Promise<SignUpResponse> {
    return { status: true, response: { jwt: "jwtExample" } };
  }
}
