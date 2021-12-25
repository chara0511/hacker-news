import styled from 'styled-components'

export const StyledCard = styled.li`
  list-style: none;
  border: 1px solid var(--zambezi);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  &:hover {
    opacity: 0.4;
  }
`
