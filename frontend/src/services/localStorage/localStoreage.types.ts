import { interfaces } from 'inversify'

export interface ILocalStorageService {
  add: (key: string, data: unknown) => void
  remove: (key: string) => void
  get: (key: string) => unknown
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ILocalStorageService {
  export const $: interfaces.ServiceIdentifier<ILocalStorageService> = Symbol('LocalStorageService')
}
