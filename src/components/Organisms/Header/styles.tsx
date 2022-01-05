import styled from 'styled-components'

import { StyledFlex } from '../../Molecules/Flex/styles'

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    to bottom,
    var(--whisper) -32%,
    var(--white) 124%
  );
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: var(--transition);
`
export const StyledHeaderFlex = styled(StyledFlex)`
  padding: 29px 150px;

  @media (max-width: 960px) {
    padding: 18px 32px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`
