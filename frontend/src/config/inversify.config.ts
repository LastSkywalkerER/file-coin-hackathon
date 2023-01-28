import { Container } from 'inversify'

import { IMetamask, IModalsService, Metamask, ModalsService } from '@/services'

export const appContainer = new Container({ defaultScope: 'Singleton' })
appContainer.bind<IMetamask>(IMetamask.$).to(Metamask)
appContainer.bind<IModalsService>(IModalsService.$).to(ModalsService)
