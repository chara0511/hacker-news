/* eslint-disable camelcase */
import * as React from 'react'

// Components types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Font = 'primary' | 'secondary';

export type IconName =
  | 'angular'
  | 'arrowDown'
  | 'arrowUp'
  | 'reactjs'
  | 'vuejs'
  | 'favoriteFilled'
  | 'time'
  | 'favoriteOutlined'
  | 'moon'
  | 'sun'
  | 'error';

// Hook types
export type Direction = 'up' | 'down';

// Api types
export interface Hit {
  is_fav: boolean;
  created_at: string;
  title: null | string;
  url: null | string;
  author: string;
  points: null | string;
  story_text: null | string;
  comment_text: string;
  num_comments: null | string;
  story_id: number;
  story_title: string;
  story_url: null | string;
  parent_id: number;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: {
    author: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    comment_text: {
      value: string;
      matchLevel: string;
      fullyHighlighted: boolean;
      matchedWords: string[];
    };
    story_title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    story_url: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  };
}

export interface News {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  renderingContent: Record<string, never>;
  processingTimeMS: number;
}

// Context types
export interface NewsProviderProps {
  children: React.ReactNode;
}

export type View = 'all' | 'my favs';
export interface State {
  query: string;
  page: number;
  news: News[] ;
  favorites: Hit[];
  view: View;
}

export type Action =
  | { type: 'GET_QUERY'; payload: State['query'] }
  | { type: 'GET_PAGE'; payload: State['page'] }
  | { type: 'ADD_NEWS'; payload: News[] }
  | { type: 'ADD_FAVORITE'; payload: Hit }
  | { type: 'REMOVE_FAVORITE'; payload: Hit['objectID'] }
  | { type: 'CHANGE_VIEW'; payload: View };

// eslint-disable-next-line no-unused-vars
export type Dispatch = (action: Action) => void;
