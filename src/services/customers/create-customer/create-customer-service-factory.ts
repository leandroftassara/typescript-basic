import { CreateCustomer } from "../../../domain/usecases/customers/create-customer";
import { CreateCustomerService } from "./create-customer-service";

export const makeCreateCustomerService = (): CreateCustomer => {
  return new CreateCustomerService();
};
