import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import RootLayout from "./Layout/RootLayout";
import { Home, About, Contact, Activities, Purpose, ErrorPage, ActivitiesDetail } from "./components/Pages";
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
        // loader: ActivitiesLoader
      },
      {
        path: "Activities/:id",
        element: <ActivitiesDetail />,
        // loader: loaderActivitiesDetail
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
