import * as React from 'react'

import { NewsUpdaterContext } from '../context/news'
import type { Dispatch } from '../types'

const useNewsUpdater = (): {
  dispatch: Dispatch;
} => {
  const context = React.useContext(NewsUpdaterContext)

  if (context === undefined) {
    throw new Error('useNewsUpdater must be used within a NewsProvider')
  }

  return context
}

export default useNewsUpdater
