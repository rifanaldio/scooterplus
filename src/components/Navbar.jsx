import { Link, NavLink } from 'react-router-dom';
import { useMemo } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { closeMenu, toggleMenu, toggleTheme } from '../store/uiSlice';
import Logo from '../assets/logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { menuOpen, theme } = useAppSelector((state) => state.ui);

  const linkClass = useMemo(
    () =>
      ({ isActive }) =>
        `rounded-md p-2 text-sm font-semibold transition-colors duration-200 ${
          isActive
            ? 'bg-white/20 text-white'
            : 'text-white hover:text-white hover:bg-white/10 dark:text-white'
        }`,
    []
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 dark:bg-black bg-ink text-white backdrop-blur-md dark:border-white/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 text-lg font-black tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
          <img src={Logo} alt="Scooter Plus Garage" className="h-12 sm:h-14 w-auto" />
        </Link>

        <nav className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => dispatch(closeMenu())}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-inner transition hover:border-white/50 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => dispatch(toggleMenu())}
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-inner transition hover:border-white/50 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-500 dark:bg-slate-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => dispatch(closeMenu())}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

