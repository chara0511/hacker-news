import * as React from 'react'

import { StyledFlex } from './styles'

interface FlexProps extends React.CSSProperties {
  children: React.ReactNode;
  smoked?: boolean;
}

const Flex = ({
  alignItems,
  backgroundColor,
  columnGap,
  children,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  padding,
  rowGap,
  smoked
}: FlexProps) => {
  return (
    <StyledFlex
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      columnGap={columnGap}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      height={height}
      justifyContent={justifyContent}
      padding={padding}
      rowGap={rowGap}
      smoked={smoked}
    >
      {children}
    </StyledFlex>
  )
}

export default Flex
