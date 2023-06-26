import { IsNumberString } from "class-validator";
import { Customer } from "../../entities/customer";

export class GetCustomerParams {
  @IsNumberString()
  id: string;
}

export interface GetCustomer {
  execute: (getCustomerParams: GetCustomerParams) => Promise<Customer>;
}
