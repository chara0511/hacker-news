import * as React from 'react'

import { StyledList } from './styles'

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>
}

export default React.memo(List)
