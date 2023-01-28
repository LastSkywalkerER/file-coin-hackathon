import { injectable } from 'inversify'

import { ILocalStorageService } from './localStoreage.types'

@injectable()
export class LocalStorageService implements ILocalStorageService {
  constructor() {
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.get = this.get.bind(this)
  }

  add = (key: string, data: unknown): void => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  remove = (key: string): void => {
    localStorage.removeItem(key)
  }

  get = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : undefined
  }
}
