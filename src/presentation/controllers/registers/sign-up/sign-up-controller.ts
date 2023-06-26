import {
  SignUp,
  SignUpParams,
} from "../../../../domain/usecases/registers/sign-up";
import { ControllerResponse } from "../../../helpers/controller-response/controller-response";
import { RequestParamsValidatorInterface } from "../../../helpers/request-params-validator/request-params-validator-interface";
import { Controller } from "../../../protocols/controller";
import { HttpResponse } from "../../../protocols/http-response";

export class SignUpController implements Controller {
  constructor(
    private readonly responses: ControllerResponse,
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
