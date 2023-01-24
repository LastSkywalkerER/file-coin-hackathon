import { useInjection } from 'inversify-react'
import React, { FC } from 'react'

import { useSubscription } from '@/hooks/useSubscription.hook'
import { IModalsService } from '@/services'

import { DraggableDialog } from '../DraggableDialog'

export const ModalContainerComponent: FC = () => {
  const { modalsState$, removeModal } = useInjection<IModalsService>(IModalsService.$)
  const modals = useSubscription(modalsState$)

  return (
    <>
      {modals?.map(({ id, component: Component, options }) => {
        const closeModal = () => {
          removeModal(id)
        }

        return (
          <DraggableDialog
            open
            key={id}
            onClose={closeModal}
            withoutCloseIcon={options?.removeCloseIcon}
            {...(options?.dialogProps || {})}
          >
            <Component />
          </DraggableDialog>
        )
      })}
    </>
  )
}
