import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { defaultItems } from '../../../utils/constants'
import DropDown from '.'

export default {
  title: 'Molecules/DropDown',
  component: DropDown
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  items: [{ name: 'Select your news' }, ...defaultItems],
  positionLeftMenu: '22px',
  positionTopMenu: '90px'
}
