import { HttpResponse } from "./http-response";

export interface ControllerResponses {
  ok: (response: object) => HttpResponse;
  created: () => HttpResponse;
  badRequest: (response: object) => HttpResponse;
  unauthorized: () => HttpResponse;
  notFound: () => HttpResponse;
  tooMany: () => HttpResponse;
  serverError: (response: object) => HttpResponse;
}
