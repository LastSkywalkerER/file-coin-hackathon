import { PrimitiveType } from 'intl-messageformat'
import { ReactElement, ReactNode, useCallback } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import defaultTranslation from '@/internalization/en.json'

export type Messages = { [key: string]: string }

type UseTranslate = (
  string: string,
  options?: Record<string, PrimitiveType | JSX.Element>,
) => string

const checkIfValidForTranslate = (string: string): boolean => string.indexOf('translate#') === 0
const turnIntoId = (string: string): string => string.replace('translate#', '')

// =======================================================================================

export const useTranslate = (): UseTranslate => {
  const intl = useIntl()

  const messages: Messages = defaultTranslation

  return useCallback(
    (string, options) => {
      const isValid = checkIfValidForTranslate(string)
      const id = turnIntoId(string)

      return isValid
        ? intl.formatMessage({ id, defaultMessage: messages[id] || id }, options)?.toString() || ''
        : string
    },
    [intl, messages],
  )
}

// =======================================================================================

export const translate = (
  string: string,
  values?: Record<string, ReactNode>,
): ReactElement | string => {
  const messages: Messages = defaultTranslation

  const isValid = checkIfValidForTranslate(string)
  const id = turnIntoId(string)

  return isValid ? (
    <FormattedMessage id={id} defaultMessage={messages[id] || id} values={values} />
  ) : (
    string
  )
}

// =======================================================================================

interface UseFormatNumber {
  formatNumber: (
    string?: string | number,
    isInteger?: boolean,
    minimumFractionDigits?: number,
  ) => string
  reverseFormatNumber: (string: string | number) => number
  formatWithDecimal: (value: string) => string
}

export const useFormatNumber = (): UseFormatNumber => {
  const intl = useIntl()

  const reverseFormatNumber = (string: string | number): number => {
    const group = intl.formatNumber(11111).replace(/1/g, '')
    const decimal = intl.formatNumber(1.1).replace(/1/g, '')

    const reversedVal = +String(string)
      .replace(new RegExp(`\\${group}`, 'g'), '')
      .replace(new RegExp(`\\${decimal}`, 'g'), '.')
    return reversedVal
  }

  const formatNumber = (
    number?: string | number,
    isInteger = false,
    minimumFractionDigits = 0,
  ): string => {
    if (!number && number !== 0) return ''

    const string = number + ''
    const lastSymbol = string.slice(-1)
    const decimal = intl.formatNumber(1.1).replace(/1/g, '')
    const reversedNumber = reverseFormatNumber(string)

    const formattedNumber = intl.formatNumber(reversedNumber, {
      minimumFractionDigits,
      maximumFractionDigits: 16,
    })

    return lastSymbol === decimal && !isInteger ? formattedNumber + decimal : formattedNumber
  }

  const formatWithDecimal = (value: string): string => {
    const decimal = intl.formatNumber(1.1).replace(/1/g, '')

    if (value[0] === decimal && value.length === 1) {
      return `0${decimal}`
    }

    if (value.split(decimal).length > 2) {
      const secondDecimalPosition = value.indexOf(decimal, value.indexOf(decimal) + 1)

      return value.slice(0, secondDecimalPosition) + value.slice(secondDecimalPosition + 1)
    }

    return value
  }

  return {
    formatNumber,
    reverseFormatNumber,
    formatWithDecimal,
  }
}
