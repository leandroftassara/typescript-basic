import { Controller } from "../../../domain/bases/controller";
import { HttpResponse } from "../../../domain/types/http-response";

export class SignUpController implements Controller {
  async handle(req: any): Promise<HttpResponse> {
    try {
      return { statusCode: 200, body: req.body };
    } catch (error) {
      return { statusCode: 500, body: { message: error } };
    }
  }
}
