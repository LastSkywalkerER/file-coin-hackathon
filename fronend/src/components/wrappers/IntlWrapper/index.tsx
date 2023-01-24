import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { INITIAL_LOCALE, LanguageCodes } from '@/constants/internalization'
import { LocalStorageItems } from '@/constants/localStorage'
import enMessages from '@/internalization/en.json'

import { Props } from './types'

export const IntlWrapper: FC<Props> = ({ children }: Props) => {
  const [locale, setLocale] = useState(INITIAL_LOCALE)
  const [messages] = useState(enMessages)

  moment.locale(locale)

  useEffect(() => {
    const localeFromLocalStorage = localStorage.getItem(LocalStorageItems.Locale) as LanguageCodes

    setLocale(localeFromLocalStorage || INITIAL_LOCALE)
  }, [])

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
