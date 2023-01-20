import 'normalize.css'
import 'react-photo-view/dist/react-photo-view.css'
import 'react-toastify/dist/ReactToastify.css'
import 'reflect-metadata'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'inversify-react'
import { FC, memo, NamedExoticComponent } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import { ModalContainerComponent, NavBar, OverlayWrapper, PageWrapper } from './components'
import { IntlWrapper } from './components/wrappers/IntlWrapper'
import { appContainer } from './config/inversify.config'
import { AccountsProvider } from './hooks/useAccounts'
import { Router } from './Router'
import { materialTheme } from './theme'
import { GlobalStyle } from './theme/GlobalStyle'
import { WrapperProps } from './types'

export const queryClient = new QueryClient()

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

export const App: FC = () => {
  return (
    <AppWrapper>
      <OverlayWrapper>
        <NavBar />
        <PageWrapper>
          <Router />
        </PageWrapper>
      </OverlayWrapper>
    </AppWrapper>
  )
}

const AppWrapper: NamedExoticComponent<WrapperProps> = memo((props: WrapperProps) => {
  const { children } = props

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={materialTheme}>
        <QueryClientProvider client={queryClient}>
          <IntlWrapper>
            <GlobalStyle />
            <Provider container={appContainer}>
              <AccountsProvider>{children}</AccountsProvider>
              <ModalContainerComponent />
            </Provider>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </IntlWrapper>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  )
})
