import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./componets/home/Home";
import Services from "./componets/services/Services";
import Map from "./componets/map/Map";
import Dashboard from "./componets/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
