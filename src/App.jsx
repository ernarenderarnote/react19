import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from "./components/layout/AppLayout";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import About from "./components/About";
export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout />,
      children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/contact-us",
            element:<ContactUs />
          },
          {
            path:"/about",
            element:<About />
          }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

