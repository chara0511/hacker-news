import styled from 'styled-components'

import { ButtonProps } from '.'

export const StyledButton = styled.button<ButtonProps>`
  border: ${({ active }) =>
    active ?? false
      ? '1px solid var(--dodger-blue)'
      : '1px solid var(--gray-84)'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ active }) =>
    active ?? false ? 'var(--dodger-blue)' : 'var(--zambezi)'};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.fontSize.xl};
  width: 100px;
  text-align: center;
  text-transform: capitalize;
  transition: var(--transition);

  &:hover {
    border: 1px solid var(--dodger-blue);
    color: var(--dodger-blue);
  }
`
