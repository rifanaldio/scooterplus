import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useAppSelector from '../hooks/useAppSelector';
import useSEO from '../hooks/useSEO';

const Layout = ({ children }) => {
  const theme = useAppSelector((state) => state.ui.theme);
  useSEO();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Ensure localStorage stays in sync even on first render
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-ink dark:text-white flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stripe-teal focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-stripe-teal focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full px-4 sm:px-6 md:px-12 lg:px-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

