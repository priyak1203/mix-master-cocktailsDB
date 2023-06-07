import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, HomeLayout } from './Pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
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
