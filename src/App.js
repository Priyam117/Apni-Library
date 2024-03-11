import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import ShimmerUI from "./Components/Shimmer";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
    ]
  }
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
