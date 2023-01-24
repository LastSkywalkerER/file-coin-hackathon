import moment from 'moment'

import { TIME_FORMAT } from '@/constants/time'

export class ValidationService {
  public static isSpace(value: string): boolean {
    return new RegExp(/\s/g).test(value || '')
  }

  public static isRequirementsForChangePassword(value: string): boolean {
    return new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]*)[A-Za-z\d@$!%*?&]{8,64}$/,
    ).test(value || '')
  }

  // special for react-form-hook
  public static isDateValid(value: string) {
    return moment(value).isValid() || 'InvalidDate'
  }

  public static isTimeValid(value: string) {
    return moment(value, TIME_FORMAT).isValid() || 'InvalidTime'
  }

  public static isDateTimeValid(value: string) {
    return moment(value).isValid() || 'InvalidDateOrTime'
  }
}
