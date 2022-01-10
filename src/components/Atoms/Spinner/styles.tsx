import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledSpinner = styled.div`
  border: 0.15em solid var(--dodger-blue);
  border-top: 0.15em solid var(--gray-84);
  border-radius: 50%;
  width: ${({ theme }) => theme.fontSize.md};
  height: ${({ theme }) => theme.fontSize.md};
  animation: ${spin} 0.6s linear infinite;
`
