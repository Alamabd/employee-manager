import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/app.tsx'
import InputEmployee from './route/inputEmployee.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/inputEmployee/:id?',
    Component: InputEmployee
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
