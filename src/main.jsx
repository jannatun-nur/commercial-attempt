import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='min-h-screen bg-white'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
