import * as React from 'react'

import { StyledList } from './styles'

interface ListProps {
  children: React.ReactNode;
  dataCy?: string;
}

const List = ({ children, dataCy = 'list' }: ListProps) => {
  return <StyledList data-cy={dataCy}>{children}</StyledList>
}

export default React.memo(List)
