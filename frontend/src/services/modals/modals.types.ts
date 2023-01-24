import { interfaces } from 'inversify'
import { FC } from 'react'
import { BehaviorSubject } from 'rxjs'

import { DraggableDialogProps } from '@/components/blocks/DraggableDialog/DraggableDialog.types'

export interface Options {
  dialogProps?: Omit<DraggableDialogProps, 'open'>
  removeCloseIcon?: boolean
}

export interface ModalOptions {
  onClose: () => void
}

export interface ModalInstance {
  id: string
  component: FC
  options?: Options
}

export interface IModalsService {
  modalsState$: BehaviorSubject<ModalInstance[]>
  addModal(component: FC, options?: Options): string
  removeModal(id: string): void
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IModalsService {
  export const $: interfaces.ServiceIdentifier<IModalsService> = Symbol('ModalsService')
}
