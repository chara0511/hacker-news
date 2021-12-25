import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './components/Templates'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
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
  )
}

export default App
