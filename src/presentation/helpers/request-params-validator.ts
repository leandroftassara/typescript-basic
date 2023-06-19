import { validate } from "class-validator";
import {
  RequestParamsValidatorInterface,
  RequestParamsValidatorResponse,
} from "../protocols/request-params-validator-interface";

export class RequestParamsValidator<T extends object>
  implements RequestParamsValidatorInterface
{
  constructor(private readonly classToValidate: new () => T) {}

  async validate(requestParams: any): Promise<RequestParamsValidatorResponse> {
    const instance = new this.classToValidate();
    Object.assign(instance, requestParams);

    const errors = await validate(instance);

    if (errors.length > 0) {
      return {
        response: false,
        error: {
          type: "invalid/missing params",
          description: errors[0].constraints && "",
        },
      };
    }

    return { response: true, error: {} };
  }
}
