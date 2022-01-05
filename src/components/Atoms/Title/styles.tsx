import styled from 'styled-components'

import { TitleProps } from '.'

export const StyledTitle = styled.p<TitleProps>`
  color: var(--zambezi);
  font-size: ${({ size, theme }) => theme.fontSize[size ?? 'md']};
  line-height: ${({ size, theme }) => theme.lineHeight[size ?? 'md']};
  font-family: ${({ font }) =>
    font === 'primary' ? 'var(--font-roboto)' : 'var(--font-baskervville)'};
`
