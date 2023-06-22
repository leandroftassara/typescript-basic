export interface ErrorDescription {
  error: string;
  description: string;
}

export interface RequestParamsValidatorResponse {
  response: boolean;
  error: ErrorDescription | {};
}

export interface RequestParamsValidatorInterface {
  validate: (requestParams: any) => Promise<RequestParamsValidatorResponse>;
}
