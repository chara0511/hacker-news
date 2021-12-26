import * as React from 'react'
import styled from 'styled-components'

export interface StyledFlexProps extends React.CSSProperties {
  smoked?: boolean;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ padding }) => padding};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
  background-color: ${({ backgroundColor, smoked }) =>
    smoked === true ? 'var( --whiteSmoke)' : backgroundColor};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
`
