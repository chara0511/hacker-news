import * as React from 'react'

import { IconButton } from '../../Atoms'
import { Flex } from '..'
import useNewsState from '../../../hooks/useNewsState'
import useNewsUpdater from '../../../hooks/useNewsUpdater'

interface PaginationProps {
  lastPage: number;
}

const Pagination = ({ lastPage }: PaginationProps) => {
  const [index, setIndex] = React.useState(0)

  const { state } = useNewsState()
  const { dispatch } = useNewsUpdater()

  React.useEffect(() => {
    setIndex(state.page)
  }, [state.page])

  return (
    <Flex justifyContent="center">
      <IconButton
        disabled={state.page === 0}
        onClick={() => {
          if (state.view !== 'all') {
            dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
          }
          dispatch({ type: 'GET_PAGE', payload: 0 })
        }}
      >
        {'<<'}
      </IconButton>
      <IconButton
        disabled={state.page === 0}
        onClick={() => {
          if (state.view !== 'all') {
            dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
          }
          dispatch({ type: 'GET_PAGE', payload: state.page - 1 })
        }}
      >
        {'<'}
      </IconButton>

      {state.page - 1 >= 0 && (
        <IconButton
          active={state.page - 1 === index}
          onClick={() => {
            if (state.view !== 'all') {
              dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
            }
            dispatch({ type: 'GET_PAGE', payload: state.page - 1 })
          }}
        >
          {state.page - 1}
        </IconButton>
      )}

      <IconButton
        active={state.page === index}
        onClick={() => {
          if (state.view !== 'all') {
            dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
          }
          dispatch({ type: 'GET_PAGE', payload: state.page })
        }}
      >
        {state.page}
      </IconButton>

      {state.page <= lastPage - 1 && (
        <IconButton
          active={state.page + 1 === index}
          onClick={() => {
            if (state.view !== 'all') {
              dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
            }
            dispatch({ type: 'GET_PAGE', payload: state.page + 1 })
          }}
        >
          {state.page + 1}
        </IconButton>
      )}

      {state.page === 0 && (
        <IconButton
          onClick={() => {
            if (state.view !== 'all') {
              dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
            }
            dispatch({ type: 'GET_PAGE', payload: state.page + 2 })
          }}
        >
          {state.page + 2}
        </IconButton>
      )}

      <IconButton
        disabled={state.page === lastPage || lastPage === 0}
        onClick={() => {
          if (state.view !== 'all') {
            dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
          }
          dispatch({ type: 'GET_PAGE', payload: state.page + 1 })
        }}
      >
        {'>'}
      </IconButton>
      <IconButton
        disabled={state.page === lastPage || lastPage === 0}
        onClick={() => {
          if (state.view !== 'all') {
            dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
          }
          dispatch({ type: 'GET_PAGE', payload: lastPage })
        }}
      >
        {'>>'}
      </IconButton>
    </Flex>
  )
}

export default React.memo(Pagination)
