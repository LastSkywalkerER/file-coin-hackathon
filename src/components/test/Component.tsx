import moment from 'moment'
import { FC, useState } from 'react'

import { DraggableDialog } from '../blocks'
import {
  Autocomplete,
  Button,
  Checkbox,
  DateTimeInput,
  RadioGroup,
  Select,
  TextInput,
} from '../controls'
import { PageWrapper } from '../wrappers'

const Component: FC = () => {
  const [date, setDate] = useState<string | null>(moment.now().toLocaleString())
  const [moadal, setModal] = useState(false)

  return (
    <PageWrapper>
      <Autocomplete
        style={{ width: 400 }}
        label={'test'}
        options={[{ name: 'test', value: 'test' }]}
      />
      <Button onClick={() => setModal(true)} variant="contained">
        test
      </Button>
      <Checkbox name="test" value={false} label="test" />
      <DateTimeInput value={date} onChange={setDate} />
      <RadioGroup options={[{ value: 'test', label: 'Test' }]} />
      <Select label={'test'} options={[{ name: 'test', value: 'test' }]} />
      <TextInput label="test" />
      {moadal && (
        <DraggableDialog open title="test" onClose={() => setModal(false)}></DraggableDialog>
      )}
    </PageWrapper>
  )
}

export default Component
