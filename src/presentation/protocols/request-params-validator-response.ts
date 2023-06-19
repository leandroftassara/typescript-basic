export interface ErrorDescription {
  type: string;
  description: string;
}

export interface RequestParamsValidatorResponse {
  response: boolean;
  error: ErrorDescription | {};
}
