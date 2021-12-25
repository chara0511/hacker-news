import * as React from 'react'

import { Icon, Text } from '../../Atoms'
import { Flex } from '../../Molecules'
import { StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Flex justifyContent="center">
        <Text size="sm" lineHeight="sm">
          Built with <Icon heigth={13} name="favoriteFilled" /> by Chara-
        </Text>
      </Flex>
    </StyledFooter>
  )
}

export default Footer
