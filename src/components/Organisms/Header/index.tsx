import * as React from 'react'

import { Title } from '../../Atoms'
import { Flex } from '../../Molecules'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="44px 150px 42px 150px"
        margin="auto"
        width="100%"
        maxWidth="1440px"
      >
        <Title font="secondary" size="lg">
          HACKER NEWS
        </Title>
      </Flex>
    </StyledHeader>
  )
}

export default Header
