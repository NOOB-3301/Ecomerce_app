import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUpPage from "./components/signup/SignUP";
import LoginPage from "./components/signup/LoginPage";
import ErrorComp from "./components/erro_comp/ErrorComp";
import ShopPage from "./components/Shop/ShopComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // Define a fallback route for undefined routes (404 page)
  {
    path: "*", // This will match any undefined route
    element: <ErrorComp />, // Show the ErrorComp component
  },
  {
    path:"/shop",
    element:<ShopPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
