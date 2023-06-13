import { CustomerCustomerType } from "../../entities/customer-customer-type";

export type GetCustomerCustomerTypeByCustomerParams = {
  customerId: number;
};

export interface CreateCustomer {
  execute: (
    getCustomerCustomerTypeByCustomerParams: GetCustomerCustomerTypeByCustomerParams
  ) => Promise<CustomerCustomerType>;
}
