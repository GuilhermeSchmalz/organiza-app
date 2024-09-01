import * as React from "react";
import * as ReactDOM from "react-dom/client";
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
a
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );