import { useQuery, UseQueryResult } from 'react-query'

export const queryOptions = {
  retry: 0,
  refetchOnWindowFocus: false,
}

export const useQueryAction = (action: string): UseQueryResult<void, Error> =>
  useQuery(
    ['action', action],
    async () =>
      action &&
      (await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })),
    { ...queryOptions, enabled: !!action },
  )
