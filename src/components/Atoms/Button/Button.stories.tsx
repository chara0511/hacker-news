import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  active: false,
  children: 'Click me!',
  disabled: false,
  onClick: () => {
    // This is intentional
  }
}
