import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '.'

export default {
  title: 'Organisms/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Basic = Template.bind({})
Basic.args = {}
