import { useQuery, UseQueryResult } from 'react-query'

import { queryOptions } from './useQuerry'

export const useQueryGetXagChart = (): UseQueryResult<void> =>
  useQuery(
    ['getXagChart'],
    async () => {
      console.log()
    },
    { ...queryOptions },
  )
