import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { AnimalList } from './pages/AnimalList';
import { AnimalView } from './pages/AnimalView';
import {Error} from './pages/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AnimalList></AnimalList>,
    errorElement: <Error></Error>
   
  },
  {
    path: "/:id",
    element: <AnimalView></AnimalView>,
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
