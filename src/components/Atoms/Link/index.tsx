import * as React from 'react'

import { StyledLink } from './styles'

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  disabled?: boolean
}

const Link = ({ children, href, disabled = false }: LinkProps) => {
  return (
    <StyledLink target="_blank" href={href} rel="noopener noreferrer" disabled={disabled}>
      {children}
    </StyledLink>
  )
}

export default Link
