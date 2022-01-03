import React from 'react'

import { StyledIconButton, StyledIconCardButton } from './styles'

export interface IconButtonProps {
  active?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  shape?: 'card' | 'pagination';
}

const IconButton = ({
  active,
  children,
  disabled,
  onClick,
  shape
}: IconButtonProps) => {
  if (shape === 'card') {
    return (
      <StyledIconCardButton
        active={active}
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        {children}
      </StyledIconCardButton>
    )
  }
  return (
    <StyledIconButton
      active={active}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledIconButton>
  )
}

export default React.memo(IconButton)
