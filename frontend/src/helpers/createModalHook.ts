import { useInjection } from 'inversify-react'
import { FC, memo, useRef } from 'react'

import { IModalsService, ModalInstance, ModalOptions } from '@/services'

export const createModalHook = <T extends ModalOptions>(
  component: (props: T) => FC<unknown>,
  options?: ModalInstance['options'],
) =>
  function useModal(): {
    showModal: (props?: Omit<T, keyof ModalOptions>) => void
    hideModal: () => void
  } {
    const { addModal, removeModal } = useInjection<IModalsService>(IModalsService.$)
    const idRef = useRef<string>()

    const hideModal = () => {
      if (idRef.current) {
        removeModal(idRef.current)
      }
    }

    const showModal = (props: Omit<T, keyof ModalOptions> = {} as T) => {
      idRef.current = addModal(
        memo(
          component({
            ...props,
            onClose: hideModal,
          } as T),
        ),
        options,
      )
    }

    return { showModal, hideModal }
  }
