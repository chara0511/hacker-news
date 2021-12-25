import * as React from 'react'

import { StyledText } from './styles'
import type { Size } from '../../../types'

export interface TextProps {
  children: React.ReactNode;
  size?: Size;
  lineHeight?: Size;
}

const Text = ({
  children,
  lineHeight = 'md',
  size = 'md'
}: TextProps) => {
  return (
    <StyledText lineHeight={lineHeight} size={size}>
      {children}
    </StyledText>
  )
}

export default React.memo(Text)
