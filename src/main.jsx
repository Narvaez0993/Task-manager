import React from 'react'
import ReactDOM from 'react-dom/client'
import mainRoute from './shared/infraestructure/routing/router'
import './main.scss'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRoute} />
  </React.StrictMode>,
)
