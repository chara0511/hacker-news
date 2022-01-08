import * as React from 'react'
import { formatDistanceToNow } from 'date-fns'

import { Icon, IconButton, Link, Text } from '../../Atoms'
import { Flex } from '..'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import { StyledCard } from './styles'
import type { Hit } from '../../../types'

export interface CardProps {
  data: Hit;
  dataCy: string;
}

const Card = ({ data, dataCy }: CardProps) => {
  const { dispatch } = useNewsUpdater()

  return (
    <StyledCard
      data-cy={dataCy}
      disabled={
        !data.author || !data.created_at || !data.story_title || !data.story_url
      }
    >
      <Flex justifyContent="space-between" height="90px">
        <Link
          href={data.story_url ?? ''}
          disabled={
            !data.author ||
            !data.created_at ||
            !data.story_title ||
            !data.story_url
          }
        >
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

        <Flex
          padding="0px 22px"
          alignItems="center"
          borderTopRightRadius="6px"
          borderBottomRightRadius="6px"
          smoked
        >
          {!data.is_fav
            ? (
            <IconButton
              disabled={
                !data.author ||
                !data.created_at ||
                !data.story_title ||
                !data.story_url
              }
              shape="circle"
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
              shape="circle"
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
