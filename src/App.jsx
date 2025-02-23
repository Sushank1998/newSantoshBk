import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layout/Home";
import Search from "./pages/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path:'search',
          element: <Search/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
