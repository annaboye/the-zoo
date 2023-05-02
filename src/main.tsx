import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.scss'
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { AnimalList } from './pages/AnimalList';
import { AnimalView } from './pages/AnimalView';
import { Home } from './pages/Home';
import {Error} from './pages/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
