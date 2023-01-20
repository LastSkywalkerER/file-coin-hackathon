export enum ErrorType {
  SilentError = 'silent_error',
  AckError = 'ack_error',
}

export enum ValidationErrors {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',

  RequirementsForChangePassword = 'RequirementsForChangePassword',
  UnacceptablePasswordSymbols = 'UnacceptablePasswordSymbols',
  PasswordsDoNotMatch = 'PasswordsDoNotMatch',
}

export const httpErrorDefaultMessages: { [key: number]: string } = {
  400: 'translate#response.error.badRequest',
  401: 'translate#response.error.unauthorized',
  403: 'translate#response.error.forbidden',
  404: 'translate#response.error.notFound',
  422: 'translate#response.error.validationsErrors',
  500: 'translate#response.error.internalServerError',
  502: 'translate#response.error.badGateway',
  503: 'translate#response.error.serviceUnavailable',
  504: 'translate#response.error.badRequest',
}

export const formControlErrors: { [key: string]: string } = {
  [ValidationErrors.Required]: 'Required',
  [ValidationErrors.MinLength]: 'MinLength',
  [ValidationErrors.MaxLength]: 'MaxLength',
}
