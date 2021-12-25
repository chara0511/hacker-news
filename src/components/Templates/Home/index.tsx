import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback, Footer, Header, Main } from '../../Organisms'

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  )
}

export default Home
