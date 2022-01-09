/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { AxiosError, AxiosResponse } from 'axios'
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query'

import { baseApi } from '../api'
import type { News } from '../types'

interface SearchParams {
  query: string;
}

export default function useNews ({
  query
}: SearchParams): UseInfiniteQueryResult<News, unknown> {
  return useInfiniteQuery(
    ['search', query],
    async ({ pageParam = 0 }) => {
      try {
        const response: AxiosResponse<News, any> = await baseApi.get<News>(
          `search_by_date?query=${query}&page=${pageParam}`
        )
        return {
          ...response.data,
          nextPage: (pageParam + 1) as number
        }
      } catch (error) {
        const isAxiosError = (candidate: any): candidate is AxiosError => {
          return candidate.isAxiosError === true
        }

        // TODO: Display notifications
        if (isAxiosError(error)) {
          console.log('axios-error', error)
        } else {
          console.log(error)
        }
      }
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage && lastPage.nextPage < lastPage.nbHits) {
          return lastPage.nextPage
        }
        return undefined
      }
    }
  )
}
