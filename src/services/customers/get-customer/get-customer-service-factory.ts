import { GetCustomer } from "../../../domain/usecases/customers/get-customer";
import { GetCustomerService } from "./get-customer-service";

export const makeGetCustomerService = (): GetCustomer => {
  return new GetCustomerService();
};
