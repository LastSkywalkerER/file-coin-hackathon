import { inject, injectable } from 'inversify'

import { IHttpService } from '../http'
import { IMetamask } from '../metamask'
import { ApiMethods, IApiService, UpdateDocument } from './api.types'

@injectable()
export class ApiService implements IApiService {
  @inject(IHttpService.$) private httpService: IHttpService | undefined
  @inject(IMetamask.$) private metamask: IMetamask | undefined

  constructor() {
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.getAllUsers = this.getAllUsers.bind(this)
    this.getUser = this.getUser.bind(this)
    this.documentsCreate = this.documentsCreate.bind(this)
    this.documentsUpdate = this.documentsUpdate.bind(this)
    this.documents = this.documents.bind(this)
    this.documentsRemove = this.documentsRemove.bind(this)
  }

  register(address: string) {
    return this.httpService?.post(ApiMethods.UsersRegister, { address })
  }
  login(address: string) {
    return this.httpService?.post(ApiMethods.UsersLogin, { address })
  }
  getAllUsers() {
    return this.httpService?.get(ApiMethods.Users)
  }
  getUser(address: string) {
    return this.httpService?.get(`${ApiMethods.Users}/${address}`)
  }
  async documentsCreate(content: string) {
    const address = await this.metamask?.getAddress()

    return await this.httpService?.post(ApiMethods.DocumentsCreate, { content, owner: address })
  }
  async documentsUpdate({ owner, ...args }: UpdateDocument) {
    const address = await this.metamask?.getAddress()

    return await this.httpService?.patch(ApiMethods.DocumentsUpdate, {
      ...args,
      owner: owner || address,
    })
  }
  documents() {
    return this.httpService?.get(ApiMethods.Documents)
  }
  documentsRemove(id: number) {
    return this.httpService?.delete(`${ApiMethods.DocumentsRemove}/${id}`)
  }
}
