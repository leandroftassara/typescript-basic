import { HttpResponse } from "../../presentation/protocols/http-response";

export interface Controller {
  handle: (params?: any) => Promise<HttpResponse>;
}
