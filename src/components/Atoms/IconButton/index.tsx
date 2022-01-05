import React from 'react'

import { StyledIconCircleButton, StyledIconSquareButton } from './styles'

export interface IconButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  shape?: 'circle' | 'square';
}

const IconButton = ({
  active,
  children,
  disabled,
  onClick,
  shape
}: IconButtonProps) => {
  if (shape === 'circle') {
    return (
      <StyledIconCircleButton
        active={active}
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        {children}
      </StyledIconCircleButton>
    )
  }
  return (
    <StyledIconSquareButton
      active={active}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledIconSquareButton>
  )
}

export default React.memo(IconButton)
