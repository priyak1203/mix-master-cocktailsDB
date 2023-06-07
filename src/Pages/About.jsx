import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Link to={'/'}>Back Home</Link>
      <br />
      <Link to={'/about/company'}>company</Link>
      <Link to={'/about/person'}>person</Link>
      <Outlet />
    </div>
  );
};

export default About;
