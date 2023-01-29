/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, useTheme } from '@mui/material'
import { useInjection } from 'inversify-react'
import { createContext, memo, NamedExoticComponent, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ChainInfo, IProviderRpcError } from 'wallets-wrapper'

import { IApiService } from '@/services/api'

import { IMetamask, Metamask } from '../services'
import { WrapperProps } from '../types'
import { useSubscription } from './useSubscription.hook'

const initValue = {
  address: '',
  isConnected: false,
  network: null,
}
interface InitValue {
  address: string
  isConnected: boolean
  network: ChainInfo | null
}

const AccountsContext = createContext<InitValue>(initValue)

export const useAccounts = () =>
  useContext(AccountsContext) || [
    [],
    () => {
      toast.error('Something wrong with metamask')
    },
  ]

export const AccountsProvider: NamedExoticComponent<WrapperProps> = memo((props: WrapperProps) => {
  const { children } = props
  const { init, address$, getAddress, network$, connectWallet, openOnMobile, switchNetwork } =
    useInjection<IMetamask>(IMetamask.$)
  const { login } = useInjection<IApiService>(IApiService.$)

  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.down('md'))
  const [address, setAddress] = useState('')
  const network = useSubscription(network$)
  const isConnected = !!address

  useEffect(() => {
    init()
      .then(async (isInstalled) => {
        await switchNetwork()

        address$.subscribe(setAddress)
        const address = await getAddress()

        if (address) {
          setAddress(address)
          login()
        } else if (isInstalled) {
          if (match) {
            openOnMobile()
          } else {
            await connectWallet().then(setAddress)
          }
        }
      })
      .catch((error) => toast.error((error as IProviderRpcError).message))
  }, [match])

  return (
    <AccountsContext.Provider value={{ address, isConnected, network }}>
      {children}
    </AccountsContext.Provider>
  )
})
