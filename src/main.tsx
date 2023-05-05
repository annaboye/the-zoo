import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { AnimalList } from './pages/AnimalList';
import { AnimalView } from './pages/AnimalView';
import {Error} from './pages/Error'
import { Startpage } from './pages/Startpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Startpage></Startpage>,
    errorElement: <Error></Error>
  },
  {
    path: "/animals",
    element: <AnimalList></AnimalList>,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
