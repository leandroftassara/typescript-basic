import { Customer } from "../../entities/customer";

export type GetCustomerByCpfParams = {
  cpf: string;
};

export interface CreateCustomer {
  execute: (
    getCustomerByCpfParams: GetCustomerByCpfParams
  ) => Promise<Customer>;
}
