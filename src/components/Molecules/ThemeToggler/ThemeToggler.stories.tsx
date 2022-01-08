import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ThemeToggler from '.'

export default {
  title: 'Molecules/ThemeToggler',
  component: ThemeToggler
} as ComponentMeta<typeof ThemeToggler>

const Template: ComponentStory<typeof ThemeToggler> = () => <ThemeToggler />

export const Basic = Template.bind({})
Basic.args = {}
