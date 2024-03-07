// react
import React from "react";
import ReactDOM from "react-dom/client";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Index from "./routes/Index.jsx";
import Cart from "./routes/Cart.jsx";
import Error from "./routes/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
