import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, HomeLayout, Landing, Newsletter } from './Pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          { index: true, element: <h3>Our Company</h3> },
          {
            path: 'person',
            element: <h3>John Doe</h3>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
