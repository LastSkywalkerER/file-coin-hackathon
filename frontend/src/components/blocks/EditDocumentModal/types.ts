import { UpdateDocument } from '@/services/api'

export interface ModalProps {
  onClose: () => void
  document: UpdateDocument
}
