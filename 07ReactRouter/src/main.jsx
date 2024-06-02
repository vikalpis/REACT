import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, useLoaderData } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import { RouterProvider } from 'react-router-dom'
import Github from './Components/Github/Github.jsx'
const router = createBrowserRouter([

  {
  path : '/',
  element : <Layout/>,
  children : [
    {
      path : "",
      element : <Home/>
    },
    {
      path : "about",
      element : <About/>
    },
    {
      path : "contact",
      element : <Contact/>
    },
    {

      path : "user/:id",
      element: <User/>
    },
    {
        // loader : {githubINfoloader},
      path : "github",
      element : <Github/>
    }
  ]  
  }
])

// *************OR*************
// there is another method :-

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/ ' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='user/:id' element={<User/>}/>
//       <Route
     
//       path='github' element={<Github/>}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router}/>
  </React.StrictMode>,
)
