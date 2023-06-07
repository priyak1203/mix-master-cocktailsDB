import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Home Page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h3>About Page</h3>
        <a href="/">back home</a>
      </div>
    ),
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
