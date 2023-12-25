import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Contract from "./components/Contract/Contract";
import About from "./components/about/About";
import User from "./components/user/User";
import UserDetails from "./components/userDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Contract",
        element: <Contract></Contract>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/User",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User></User>,
      },
      {
        path: "/User/:useId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.useId}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
