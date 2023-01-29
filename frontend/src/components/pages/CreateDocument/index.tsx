import { Paper } from '@mui/material'

import { EditDocument } from '@/components/blocks/EditDocument'

import { useClasses } from './styles'

const CreateDocument = () => {
  const { classes } = useClasses()

  return (
    <Paper className={classes.paper}>
      <EditDocument />
    </Paper>
  )
}

export default CreateDocument
