import { Customer } from "../../../domain/entities/customer";
import {
  CreateCustomer,
  CreateCustomerParams,
} from "../../../domain/usecases/customers/create-customer";

export class CreateCustomerService implements CreateCustomer {
  async execute(createCustomerParams: CreateCustomerParams): Promise<Customer> {
    const mockedCustomer = {
      id: 1,
      name: createCustomerParams.name,
      cpf: createCustomerParams.cpf,
      email: createCustomerParams.email,
      phone: createCustomerParams.phone,
    };
    return mockedCustomer;
  }
}
