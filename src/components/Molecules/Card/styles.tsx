import styled from 'styled-components'

export const StyledCard = styled.li<{ disabled: boolean }>`
  list-style: none;
  border: 1px solid var(--gray-84);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.2 : 0.4)};
  }
`
