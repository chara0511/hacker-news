import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from '.'

export default {
  title: 'Templates/Home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Basic = Template.bind({})
Basic.args = {}
