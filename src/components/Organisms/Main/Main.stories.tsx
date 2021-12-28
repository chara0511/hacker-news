import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Organisms/Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = () => <Main />

export const Basic = Template.bind({})
Basic.args = {}
