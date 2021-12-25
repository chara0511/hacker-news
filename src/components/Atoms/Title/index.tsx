import * as React from 'react'

import { StyledTitle } from './styles'
import type { Font, Size } from '../../../types'

export interface TitleProps {
  size?: Size;
  font?: Font;
  children?: React.ReactNode;
}

const Title = ({ children, font = 'primary', size = 'md' }: TitleProps) => {
  return (
    <StyledTitle font={font} size={size}>
      {children}
    </StyledTitle>
  )
}

export default Title
