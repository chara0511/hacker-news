import * as React from 'react'

import { StyledButton } from './styles'

export interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({
  active,
  children,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <StyledButton
      active={active}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default React.memo(Button)
