import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from '.'

export default {
  title: 'Molecules/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  lastPage: 10
}
