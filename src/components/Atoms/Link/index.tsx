import * as React from 'react'

import { StyledLink } from './styles'

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <StyledLink target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </StyledLink>
  )
}

export default Link
