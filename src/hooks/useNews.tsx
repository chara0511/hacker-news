/* eslint-disable no-console */
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useQuery, UseQueryResult } from 'react-query'

import { baseApi } from '../api'
import type { News } from '../types'

interface SearchParams {
  query: string;
  page: number;
}

export default function useNews ({
  query,
  page
}: SearchParams): UseQueryResult<News, unknown> {
  return useQuery(
    ['search', query, page],
    async () =>
      await baseApi
        .get<News>(`search_by_date?query=${query}&page=${page}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response: AxiosResponse<News, any>) => response.data)
        .catch((error: Error | AxiosError) => {
          // TODO: Display notifications
          if (axios.isAxiosError(error)) {
            console.log('axios-error', error)
          } else {
            console.log(error)
          }
        }),
    {
      enabled: page >= 0 && Boolean(query),
      staleTime: 600000
    }
  )
}
