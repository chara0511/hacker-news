import * as React from 'react'

import { NewsStateContext } from '../context/news'
import type { State } from '../types'

const useNewsState = (): {
  state: State;
} => {
  const context = React.useContext(NewsStateContext)

  if (context === undefined) {
    throw new Error('useNewsState must be used within a NewsProvider')
  }

  return context
}

export default useNewsState
