import styled from 'styled-components'

import type { SkeletonProps } from '.'

export const StyledSkeleton = styled.div<SkeletonProps>`
  display: inline-block;
  height: ${({ height }) => height ?? '100%'};
  width: 100%;
  background: linear-gradient(
    -90deg,
    var(--whiteSmoke) 0%,
    var(--whisper) 50%,
    var(--whiteSmoke) 100%
  );
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`
