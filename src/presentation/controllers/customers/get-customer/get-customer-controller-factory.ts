import { GetCustomerParams } from "../../../../domain/usecases/customers/get-customer";
import { makeGetCustomerService } from "../../../../services/customers/get-customer/get-customer-service-factory";
import { makeHttpResponse } from "../../../helpers/controller-response/controller-response-factory";
import { makeRequestParamsValidator } from "../../../helpers/request-params-validator/request-params-validator-factory";
import { Controller } from "../../../protocols/controller";
import { GetCustomerController } from "./get-customer-controller";

export const makeGetCustomerController = (): Controller => {
  return new GetCustomerController(
    makeHttpResponse(),
    makeGetCustomerService(),
    makeRequestParamsValidator(GetCustomerParams)
  );
};
