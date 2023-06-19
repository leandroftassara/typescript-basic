import { SignUp } from "../../../../domain/usecases/customers/sign-up";
import { Controller } from "../../../protocols/controller";
import { ControllerResponses } from "../../../protocols/controller-responses";
import { HttpResponse } from "../../../protocols/http-response";
import { RequestParamsValidatorInterface } from "../../../protocols/request-params-validator-interface";

export interface SignUpControllerInterface extends Controller {
  handle: (params: any) => Promise<HttpResponse>;
}

export class SignUpController implements SignUpControllerInterface {
  constructor(
    private readonly responses: ControllerResponses,
    private readonly signUpService: SignUp,
    private readonly requestParamsValidator: RequestParamsValidatorInterface
  ) {}

  async handle(params: any): Promise<HttpResponse> {
    try {
      const paramsValidatorResponse =
        await this.requestParamsValidator.validate(params);

      if (!paramsValidatorResponse.response)
        return this.responses.badRequest(paramsValidatorResponse.error);

      const response = await this.signUpService.execute(params);
      return this.responses.ok(response);
    } catch (error) {
      return this.responses.serverError({ message: error });
    }
  }
}
