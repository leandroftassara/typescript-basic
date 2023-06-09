import { HttpResponse } from "../types/http-response";

export interface Controller {
  handle: (request: any) => Promise<HttpResponse>;
}
