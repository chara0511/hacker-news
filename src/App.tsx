import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Home } from './components/Templates'
import { NewsProvider } from './context/news'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <NewsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <main>
                  <p>There is nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </NewsProvider>
    </QueryClientProvider>
  )
}

export default App
