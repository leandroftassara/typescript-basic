interface HttpResponseBody {
  success: boolean;
  response: object;
}

export type HttpResponse = {
  statusCode: number;
  body: HttpResponseBody;
};
