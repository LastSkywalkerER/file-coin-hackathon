import { FC } from 'react'

import { createModalHook } from '@/helpers/createModalHook'

import { EditDocument } from '../EditDocument'
import { useClasses } from './styles'
import { ModalProps } from './types'

const EditDocumentModal: FC<ModalProps> = (props: ModalProps) => {
  const { document } = props

  const { classes } = useClasses()

  return (
    <div className={classes.wrapper}>
      <EditDocument document={document} />
    </div>
  )
}

export const useEditDocModal = createModalHook<ModalProps>(
  (props) => () => <EditDocumentModal {...props} />,
  {
    dialogProps: {
      title: 'Edit',
      fullWidth: true,
      maxWidth: 'lg',
    },
  },
)
