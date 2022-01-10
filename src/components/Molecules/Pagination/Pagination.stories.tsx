import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from '.'
import { Card } from '..'
import type { Hit } from '../../../types'

export default {
  title: 'Molecules/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  data: [
    {
      created_at: '2022-01-09T14:24:51.000Z',
      title: null,
      url: null,
      author: 'gtsnexp',
      points: null,
      story_text: null,
      comment_text:
        'Always remember: in the Sciences you are measured by what you do, not by what you know.<p>Exhibitionism of knowledge is one of the most degrading forms of narcissism.<p>Look for your own problems. Ask yourself what you find puzzling, misunderstood, strange or obscure. These are the big questions.<p>Try to formulate and understand everything in your own terms. There are no minor problems or issues.<p>Don&#x27;t work with the primary goal of pleasing others.<p>Always keep in mind that you are not unique, you are not better than others. Always keep in mind that others don&#x27;t have an innate advantage over you.<p>Keep yourself in a state where you can guarantee that you know no less about your field than other people in it. Your background is unique, and you can produce specific combinations of ideas that may not be immediate to everyone.<p>Have a specialty: an area, however small, that you know very well, if possible like no other.<p>From time to time vary problems and even areas. Different and even disparate problems and solutions nurture each other. Science is a biological organism, a living being.<p>Set aside a regular daily period of intensive work. The duration does not matter so much as the intensity.<p>In the Sciences, arrogance is tolerated, but only by those who can afford it.<p>Write and keep your ideas in order. Keeping a notebook is a good suggestion.<p>Talk, talk about what is on your mind without monopolizing. Make the conversation useful to you and your interlocutors. No matter how well you disguise it, no one is interested in someone who talks to himself.<p>When thinking about a problem, imagine having a conversation partner to whom you try to explain your ideas. This helps to clarify them.<p>Give good classes, teach, mentor graduate students.<p>Ask what you don&#x27;t know.<p>If you begin to feel misunderstood, with no one recognizing the importance of your work and the genius of your ideas, seek for medical treatment or change jobs.<p>And don&#x27;t try to buy favours from anyone to keep your job.',
      num_comments: null,
      story_id: 29863455,
      story_title: 'How not to be a scientific zombie',
      story_url: 'http://fma.if.usp.br/~jbarata/zumbis.html',
      parent_id: 29863455,
      created_at_i: 1641738291,
      _tags: ['comment', 'author_gtsnexp', 'story_29863455'],
      objectID: '29863456',
      _highlightResult: {
        author: {
          value: 'gtsnexp',
          matchLevel: 'none',
          matchedWords: []
        },
        comment_text: {
          value:
            'Always remember: in the Sciences you are measured by what you do, not by what you know.<p>Exhibitionism of knowledge is one of the most degrading forms of narcissism.<p>Look for your own problems. Ask yourself what you find puzzling, misunderstood, strange or obscure. These are the big questions.<p>Try to formulate and understand everything in your own terms. There are no minor problems or issues.<p>Don\'t work with the primary goal of pleasing others.<p>Always keep in mind that you are not unique, you are not better than others. Always keep in mind that others don\'t have an innate advantage over you.<p>Keep yourself in a state where you can guarantee that you know no less about your field than other people in it. Your background is unique, and you can produce specific combinations of ideas that may not be immediate to everyone.<p>Have a specialty: an area, however small, that you know very well, if possible like no other.<p>From time to time vary problems and even areas. Different and even disparate problems and solutions nurture each other. Science is a biological organism, a living being.<p>Set aside a <em>regular</em> daily period of intensive work. The duration does not matter so much as the intensity.<p>In the Sciences, arrogance is tolerated, but only by those who can afford it.<p>Write and keep your ideas in order. Keeping a notebook is a good suggestion.<p>Talk, talk about what is on your mind without monopolizing. Make the conversation useful to you and your interlocutors. No matter how well you disguise it, no one is interested in someone who talks to himself.<p>When thinking about a problem, imagine having a conversation partner to whom you try to explain your ideas. This helps to clarify them.<p>Give good classes, teach, mentor graduate students.<p>Ask what you don\'t know.<p>If you begin to feel misunderstood, with no one recognizing the importance of your work and the genius of your ideas, seek for medical treatment or change jobs.<p>And don\'t try to buy favours from anyone to keep your job.',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['angular']
        },
        story_title: {
          value: 'How not to be a scientific zombie',
          matchLevel: 'none',
          matchedWords: []
        },
        story_url: {
          value: 'http://fma.if.usp.br/~jbarata/zumbis.html',
          matchLevel: 'none',
          matchedWords: []
        }
      },
      is_fav: true
    }
  ],
  RenderComponent: (paginatedData: Hit) => (
    <Card
      key={paginatedData.objectID}
      data={paginatedData}
      dataCy={`fav-${paginatedData.objectID}`}
    />
  ),
  pageLimit: 1,
  dataLimit: 10
}
