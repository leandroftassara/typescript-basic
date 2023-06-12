import { Customer } from "../../entities/customer";

export type CreateCustomerParams = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone: string;
  customerType: string;
};

export interface CreateCustomer {
  execute: (createCustomerParams: CreateCustomerParams) => Promise<Customer>;
}
