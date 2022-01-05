import * as React from 'react'

import { Title } from '../../Atoms'
import ThemeToggler from '../../Molecules/ThemeToggler'
import { StyledHeader, StyledHeaderFlex } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderFlex
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
        width="100%"
        maxWidth="1440px"
      >
        <Title font="secondary" size="lg">
          HACKER NEWS
        </Title>

       <ThemeToggler />
      </StyledHeaderFlex>
    </StyledHeader>
  )
}

export default Header
