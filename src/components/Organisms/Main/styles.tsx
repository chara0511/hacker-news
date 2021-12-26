import styled, { css } from 'styled-components'

import { StyledFlex, StyledFlexProps } from '../../Molecules/Flex/styles'
import type { Direction } from '../../../types'

interface StyledFilterFlexProps extends StyledFlexProps {
  scrollDirection?: Direction;
  scrolledToTop?: boolean;
}

export const StyledMain = styled.main`
  min-height: calc(100vh - 114px);
  padding: 70px 150px;
  background-color: var(--gray-99);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 960px) {
    padding: 60px 32px;
  }

  @media (max-width: 480px) {
    padding: 50px 16px;
  }
`

export const StyledFilterFlex = styled(StyledFlex)<StyledFilterFlexProps>`
  position: sticky;
  top: 108px;
  z-index: 49;
  padding: 8px 0px;
  background-color: var(--gray-99);
  transition: var(--transition);

  @media (max-width: 960px) {
    top: 87px;
  }

  @media (max-width: 480px) {
    top: 65px;
    padding: 8px 0px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'up' &&
      !scrolledToTop &&
      css`
        box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
        border: 1px solid var(--gray-84);
      `}

    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'down' &&
      !scrolledToTop &&
      css`
        box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
        border: 1px solid var(--gray-84);
      `}
  }
`
