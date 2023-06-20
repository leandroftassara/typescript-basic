import {
  SignUp,
  SignUpParams,
} from "../../../../domain/usecases/customers/sign-up";
import { RequestParamsValidatorInterface } from "../../../helpers/request-params-validator";
import { Controller } from "../../../../domain/protocols/controller";
import { ControllerResponses } from "../../../protocols/controller-responses";
import { HttpResponse } from "../../../protocols/http-response";

export class SignUpController implements Controller {
  constructor(
    private readonly responses: ControllerResponses,
    private readonly signUpService: SignUp,
    private readonly requestParamsValidator: RequestParamsValidatorInterface
  ) {}

  async handle(params: any): Promise<HttpResponse> {
    try {
      /* Validação dos paramêtros da requisição */
      const paramsValidatorResponse =
        await this.requestParamsValidator.validate(params);

      if (!paramsValidatorResponse.response)
        return this.responses.badRequest(paramsValidatorResponse.error);

      const validatedParams = params as SignUpParams;

      /* Chamada do serviço principial */
      const response = await this.signUpService.execute(validatedParams);
      return this.responses.ok(response);
    } catch (error) {
      return this.responses.serverError({ message: error });
    }
  }
}
