import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Basic = Template.bind({})
Basic.args = {}
