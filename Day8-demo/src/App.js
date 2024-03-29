import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Master from "./components/Master";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Master />
      
      <Outlet />
      <Footer />
      {/* outlet is filled with respect to the path */}
    </div>
  );
};

// creating the configs for routing: what will happen on a particular path/url
const appRouter = createBrowserRouter([
    {
      path: "/", //root route
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        
      ],
      errorElement: <Error />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);