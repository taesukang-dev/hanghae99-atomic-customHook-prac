import React, { Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import useColor from './hooks/useColor'

const Main = React.lazy(() => import('./pages/Main'))
const Detail = React.lazy(() => import('./pages/Detail'))

function App() {
  const [colorIndex, setColorIndex] = useColor()
  let navigate = useNavigate()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<Main colorIndex={colorIndex} navigate={navigate} />}
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              colorIndex={colorIndex}
              setColorIndex={setColorIndex}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
