import { Container } from 'inversify'

import { IMetamask, IModalsService, Metamask, ModalsService } from '@/services'
import { ApiService, IApiService } from '@/services/api'
import { HttpService, IHttpService } from '@/services/http'
import { ILocalStorageService, LocalStorageService } from '@/services/localStorage'

export const appContainer = new Container({ defaultScope: 'Singleton' })
appContainer.bind<IMetamask>(IMetamask.$).to(Metamask)
appContainer.bind<IModalsService>(IModalsService.$).to(ModalsService)
appContainer.bind<ILocalStorageService>(ILocalStorageService.$).to(LocalStorageService)
appContainer.bind<IHttpService>(IHttpService.$).to(HttpService)
appContainer.bind<IApiService>(IApiService.$).to(ApiService)
