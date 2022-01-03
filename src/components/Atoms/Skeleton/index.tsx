import * as React from 'react'

import { StyledSkeleton } from './styles'

export type SkeletonProps = React.CSSProperties;

const Skeleton = ({ height }: SkeletonProps) => {
  return <StyledSkeleton height={height} />
}

export default Skeleton
