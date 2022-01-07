import * as React from 'react'

import { Badge, Button, Skeleton } from '../../Atoms'
import { Card, DropDown, List, Pagination } from '../../Molecules'
import useNews from '../../../hooks/useNews'
import useNewsState from '../../../hooks/useNewsState'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import useScrollDirection from '../../../hooks/useScrollDirection'
import { defaultItems, skeletonCards, views } from '../../../utils/constants'
import { StyledContainer, StyledFilterFlex, StyledMain } from './styles'

const Main = () => {
  const { state } = useNewsState()
  const { favorites, page, query, view } = state
  const { dispatch } = useNewsUpdater()

  const { data, isLoading, isFetching } = useNews({
    query,
    page
  })

  React.useEffect(() => {
    if (data !== undefined && !isLoading) {
      dispatch({
        type: 'GET_NEWS',
        payload: {
          ...data,
          hits: data?.hits.map((hit) => ({
            ...hit,
            is_fav:
              favorites.find((fav) => hit.objectID === fav.objectID)?.is_fav ??
              false
          }))
        }
      })
      localStorage.setItem(
        'news',
        JSON.stringify({ favorites, page, query, view })
      )
    }
  }, [data, isLoading, favorites, page, query, view, dispatch])

  const { scrollDirection, scrolledToTop } = useScrollDirection({
    initialDirection: 'up'
  })

  return (
    <StyledMain>
      <StyledContainer>
        <StyledFilterFlex
          justifyContent="center"
          scrollDirection={scrollDirection}
          scrolledToTop={scrolledToTop}
        >
          {views.map((view) => (
            <Button
              key={view}
              active={state.view === view}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })
                dispatch({ type: 'CHANGE_VIEW', payload: view })
              }}
            >
              {view}
              {view === 'my favs' && state.favorites.length > 0 && (
                <Badge>{state.favorites.length}</Badge>
              )}
            </Button>
          ))}
        </StyledFilterFlex>

        <DropDown
          items={[{ name: 'Select your news' }, ...defaultItems]}
          positionTopMenu="308px"
          positionLeftMenu="145px"
          scrollDirection={scrollDirection}
          scrolledToTop={scrolledToTop}
        />

        <List dataCy="hits">
          {state.view === 'all' && (
            <>
              {isLoading || isFetching
                ? skeletonCards.map((item) => (
                    <div key={item} data-cy={`skeleton-${item}`}>
                      <Skeleton height="90px" />
                    </div>
                ))
                : state.news?.hits.map((hit) => (
                    <Card
                      key={hit.objectID}
                      data={hit}
                      dataCy={`hit-${hit.objectID}`}
                    />
                ))}
            </>
          )}

          {state.view === 'my favs' && (
            <>
              {state.favorites.length > 0
                ? (
                    state.favorites?.map((hit) => (
                  <Card
                    key={hit.objectID}
                    data={hit}
                    dataCy={`hit-${hit.objectID}`}
                  />
                    ))
                  )
                : (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  Add Favorites...
                </div>
                  )}
            </>
          )}
        </List>
        <Pagination lastPage={data?.nbPages ?? 0} />
      </StyledContainer>
    </StyledMain>
  )
}

export default Main
