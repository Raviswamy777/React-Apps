import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./components/Home/Home";
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx';
import About from "./components/About/About.jsx"
import Contact from './components/Contact/Contact.jsx';
import {Github, githubInfoLoader} from './components/Github/Github.jsx';
import User from './components/User/User.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='github' loader={githubInfoLoader} element={<Github/>}/>
      <Route path='user/' element={<User/>}>
      <Route path=':userid' element={<User/>} />
      </Route>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
