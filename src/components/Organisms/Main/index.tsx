import * as React from 'react'

import { Badge, Button, Skeleton, Spinner, Text } from '../../Atoms'
import { Card, DropDown, Flex, List, Pagination } from '../../Molecules'
import useNews from '../../../hooks/useNews'
import useNewsState from '../../../hooks/useNewsState'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import useScrollDirection from '../../../hooks/useScrollDirection'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import { defaultItems, skeletonCards, views } from '../../../utils/constants'
import { StyledContainer, StyledFilterFlex, StyledMain } from './styles'
import type { Hit } from '../../../types'

const Main = () => {
  const { state } = useNewsState()
  const { favorites, query, view } = state
  const { dispatch } = useNewsUpdater()

  const loadMoreRef = React.useRef<HTMLDivElement>(null)

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useNews({
    query
  })

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  })

  React.useEffect(() => {
    if (data !== undefined && !isLoading) {
      const arr = data?.pages?.map((news) => ({
        ...news,
        hits: news?.hits.map((hit) => ({
          ...hit,
          is_fav:
            favorites.find((fav) => hit.objectID === fav.objectID)?.is_fav ??
            false
        }))
      }))

      dispatch({
        type: 'ADD_NEWS',
        payload: arr
      })
      localStorage.setItem(
        'news',
        JSON.stringify({ favorites, query, view, news: [] })
      )
    }
  }, [data, isLoading, favorites, query, view, dispatch])

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
              disabled={!!(view === 'my favs' && state.favorites.length <= 0)}
              onClick={() => {
                dispatch({ type: 'CHANGE_VIEW', payload: view })
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })
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

        {state.view === 'all' && (
          <List dataCy="hits">
            {(!isLoading || !isFetching) &&
              state.news?.map((news) =>
                news.hits.map((hit) => (
                  <Card
                    key={hit.objectID}
                    data={hit}
                    dataCy={`hit-${hit.objectID}`}
                  />
                ))
              )}
            {(isLoading || isFetching) &&
              !isFetchingNextPage &&
              skeletonCards.map((item) => (
                <div key={item} data-cy={`skeleton-${item}`}>
                  <Skeleton height="90px" />
                </div>
              ))}
          </List>
        )}

        {state.view === 'all' && (
          <div ref={loadMoreRef}>
            <Flex justifyContent="center" columnGap="4px">
              {isFetchingNextPage
                ? (
                <>
                  <Text size="sm">Loading more</Text>
                  <Spinner />
                </>
                  )
                : (
                    !hasNextPage && <Text size="sm">Nothing more to load</Text>
                  )}
            </Flex>
          </div>
        )}

        {state.view === 'my favs' && state.favorites.length > 0 && (
          <Pagination
            data={state.favorites}
            RenderComponent={(paginatedData: Hit) => (
              <Card
                key={paginatedData.objectID}
                data={paginatedData}
                dataCy={`fav-${paginatedData.objectID}`}
              />
            )}
            pageLimit={
              state.favorites.length > 40
                ? 4
                : Math.ceil(state.favorites.length / 10)
            }
            dataLimit={10}
          />
        )}
      </StyledContainer>
    </StyledMain>
  )
}

export default Main
