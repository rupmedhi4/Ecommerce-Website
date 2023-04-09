import React,{} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // createRoutesFromElements,
  // Route,

} from 'react-router-dom'
import StorePage from "./Pages/StorePage/StorePage";
import About from "./Pages/AboutPage/About";
import ErrorPage from "./Pages/ErrorPage";

import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage/HomePage';

import Navbar from './Components/Navbar'

const App = () => {
 

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,

      children: [
        { path: "/", element: <StorePage /> },
        { path: "/about", element: <About /> },
        {path : '/home', element : <HomePage/>},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Swithch */}
    </>
  );
};

export default App;
