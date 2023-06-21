import { HttpResponse } from "../../protocols/http-response";

export interface ControllerResponseInterface {
  ok: (response: object) => HttpResponse;
  created: () => HttpResponse;
  badRequest: (response: object) => HttpResponse;
  unauthorized: () => HttpResponse;
  notFound: () => HttpResponse;
  tooMany: () => HttpResponse;
  serverError: (response: object) => HttpResponse;
}
