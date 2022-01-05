import styled from 'styled-components'

export const StyledCard = styled.li`
  list-style: none;
  border: 1px solid var(--gray-84);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  &:hover {
    opacity: 0.4;
  }
`
