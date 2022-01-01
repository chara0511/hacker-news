import * as React from 'react'

import { Title } from '../../Atoms'
import { StyledHeader, StyledHeaderFlex } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderFlex
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
      </StyledHeaderFlex>
    </StyledHeader>
  )
}

export default Header
