import { useState } from 'react'
import Navbar from './Header/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Main/Hero'
import Footer from './Footer/Footer'
import User from './Main/User'
import PasswordNew from './Password/Password'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero /> 
    },
    {
      path: '/footer',
      element: <Footer />
    },
    {
      path: '/user/:username',
      element: <User />
    },
    {
      path: '/password',
      element: <PasswordNew />
    }
  ])
  
  return (
    <>
   <Navbar />
    <RouterProvider router={router} />

      </>
  )  

}

export default App
