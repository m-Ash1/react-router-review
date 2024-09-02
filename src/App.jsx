import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { UserLayout } from "./layouts/UserLayout";
import Contact from "./routes/Contact";
import Faq from "./routes/Faq";
import { PageNotFound } from "./routes/PageNotFound";
import { UserEdit } from "./routes/UserEdit";
import { UserInfo } from "./routes/UserInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <div>Home</div> },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <div>Hello</div>,
      },
      {
        path: "info",
        element: <UserInfo />,
      },
      {
        path: "edit/:id",
        element: <UserEdit />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
