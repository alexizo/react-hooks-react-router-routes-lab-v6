import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/movies/:id',
    element: <Movie />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);

export default router;
