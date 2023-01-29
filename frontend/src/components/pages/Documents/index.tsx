import 'react-quill/dist/quill.snow.css'

import { Paper, Typography } from '@mui/material'
import { useInjection } from 'inversify-react'
import { DeltaStatic, Sources } from 'quill'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'

import { useEditDocModal } from '@/components/blocks/EditDocumentModal'
import { TextEditor, TextEditorControl } from '@/components/blocks/TextEditor'
import { Button } from '@/components/controls'
import { IApiService, UpdateDocument } from '@/services/api'

import { useClasses } from './styles'

const Documents = () => {
  const { documents } = useInjection<IApiService>(IApiService.$)
  const [docsList, setDocsList] = useState<UpdateDocument[]>([])

  const { showModal } = useEditDocModal()

  const { classes } = useClasses()

  useEffect(() => {
    documents()?.then((docs) => {
      setDocsList(docs)
    })
  }, [])

  const handleEdit = (document: UpdateDocument) => () => {
    showModal({ document })
  }

  return (
    <div>
      {docsList.map((doc) => (
        <Paper key={doc.id}>
          <Typography>{doc.content}</Typography>
          <a href={doc.link}>ipfs</a>
          <Typography>Owner: {doc.owner}</Typography>
          <Button onClick={handleEdit(doc)} variant="outlined">
            Edit
          </Button>
        </Paper>
      ))}
    </div>
  )
}

export default Documents
