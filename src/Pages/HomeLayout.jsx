import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const naviagation = useNavigation();
  const isPageLoading = naviagation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <main className="page">
        {isPageLoading ? (
          <div className="loading loading-center"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </main>
    </>
  );
};

export default HomeLayout;
