import styled from 'styled-components'

export const StyledDropDown = styled.div`
  max-width: 240px;
  margin-top: 38px;
  margin-bottom: 38px;
  display: block;
`

export const StyledDropDownWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1440px;
  margin: auto;
`

export const StyledDropDownMenu = styled.ul<{
  positionTopMenu?: string;
  positionLeftMenu?: string;
}>`
  position: absolute;
  z-index: 99;
  top: ${({ positionTopMenu }) => positionTopMenu ?? 0};
  left: ${({ positionLeftMenu }) => positionLeftMenu ?? 0};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5px;
  max-width: 240px;
  width: 100%;
`

export const StyledDropDownItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const StyledDropDownBtn = styled.button`
  padding: 5px 10px;
  width: 100%;

  &:hover {
    background-color: var(--whiteSmoke);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  }
`
