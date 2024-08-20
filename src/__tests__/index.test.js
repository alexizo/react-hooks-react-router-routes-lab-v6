import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../routes.js";

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router}/>);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors']
  });
  render(<RouterProvider router={router}/>);
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors']
  });
  render(<RouterProvider router={router}/>);
  expect(screen.queryByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`]
  });
  render(<RouterProvider router={router}/>);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/bad-route'],
    initialIndex: 0,
  });
  render(<RouterProvider router={router} />);
  
  // Check for text that matches the rendered error page
  expect(screen.getByText(/Unexpected Application Error!/)).toBeInTheDocument();
  expect(screen.getByText(/404 Not Found/)).toBeInTheDocument();
  expect(screen.getByText(/Hey developer 👋/)).toBeInTheDocument();
});
