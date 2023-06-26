import { Customer } from "../../../domain/entities/customer";
import {
  GetCustomer,
  GetCustomerParams,
} from "../../../domain/usecases/customers/get-customer";

export class GetCustomerService implements GetCustomer {
  async execute(getCustomerParams: GetCustomerParams): Promise<Customer> {
    const mockedCustomer = {
      id: Number(getCustomerParams.id),
      name: "Leandro",
      cpf: "073.593.726-58",
      email: "leandrofsecundaria@gmail.com",
      phone: "(31) 99172-6739",
    };
    return mockedCustomer;
  }
}
