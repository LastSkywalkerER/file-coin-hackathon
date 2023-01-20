import React from 'react'

interface DialogProps {
  id?: string
}

export const DialogContext = React.createContext<DialogProps>({
  id: '',
})
