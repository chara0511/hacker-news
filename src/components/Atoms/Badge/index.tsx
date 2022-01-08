import * as React from 'react'

import { StyledBadge } from './styles'

interface BadgeProps {
  children: React.ReactNode;
}

/**
 * @description Used to highlight an item's status for quick recognition.
 * @param {*} children - React.ReactNode.
 */
const Badge = ({ children }: BadgeProps) => {
  return <StyledBadge>{children}</StyledBadge>
}

export default Badge
