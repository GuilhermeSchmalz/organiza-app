import * as React from "react";
import * as ReactDOM from "react-dom/client";
import WelcomePage from "./Welcome";
import LoginPage from "./Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SigninPage from "./Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "Singin",
    element: <SigninPage />,
  },
]);

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
