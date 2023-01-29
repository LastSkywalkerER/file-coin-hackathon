import 'react-quill/dist/quill.snow.css'

import { Paper } from '@mui/material'
import { useInjection } from 'inversify-react'
import { DeltaStatic, Sources } from 'quill'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'

import { TextEditor, TextEditorControl } from '@/components/blocks/TextEditor'
import { Button } from '@/components/controls'
import { IApiService, UpdateDocument } from '@/services/api'

import { useClasses } from './styles'

enum DocValuesNames {
  Content = 'content',
  Id = 'id',
  Owner = 'owner',
  Link = 'link',
}

interface DocValues {
  [DocValuesNames.Content]: string
  [DocValuesNames.Id]: number
  [DocValuesNames.Owner]: string
  [DocValuesNames.Link]: string
}

interface EditDocumentProps {
  document?: UpdateDocument
}

export const EditDocument = ({ document }: EditDocumentProps) => {
  const { documentsUpdate } = useInjection<IApiService>(IApiService.$)
  const { control, handleSubmit, setValue } = useForm<DocValues>({
    mode: 'onChange',
    defaultValues: document,
  })
  const { classes } = useClasses()

  const onSubmit = async (values: DocValues) => {
    const document = await documentsUpdate(values)

    setValue(DocValuesNames.Id, document.id)
    setValue(DocValuesNames.Owner, document.owner)
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextEditorControl
        name={DocValuesNames.Content}
        control={control}
        className={classes.editor}
      />
      <Button type="submit" variant="contained">
        Safe
      </Button>
    </form>
  )
}
