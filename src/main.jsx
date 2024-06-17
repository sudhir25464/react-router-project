import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './component/home/Home.jsx'
import Footer from './component/footer/Footer.jsx'
import About  from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import User from './component/contact/User.jsx'
import Github from './component/Github/Github.jsx'
// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//        path:"",
//        element:<Home/>
//       },{

//         path:'footer',
//         element:<Footer/>
//       },{
//         path:"about",
//         element:<About/>
//       },{
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
   
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='footer' element={<Footer/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
