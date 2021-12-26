import styled from 'styled-components'

export const StyledList = styled.ul`
  margin: 38px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 30px;
  min-height: 800px;
  position: relative;
  grid-template-rows: repeat(10, 92px);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`
