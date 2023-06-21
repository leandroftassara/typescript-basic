import { HttpResponse } from "./http-response";

export interface Controller {
  handle: (params?: any) => Promise<HttpResponse>;
}
