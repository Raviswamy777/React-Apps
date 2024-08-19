import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./components/Home/Home";
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx';
import About from "./components/About/About.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
