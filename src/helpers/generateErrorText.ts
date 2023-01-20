import { FieldError } from 'react-hook-form'

import { formControlErrors } from '@/constants/errors'
import { translate } from '@/utils/internalization'

export const generateValidationWarning = (error: string): string => {
  return `translate#form.validationWarning.${error}`
}

export const generateErrorText = (error?: FieldError): React.ReactElement | string => {
  if (error?.message) {
    return translate(generateValidationWarning(error.message))
  } else if (error?.type) {
    return translate(generateValidationWarning(formControlErrors[error.type || '']))
  }

  return ''
}
