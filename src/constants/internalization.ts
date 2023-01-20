import 'moment/locale/az'
import 'moment/locale/en-gb'
import 'moment/locale/ru'
import 'moment/locale/ka'

export enum LanguageCodes {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
  GEORGIAN = 'ka',
  AZERBAIJAN = 'az',
}

export const ISOLanguagesCodes: { [key: string]: string } = {
  [LanguageCodes.RUSSIAN]: 'ru-RU',
  [LanguageCodes.ENGLISH]: 'en-EN',
  [LanguageCodes.GEORGIAN]: 'ka-GE',
  [LanguageCodes.AZERBAIJAN]: 'az-AZ',
}

export const DEFAULT_CULTURES = [
  { id: LanguageCodes.AZERBAIJAN, displayName: 'Azeri (Latin)' },
  { id: LanguageCodes.ENGLISH, displayName: 'English' },
  { id: LanguageCodes.RUSSIAN, displayName: 'Russian' },
  { id: LanguageCodes.GEORGIAN, displayName: 'Georgian' },
]

export const FlagMapping: { [key: string]: string } = {
  [LanguageCodes.ENGLISH]: 'gb',
  [LanguageCodes.RUSSIAN]: 'ru',
  [LanguageCodes.AZERBAIJAN]: 'az',
  [LanguageCodes.GEORGIAN]: 'ge',
}

export const INITIAL_LOCALE = LanguageCodes.ENGLISH
