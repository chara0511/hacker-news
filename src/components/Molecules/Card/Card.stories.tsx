import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from '.'

export default {
  title: 'Molecules/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: {
    is_fav: false,
    created_at: '2021-12-23T16:18:13.000Z',
    title: null,
    url: null,
    author: 'unionpivo',
    points: null,
    story_text: null,
    comment_text:
      'Because that&#x27;s not what UN is.  UN is not a world government.<p>UN for all it&#x27;s glory, is just a permanent place for countries to to talk to each other.<p>Think of it as an expo&#x2F;trade conference for governments that is always running.<p>The issue here is that Russia doesn&#x27;t seem to want to talk to anyone (except their demand for 1on1 with USA), and can veto anything on the security council, so UN has little role to play.<p>&gt; If it&#x27;s not possible to even discuss the behavior of the 5 permanent Security Council members (5 of the most powerful countries in the world)<p>Sure you can discuss it, but to what gain ?  Just to further piss some of them off ?<p>&gt; then screw it! Let&#x27;s just get rid of the UN entirely.<p>UN is a tool, but unlike a hammer can&#x27;t always be used. That doesn&#x27;t mean its useless.<p>&gt; 5 of the most powerful countries in the world<p>This is a fantasy people live in that world is a fair place. It&#x27;s not and it has never been. In private life we have come far, and you could say that at least in most developed countries rule of law works to a degree (it&#x27;s not perfect, but its better than at any point in the past.)<p>But on the international stage it&#x27;s still pretty much that countries with the biggest sticks get their way. Most of the big countries regularly bully smaller ones, and there is little small countries can do, except to maybe appeal to big countries population in hopes they will restrain their own government.<p>Unless we get some kind of global government that has it&#x27;s own teeth (army&#x2F;police) this wont change.<p>But UN is still useful.',
    num_comments: null,
    story_id: 29655850,
    story_title:
      'Russian Invasion of Ukraine Is ‘Almost Certain,\' Cyber Expert Says',
    story_url: 'https://www.spytalk.co/p/russian-invasion-of-ukraine-is-almost',
    parent_id: 29658352,
    created_at_i: 1640276293,
    _tags: ['comment', 'author_unionpivo', 'story_29655850'],
    objectID: '29663289',
    _highlightResult: {
      author: {
        value: 'unionpivo',
        matchLevel: 'none',
        matchedWords: []
      },
      comment_text: {
        value:
          'Because that\'s not what UN is.  UN is not a world government.<p>UN for all it\'s glory, is just a permanent place for countries to to talk to each other.<p>Think of it as an expo/trade conference for governments that is always running.<p>The issue here is that Russia doesn\'t seem to want to talk to anyone (except their demand for 1on1 with USA), and can veto anything on the security council, so UN has little role to play.<p>&gt; If it\'s not possible to even discuss the behavior of the 5 permanent Security Council members (5 of the most powerful countries in the world)<p>Sure you can discuss it, but to what gain ?  Just to further piss some of them off ?<p>&gt; then screw it! Let\'s just get rid of the UN entirely.<p>UN is a tool, but unlike a hammer can\'t always be used. That doesn\'t mean its useless.<p>&gt; 5 of the most powerful countries in the world<p>This is a fantasy people live in that world is a fair place. It\'s not and it has never been. In private life we have come far, and you could say that at least in most developed countries rule of law works to a degree (it\'s not perfect, but its better than at any point in the past.)<p>But on the international stage it\'s still pretty much that countries with the biggest sticks get their way. Most of the big countries <em>regular</em>ly bully smaller ones, and there is little small countries can do, except to maybe appeal to big countries population in hopes they will restrain their own government.<p>Unless we get some kind of global government that has it\'s own teeth (army/police) this wont change.<p>But UN is still useful.',
        matchLevel: 'full',
        fullyHighlighted: false,
        matchedWords: ['angular']
      },
      story_title: {
        value:
          'Russian Invasion of Ukraine Is ‘Almost Certain,\' Cyber Expert Says',
        matchLevel: 'none',
        matchedWords: []
      },
      story_url: {
        value: 'https://www.spytalk.co/p/russian-invasion-of-ukraine-is-almost',
        matchLevel: 'none',
        matchedWords: []
      }
    }
  }
}
