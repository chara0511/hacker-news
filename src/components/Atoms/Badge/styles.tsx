import styled from 'styled-components'

export const StyledBadge = styled.span`
  width: 22px;
  height: 22px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.sm};
  z-index: 99;
  background-color: var(--dodger-blue);
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`
