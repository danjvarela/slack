import {createBrowserRouter} from "react-router-dom";
import Home from "pages/Home";
import Signup from "pages/Signup";
import Login from "pages/Login";
import User from "pages/User";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users/:id",
      element: <User />,
    },
  ],
  {basename: "/slack-clone"}
);

export default router;
