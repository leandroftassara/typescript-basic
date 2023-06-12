import { ControllerResponses } from "../protocols/controller-responses";
import { HttpResponse } from "../protocols/http-response";

export class HttpResponses implements ControllerResponses {
  ok = (response: object): HttpResponse => {
    return { statusCode: 200, body: { success: true, response } };
  };

  created = (): HttpResponse => {
    return { statusCode: 201, body: { success: true, response: {} } };
  };

  badRequest = (response: object): HttpResponse => {
    return { statusCode: 400, body: { success: false, response } };
  };

  unauthorized = (): HttpResponse => {
    return {
      statusCode: 401,
      body: { success: false, response: { message: "Unauthorized" } },
    };
  };

  notFound = (): HttpResponse => {
    return {
      statusCode: 404,
      body: { success: false, response: { message: "Not found" } },
    };
  };

  tooMany = (): HttpResponse => {
    return {
      statusCode: 429,
      body: { success: false, response: { message: "Too many requests" } },
    };
  };

  serverError = (response: object): HttpResponse => {
    return { statusCode: 500, body: { success: false, response } };
  };
}
