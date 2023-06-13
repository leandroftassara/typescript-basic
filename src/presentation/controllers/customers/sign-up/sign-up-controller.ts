import { SignUp } from "../../../../domain/usecases/customers/sign-up";
import { Controller } from "../../../protocols/controller";
import { ControllerResponses } from "../../../protocols/controller-responses";
import { HttpResponse } from "../../../protocols/http-response";

export interface SignUpControllerBodyRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  customerType: string;
}

export interface SignUpControllerInterface extends Controller {
  handle: (params: SignUpControllerBodyRequest) => Promise<HttpResponse>;
}

export class SignUpController implements SignUpControllerInterface {
  constructor(
    private readonly responses: ControllerResponses,
    private readonly signUpService: SignUp
  ) {}

  async handle(params: SignUpControllerBodyRequest): Promise<HttpResponse> {
    try {
      const response = await this.signUpService.execute(params);
      return this.responses.ok(response);
    } catch (error) {
      return this.responses.serverError({ message: error });
    }
  }
}
