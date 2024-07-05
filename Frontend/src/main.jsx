import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Signinpage from './components/Signinpage.jsx';
import Signuppage from './components/Signuppage.jsx';

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element:<Signinpage/>
//       },{
//         path:"signup",
//         element:<Signuppage/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Signinpage/>}/>
      <Route path='signup' element={<Signuppage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
