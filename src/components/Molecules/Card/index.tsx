import * as React from 'react'
import { formatDistanceToNow } from 'date-fns'

import { Icon, IconButton, Link, Text } from '../../Atoms'
import { Flex } from '..'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import { StyledCard } from './styles'
import type { Hit } from '../../../types'

interface CardProps {
  data: Hit;
}

const Card = ({ data }: CardProps) => {
  const { dispatch } = useNewsUpdater()

  return (
    <StyledCard>
      <Flex justifyContent="space-between" height="90px">
        <Link href={data.story_url ?? ''}>
          <Flex flexDirection="column" padding="14px 16px 14px 26px">
            <Flex columnGap="8px">
              <Icon name="time" />
              <Text size="xs">
                {formatDistanceToNow(new Date(data.created_at)) ?? '---'} by{' '}
                {data.author ?? '---'}
              </Text>
            </Flex>
            <main>
              <Text size="sm" lineHeight="lg">
                {data.story_title ?? '---'}
              </Text>
            </main>
          </Flex>
        </Link>

        <Flex padding="0px 22px" alignItems="center" smoked>
          {!data.is_fav
            ? (
            <IconButton
              shape="card"
              onClick={() =>
                dispatch({
                  type: 'ADD_FAVORITE',
                  payload: { ...data, is_fav: true }
                })
              }
            >
              <Icon name="favoriteOutlined" />
            </IconButton>
              )
            : (
            <IconButton
              shape="card"
              onClick={() =>
                dispatch({ type: 'REMOVE_FAVORITE', payload: data.objectID })
              }
            >
              <Icon name="favoriteFilled" />
            </IconButton>
              )}
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default React.memo(Card)
