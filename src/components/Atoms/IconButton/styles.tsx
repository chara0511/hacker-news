import styled from 'styled-components'

import { IconButtonProps } from '.'

export const StyledIconSquareButton = styled.button<IconButtonProps>`
  border: ${({ active }) =>
    active ?? false
      ? '1px solid var(--dodger-blue)'
      : '1px solid var(--gray-84)'};
  height: fit-content;
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 32px;
  min-width: 32px;
  margin: 4px;
  background-color: ${({ active }) =>
    active ?? false ? 'var(--dodger-blue)' : 'transparent'};
  color: ${({ active }) =>
    active ?? false ? 'var(--white)' : 'var(--zambezi)'};
  transition: var(--transition);
  user-select: 'none';

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    border: 1px solid var(--dodger-blue);
    color: ${({ active }) =>
      active ?? false ? 'var(--white)' : 'var(--dodger-blue)'};
  }
`

export const StyledIconCircleButton = styled(StyledIconSquareButton)`
  border: none;
  border-radius: 50%;

  &:hover {
    border: none;
    background-color: var(--gray-93);
  }
`
