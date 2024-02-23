import React from "react";
import {homeRoute} from "./routes"
import BoardPage from "../../../domains/board/presentation/pages/index"
import {
    createBrowserRouter,
} from "react-router-dom";



const MainRoute = createBrowserRouter([
    {
      path: homeRoute,
      element: <BoardPage/>,
    },
    {
      path: '/hola',
      element: <div>Hello perras!</div>,
    },

]);

  
export default MainRoute;