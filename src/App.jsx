import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import RootLayout from "./Layout/RootLayout";
import { Home, About, Contact, Activities, Purpose, ErrorPage, ActivitiesDetail, LessonDhama } from "./components/Pages";
const routerdom = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "purpose",
        element: <Purpose />,
      },
      {
        path: "Activities",
        element: <Activities />,
      },
      {
        path: "Activities/:id",
        element: <ActivitiesDetail />,
      },
      {
        path: "dhama-lessons",
        element: <LessonDhama />

      }
      ,
      {
        path: "*",
        element: <ErrorPage />,
      }

    ],
  }
]);
const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={routerdom} />
    </LanguageProvider>
  );
};
export default App;
