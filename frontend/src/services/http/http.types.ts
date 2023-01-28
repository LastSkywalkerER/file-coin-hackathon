import { interfaces } from 'inversify'

export interface IHttpService {
  get(url: string): Promise<unknown>
  post(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown>
  patch(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown>
  delete(url: string, body?: unknown, headers?: Record<string, string>): Promise<unknown>
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IHttpService {
  export const $: interfaces.ServiceIdentifier<IHttpService> = Symbol('HttpService')
}

export enum HttpMethods {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Delete = 'DELETE',
}
