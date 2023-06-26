import { CreateCustomerParams } from "../../../../domain/usecases/customers/create-customer";
import { makeCreateCustomerService } from "../../../../services/customers/create-customer/create-customer-service-factory";
import { makeHttpResponse } from "../../../helpers/controller-response/controller-response-factory";
import { makeRequestParamsValidator } from "../../../helpers/request-params-validator/request-params-validator-factory";
import { Controller } from "../../../protocols/controller";
import { CreateCustomerController } from "./create-customer-controller";

export const makeCreateCustomerController = (): Controller => {
  return new CreateCustomerController(
    makeHttpResponse(),
    makeCreateCustomerService(),
    makeRequestParamsValidator(CreateCustomerParams)
  );
};
