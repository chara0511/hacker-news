
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
        .then((response) => response.data)
        .catch((error) => error),
    {
      enabled: page >= 0 && Boolean(query),
      staleTime: 600000
    }
  )
}
