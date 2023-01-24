import { injectable } from 'inversify'
import { FC } from 'react'
import { BehaviorSubject } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'

import { IModalsService, ModalInstance, Options } from './modals.types'

@injectable()
export class ModalsService implements IModalsService {
  public modalsState$: BehaviorSubject<ModalInstance[]> = new BehaviorSubject<ModalInstance[]>([])

  public constructor() {
    this.addModal = this.addModal.bind(this)
    this.removeModal = this.removeModal.bind(this)
  }

  public addModal(component: FC, options?: Options): string {
    const id = uuidv4()
    this.modalsState$.next([...this.modalsState$.getValue(), { id, component, options }])
    return id
  }

  public removeModal(id: string): void {
    this.modalsState$.next(this.modalsState$.getValue().filter((item) => item.id !== id))
  }
}
