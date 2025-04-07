import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/",
    element: <h1>Contatos</h1>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <RouterProvider router={router} />
  </StrictMode>,
)


