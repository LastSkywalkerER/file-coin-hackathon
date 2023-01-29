import { interfaces } from 'inversify'

export interface IApiService {
  // register(address: string): Promise<unknown> | undefined
  login(): Promise<void>
  getAllUsers(): Promise<unknown> | undefined
  getUser(address: string): Promise<unknown> | undefined
  documentsCreate(content: string): Promise<IpfsDocument>
  documentsUpdate({ owner, ...args }: UpdateDocument): Promise<IpfsDocument>
  documents(): Promise<UpdateDocument[]>
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
  link: string
}

export interface IpfsDocument {
  link: string
  id: number
  owner: string
}
