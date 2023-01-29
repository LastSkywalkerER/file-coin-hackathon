import 'react-quill/dist/quill.snow.css'

import { Paper } from '@mui/material'
import { DeltaStatic, Sources } from 'quill'
import { useState } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import ReactQuill, { ReactQuillProps } from 'react-quill'

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

export const TextEditorControl = <T extends FieldValues>(
  props: UseControllerProps<T> & ReactQuillProps,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => <ReactQuill {...field} {...restProps} />}
    />
  )
}
