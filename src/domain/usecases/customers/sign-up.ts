import { Length } from "class-validator";

export class SignUpParams {
  @Length(2, 100)
  name: string;
}

export type SignUpResponse = {
  status: boolean;
  response: object;
};

export interface SignUp {
  execute: (signUpParams: SignUpParams) => Promise<SignUpResponse>;
}
