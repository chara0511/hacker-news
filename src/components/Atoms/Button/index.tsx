import * as React from 'react'

import { StyledButton } from './styles'

export interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

/**
 * @description Custom button component for rendering a memorized and styled button.
 * @param {boolean} active - Custom button will appear pressed. By default false.
 * @param {*} children - React.ReactNode.
 * @param {boolean} disabled - Convert custom button unusable and un-clickable. By default false.
 * @param {number} onClick - Event executes a certain functionality when a custom button is clicked. .
 * @example
 * <Button active={true} disabled={true} onClick={() => void()} >
      Click me!
    </Button>
 */
const Button = ({ active, children, disabled, onClick }: ButtonProps) => {
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
