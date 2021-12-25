import * as React from 'react'
import Portal from '@reach/portal'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock'
import type { BodyScrollOptions } from 'body-scroll-lock'

import { Icon, Text } from '../../Atoms'
import { Flex } from '..'
import useNewsState from '../../../hooks/useNewsState'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import {
  StyledDropDown,
  StyledDropDownBtn,
  StyledDropDownItem,
  StyledDropDownMenu,
  StyledDropDownWrapper
} from './styles'
import type { IconName } from '../../../types'

export interface DropDownProps {
  items: Array<{
    name: string;
  }>;
  positionTopMenu?: string;
  positionLeftMenu?: string;
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
}

const DropDown = ({
  items,
  positionTopMenu,
  positionLeftMenu
}: DropDownProps) => {
  const { state } = useNewsState()
  const { dispatch } = useNewsUpdater()

  const [open, setOpen] = React.useState(false)

  const ref = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    if (ref.current != null) {
      if (open) {
        disableBodyScroll(ref.current, options)
      } else {
        enableBodyScroll(ref.current)
      }
    }

    return () => clearAllBodyScrollLocks()
  }, [open])

  return (
    <StyledDropDown>
      <StyledDropDownBtn
        aria-label={`search ${state.query}`}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Flex justifyContent="space-between">
          <Flex alignItems="center" columnGap="4px">
            <Icon width={24} heigth={24} name={state.query as IconName} />
            <Text size="sm" lineHeight="lg">
              {state.query}
            </Text>
          </Flex>
          <Icon name="arrowDown" />
        </Flex>
      </StyledDropDownBtn>

      <Portal>
        {open && (
          <StyledDropDownWrapper>
            <StyledDropDownMenu
              ref={ref}
              positionTopMenu={positionTopMenu}
              positionLeftMenu={positionLeftMenu}
            >
              {items.map((item, index) => (
                <StyledDropDownItem key={item.name}>
                  <StyledDropDownBtn
                    disabled={index === 0}
                    onClick={() => {
                      if (state.view !== 'all') {
                        dispatch({ type: 'CHANGE_VIEW', payload: 'all' })
                      }
                      dispatch({ type: 'GET_QUERY', payload: item.name })
                      setOpen(!open)
                    }}
                  >
                    <Flex alignItems="center" columnGap="4px">
                      <Icon
                        width={24}
                        heigth={24}
                        name={item.name as IconName}
                      />
                      <Text size="sm" lineHeight="lg">
                        {item.name}
                      </Text>
                    </Flex>
                  </StyledDropDownBtn>
                </StyledDropDownItem>
              ))}
            </StyledDropDownMenu>
          </StyledDropDownWrapper>
        )}
      </Portal>
    </StyledDropDown>
  )
}

export default React.memo(DropDown)
