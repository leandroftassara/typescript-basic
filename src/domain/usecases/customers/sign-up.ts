export type SignUpParams = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone: string;
  customerType: string;
};

export type SignUpResponse = {
  status: boolean;
  response: object;
};

export interface SignUp {
  execute: (signUpParams: SignUpParams) => Promise<SignUpResponse>;
}
