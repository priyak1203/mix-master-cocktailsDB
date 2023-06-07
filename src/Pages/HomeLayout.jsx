import { Link, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/about">about</Link>
        <Link to="/newsletter">newsletter</Link>
      </nav>
      <h1>Home Page</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
