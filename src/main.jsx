import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './routes/Homepage.jsx'
import Methods from './routes/Methods.jsx'
import Services from './routes/Services.jsx'
import Bootcamp from './routes/Bootcamp.jsx'
import Integrations from './routes/Integrations.jsx'
import ChatGPT_Bard from './routes/ChatGPT_Bard.jsx'
import Team from './routes/Team.jsx'
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Methods",
    element: <Methods />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Bootcamp",
    element: <Bootcamp />,
    errorElement: <ErrorPage />,
  },
   {
    path: "/integrations",
    element: <Integrations />,
    errorElement: <ErrorPage />,
  },
   {
    path: "/ChatGPT_Bard",
    element: <ChatGPT_Bard />,
    errorElement: <ErrorPage />,
  },
   {
    path: "/Team",
    element: <Team />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);