import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    to bottom,
    var(--whisper) -32%,
    var(--white) 124%
  );
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
