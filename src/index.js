import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Errorpage";
import Home from "./Home";

import Contactlist from "./contactlist";
import Add from "./addc";
import Main from "./main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "cart",
      //   element: <Product />,
      // },
      // {
      //   path: "Contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "About",
      //   element: <About />,
      // },
      // {
      //   path: "Todolist",
      //   element: <List />,
      // },
      {
        path: "main",
        element: <Main />,
        children: [
          {
            path: "addc",
            element: <Add />,
          },
          {
            path: "contactlist",
            element: <Contactlist />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
