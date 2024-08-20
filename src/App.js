import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
  {path: "/actors", element: <Actors />,},
  {path: "/directors", element: <Directors />,},
  {path: "*", element: <div>Oops! Looks like something went wrong.</div>,},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
