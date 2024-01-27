import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/About-Us";
import Erorr404 from "../Erorr404";
import ContactUs from "../pages/ContactUs";
import SingleMovie from "../pages/SingleMovie";
import Genra from "../pages/Genra/Genra";
import SingleGenra from "../pages/SingleGenra/SingleGenra.JS";

export default function Router() {
  const shima = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/About-us",
      element: <AboutUs />,
    },
    {
      path: "/m/:id",                                 // chon in tike daynamik hast ma baed az series harchi bezanim singlemovie baz mishavad
      element: <SingleMovie />,                                 // : mohem ast
    },
    {
      path: "/Genra/",
      element: <Genra />,
    },
    {
      path: "/Genra/:genra-Id",
      element: <SingleGenra />,
    },
    {
      path: "*",
      element: <Erorr404 />,
    },
  ]);

  return <RouterProvider router={shima} />;
}
