import * as React from 'react'

import { StyledFlex } from './styles'

interface FlexProps extends React.CSSProperties {
  children: React.ReactNode;
  smoked?: boolean;
}

const Flex = ({
  alignItems,
  backgroundColor,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  columnGap,
  children,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  margin,
  maxWidth,
  padding,
  rowGap,
  width,
  smoked
}: FlexProps) => {
  return (
    <StyledFlex
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      columnGap={columnGap}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      height={height}
      justifyContent={justifyContent}
      margin={margin}
      maxWidth={maxWidth}
      padding={padding}
      rowGap={rowGap}
      width={width}
      smoked={smoked}
    >
      {children}
    </StyledFlex>
  )
}

export default React.memo(Flex)
