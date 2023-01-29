import { inject, injectable } from 'inversify'
import { toast } from 'react-toastify'

import { StorageNames } from '@/types'

import { IHttpService } from '../http'
import { ILocalStorageService } from '../localStorage'
import { IMetamask } from '../metamask'
import { ApiMethods, IApiService, IpfsDocument, UpdateDocument } from './api.types'

@injectable()
export class ApiService implements IApiService {
  @inject(IHttpService.$) private httpService: IHttpService | undefined
  @inject(IMetamask.$) private metamask: IMetamask | undefined
  @inject(ILocalStorageService.$) private localStorageService: ILocalStorageService | undefined

  constructor() {
    // this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.getAllUsers = this.getAllUsers.bind(this)
    this.getUser = this.getUser.bind(this)
    this.documentsCreate = this.documentsCreate.bind(this)
    this.documentsUpdate = this.documentsUpdate.bind(this)
    this.documents = this.documents.bind(this)
    this.documentsRemove = this.documentsRemove.bind(this)
  }

  // register(address: string) {
  //   return this.httpService?.post(ApiMethods.UsersRegister, { address })
  // }
  async login() {
    const address = await this.metamask?.getAddress()

    try {
      await this.httpService?.post(ApiMethods.UsersRegister, { address })
    } catch (error) {
      error
    }

    try {
      // eslint-disable-next-line camelcase
      const response = (await this.httpService?.post(ApiMethods.UsersLogin, {
        address,
      })) as { access_token: string }

      // eslint-disable-next-line camelcase
      if (response.access_token) {
        this.localStorageService?.add(StorageNames.Token, response.access_token)
      }
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
  getAllUsers() {
    return this.httpService?.get(ApiMethods.Users)
  }
  getUser(address: string) {
    return this.httpService?.get(`${ApiMethods.Users}/${address}`)
  }
  async documentsCreate(content: string) {
    const address = await this.metamask?.getAddress()

    const response = (await this.httpService?.post(ApiMethods.DocumentsCreate, {
      content,
      owner: address,
    })) as IpfsDocument

    toast.success('Uploaded ->', { onClick: () => window.open(response.link) })
    return response
  }
  async documentsUpdate({ owner, ...args }: UpdateDocument) {
    const address = await this.metamask?.getAddress()

    if (args.id) {
      const response = (await this.httpService?.patch(ApiMethods.DocumentsUpdate, {
        ...args,
        owner: owner || address,
      })) as IpfsDocument

      toast.success('Updated ->', { onClick: () => window.open(response.link) })
      return response
    } else {
      return await this.documentsCreate(args.content)
    }
  }
  async documents() {
    return (await this.httpService?.get(ApiMethods.Documents)) as UpdateDocument[]
  }
  documentsRemove(id: number) {
    return this.httpService?.delete(`${ApiMethods.DocumentsRemove}/${id}`)
  }
}
