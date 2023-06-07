import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, HomeLayout, Landing, Newsletter } from './pages';
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
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
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
