import { interfaces } from 'inversify'

export interface IApiService {
  register(address: string): Promise<unknown> | undefined
  login(address: string): Promise<unknown> | undefined
  getAllUsers(): Promise<unknown> | undefined
  getUser(address: string): Promise<unknown> | undefined
  documentsCreate(content: string): Promise<unknown>
  documentsUpdate({ owner, ...args }: UpdateDocument): Promise<unknown>
  documentsUpdate({ owner, ...args }: UpdateDocument): Promise<unknown>
  documents(): Promise<unknown> | undefined
  documentsRemove(id: number): Promise<unknown> | undefined
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IApiService {
  export const $: interfaces.ServiceIdentifier<IApiService> = Symbol('ApiService')
}

export enum ApiMethods {
  UsersRegister = 'users/register',
  UsersLogin = 'users/login',
  Users = 'users',
  DocumentsCreate = 'documents/create',
  DocumentsUpdate = 'documents/update',
  Documents = 'documents',
  DocumentsRemove = 'documents/remove',
}

export interface UpdateDocument {
  id: number
  content: string
  owner?: string
}
