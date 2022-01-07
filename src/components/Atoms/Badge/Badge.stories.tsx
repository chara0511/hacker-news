import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Badge from '.'

export default {
  title: 'Atoms/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <div style={{ position: 'relative', width: 25, height: 100 }}>
    <Badge {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 1
}
