import * as React from 'react'
import styled, { css } from 'styled-components'

export interface StyledFlexProps extends React.CSSProperties {
  smoked?: boolean;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  color: var(--zambezi);
  transition: var(--transition);
  background-color: ${({ backgroundColor, smoked }) =>
    smoked === true ? 'var( --whiteSmoke)' : backgroundColor};

   ${({
    alignItems,
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    columnGap,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
    margin,
    maxWidth,
    padding,
    rowGap,
    width
  }) =>
    css`
      align-items: ${alignItems};
      border-top-left-radius: ${borderTopLeftRadius};
      border-bottom-left-radius: ${borderBottomLeftRadius};
      border-top-right-radius: ${borderTopRightRadius};
      border-bottom-right-radius: ${borderBottomRightRadius};
      column-gap: ${columnGap};
      flex-direction: ${flexDirection};
      flex-wrap: ${flexWrap};
      height: ${height};
      justify-content: ${justifyContent};
      margin: ${margin};
      max-width: ${maxWidth};
      padding: ${padding};
      row-gap: ${rowGap};
      width: ${width};
    `}
`
