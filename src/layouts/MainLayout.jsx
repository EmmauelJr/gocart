import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

export default function MainLayout() {
  return (
    <>
      <Banner />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}