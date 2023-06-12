import { Controller } from "../../../protocols/controller";
import { ControllerResponses } from "../../../protocols/controller-responses";
import { HttpResponse } from "../../../protocols/http-response";

export interface SignUpControllerBodyRequest {
  name: string;
}

export interface SignUpControllerInterface extends Controller {
  handle: (params: SignUpControllerBodyRequest) => Promise<HttpResponse>;
}

export class SignUpController implements SignUpControllerInterface {
  constructor(private readonly responses: ControllerResponses) {}

  async handle(params: SignUpControllerBodyRequest): Promise<HttpResponse> {
    try {
      return this.responses.ok(params);
    } catch (error) {
      return this.responses.serverError({ message: error });
    }
  }
}
