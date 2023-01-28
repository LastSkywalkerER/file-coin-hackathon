import { Paper } from '@mui/material'
import { DeltaStatic, Sources } from 'quill'
import { useState } from 'react'
import ReactQuill from 'react-quill'

import { useClasses } from './styles'

export const TextEditor = () => {
  const [value, setValue] = useState('')
  const { classes } = useClasses()

  const handleEditor = (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor,
  ) => {
    console.log('🚀 ~ file: index.tsx:20 ~ MainPage ~ value', value)
    setValue(value)
  }

  return (
    <Paper className={classes.paper}>
      <ReactQuill className={classes.editor} theme="snow" value={value} onChange={handleEditor} />
    </Paper>
  )
}
