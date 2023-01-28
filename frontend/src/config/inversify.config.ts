import { Container } from 'inversify'

import {
  ApiService,
  HttpService,
  IApiService,
  IHttpService,
  ILocalStorageService,
  IMetamask,
  IModalsService,
  LocalStorageService,
  Metamask,
  ModalsService,
} from '@/services'

export const appContainer = new Container({ defaultScope: 'Singleton' })
appContainer.bind<IMetamask>(IMetamask.$).to(Metamask)
appContainer.bind<IModalsService>(IModalsService.$).to(ModalsService)
appContainer.bind<ILocalStorageService>(ILocalStorageService.$).to(LocalStorageService)
appContainer.bind<IHttpService>(IHttpService.$).to(HttpService)
appContainer.bind<IApiService>(IApiService.$).to(ApiService)
