import * as React from 'react'

import type { Action, Dispatch, NewsProviderProps, State } from '../types'

const initialState: State = JSON.parse(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  localStorage.getItem('news')!
) ?? {
  query: 'angular',
  news: [],
  favorites: [],
  page: 0,
  view: 'all'
}

export const NewsStateContext = React.createContext<
  { state: State } | undefined
>(undefined)

export const NewsUpdaterContext = React.createContext<
  { dispatch: Dispatch } | undefined
>(undefined)

const newsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GET_QUERY':
      return {
        ...state,
        query: action.payload
      }

    case 'GET_PAGE':
      return {
        ...state,
        page: action.payload
      }

    case 'ADD_NEWS':
      return {
        ...state,
        news: action.payload
      }

    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites]
      }

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.objectID !== action.payload
        )
      }

    case 'CHANGE_VIEW':
      return {
        ...state,
        view: action.payload
      }

    default:
      throw new Error('Unhandled action type')
  }
}

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [state, dispatch] = React.useReducer(newsReducer, initialState)

  const stateValue = React.useMemo(() => ({ state }), [state])

  const dispatchValue = React.useMemo(() => ({ dispatch }), [dispatch])

  return (
    <NewsStateContext.Provider value={stateValue}>
      <NewsUpdaterContext.Provider value={dispatchValue}>
        {children}
      </NewsUpdaterContext.Provider>
    </NewsStateContext.Provider>
  )
}
