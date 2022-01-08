import styled from 'styled-components'

import { LinkProps } from '.'

export const StyledLink = styled.a<LinkProps>`
  flex: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`
