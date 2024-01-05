import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./_auth/forms/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import RootLayout from "./_root/RootLayout";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";

const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignInForm />,
      },
      {
        path: "/sign-up",
        element: <SignUpForm />,
      },
    ],
  },

  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/all-users",
        element: <AllUsers />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/update-post/:id",
        element: <EditPost />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/profile/:id/*",
        element: <Profile />,
      },
      {
        path: "/update-profile/:id",
        element: <UpdateProfile />,
      },
    ],
  },
]);

export default routes;
