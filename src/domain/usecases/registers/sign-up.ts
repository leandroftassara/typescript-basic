import { Length } from "class-validator";

export class SignUpParams {
  @Length(2, 100)
  name: string;
}

export type SignUpResponse = {
  token: string;
};

export interface SignUp {
  execute: (signUpParams: SignUpParams) => Promise<SignUpResponse>;
}
