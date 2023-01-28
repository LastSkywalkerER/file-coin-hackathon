import { inject, injectable } from 'inversify'
import { toast } from 'react-toastify'
import { BehaviorSubject } from 'rxjs'

import { config } from '@/config/config'
import { StorageNames } from '@/types'

import { ILocalStorageService } from '../localStorage'
import { HttpMethods, IHttpService } from './http.types'

@injectable()
export class HttpService implements IHttpService {
  private readonly client = fetch
  @inject(ILocalStorageService.$) private localStorageService: ILocalStorageService | undefined

  isLogged$ = new BehaviorSubject(false)

  constructor() {
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.patch = this.patch.bind(this)
  }

  private readonly requestService = async (
    url: string,
    method = HttpMethods.Get,
    body: unknown = null,
    headers: Record<string, string> = {},
  ) => {
    try {
      headers['auth'] = this.localStorageService?.get(StorageNames.Token) as string

      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await this.client(`${config.baseUrl}${url}`, {
        method,
        body: body as string,
        headers,
      })
      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          this.isLogged$.next(false)
        }
        throw new Error(data.message || `Can't connect to server`)
      }

      if (data.message) {
        toast.success(data.message)
      }

      return data
    } catch (error) {
      toast.error((error as Error).message)

      throw error
    }
  }

  get(url: string): Promise<unknown> {
    return this.requestService(url)
  }
  post(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown> {
    return this.requestService(url, HttpMethods.Post, body, headers)
  }
  patch(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown> {
    return this.requestService(url, HttpMethods.Patch, body, headers)
  }
  delete(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown> {
    return this.requestService(url, HttpMethods.Delete, body, headers)
  }
}
