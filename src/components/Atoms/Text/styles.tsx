import styled from 'styled-components'

import type { TextProps } from '.'

export const StyledText = styled.p<TextProps>`
  font-size: ${({ size, theme }) => theme.fontSize[size ?? 'md']};
  line-height: ${({ lineHeight, theme }) =>
    theme.lineHeight[lineHeight ?? 'md']};
  color: var(--zambezi);
  text-transform: capitalize;
`
