
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register, Dashboard, Landing, AddJob, Stats, AllJob, Admin, Profile, Homelayout,EditJob } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { loader as DashboardLoader } from "./pages/Dashboard";
import { action as AddJobAction } from "./pages/AddJob";
import { loader as AllJobLoader } from "./pages/AllJob";
import { loader as Adminloader } from "./pages/Admin";
import { action as ProfileAction } from "./pages/Profile";
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import {loader as EditjobLoader} from "./pages/EditJob";
import {action as DeleteAction}from "./pages/DeleteJob";
import {action as EditJobAction}from "./pages/EditJob";
import { ErrorElement } from "./components";

export const checkDefaultTheme = () => {

  const isDarktheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarktheme);
  return isDarktheme;
}
checkDefaultTheme();


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "register",
        element: <Login />,
        action: RegisterAction
      },
      {
        path: "login",
        element: <Register />,
        action:LoginAction
      }
      , {
        path: 'dashboard',
        element: <Dashboard queryClient={queryClient}
         />,
        loader: DashboardLoader(queryClient),

        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobAction(queryClient)
          }
          , {
            path: 'stats',
            element: <Stats />,
            errorElement: <ErrorElement />
          },
          {
            path: 'all-jobs',
            element: <AllJob />,
            loader: AllJobLoader(queryClient),
            errorElement: <ErrorElement />
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: Adminloader(queryClient),
          }
          , {
            path: 'profile',
            element: <Profile />,
            action: ProfileAction(queryClient),
          }
          ,{
            path:"edit-job/:id",
            element:<EditJob/>,
            loader:EditjobLoader(queryClient),
            action:EditJobAction(queryClient)
          },
          {
            path:"delete-job/:id",
            action:DeleteAction(queryClient)
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <h1>Jobify</h1>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
