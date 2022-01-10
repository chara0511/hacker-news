import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Spinner from '.'

export default {
  title: 'Atoms/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = () => <Spinner />

export const Basic = Template.bind({})
Basic.args = {}
