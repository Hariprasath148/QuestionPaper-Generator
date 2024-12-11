import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout.jsx'
import { Home } from './pages/Home.jsx'


const router = createHashRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={ <Home /> }/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
