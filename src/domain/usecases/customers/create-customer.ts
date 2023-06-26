import { IsEmail, Length } from "class-validator";
import { Customer } from "../../entities/customer";

export class CreateCustomerParams {
  @Length(2, 100)
  name: string;

  @Length(14)
  cpf: string;

  @IsEmail()
  email: string;

  @Length(8, 32)
  password: string;

  @Length(8, 32)
  passwordConfirmation: string;

  @Length(15)
  phone: string;
}

export interface CreateCustomer {
  execute: (createCustomerParams: CreateCustomerParams) => Promise<Customer>;
}
