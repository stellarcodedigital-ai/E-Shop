import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const cartCount = getCartCount();

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const renderAuthAction = (isMobile = false) => {
    if (user) {
      return (
        <div
          className={`flex items-center gap-2 ${
            isMobile ? 'flex-col sm:flex-row sm:items-start sm:gap-3 text-left' : ''
          }`}
        >
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            Hi, {user.name}
          </span>
          <button
            onClick={() => {
              logout();
              handleCloseMenu();
            }}
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <Link
        to="/login"
        onClick={handleCloseMenu}
        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:text-slate-600"
      >
        Sign in
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            onClick={handleCloseMenu}
            className="relative inline-flex items-center text-2xl font-black text-slate-900"
          >
            <span className="mr-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 p-2 text-white shadow-lg">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="17" cy="19" r="1.8" />
                <circle cx="9" cy="19" r="1.8" />
              </svg>
            </span>
            E-Shop
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm">
              <svg
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21 21-4.35-4.35" />
                <circle cx="11" cy="11" r="7" />
              </svg>
              <input
                type="search"
                placeholder="Search for products, brands and more"
                className="w-full border-none bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              {navigationLinks.map(link => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleCloseMenu}
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-slate-900'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {renderAuthAction()}

              <Link
                to="/cart"
                onClick={handleCloseMenu}
                className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17" />
                  <circle cx="17" cy="19" r="1.8" />
                  <circle cx="9" cy="19" r="1.8" />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 inline-flex min-w-[1.75rem] justify-center rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link to="/cart" onClick={handleCloseMenu} className="relative rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm">
              <svg
                className="h-6 w-6 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17" />
                <circle cx="17" cy="19" r="1.8" />
                <circle cx="9" cy="19" r="1.8" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={handleToggleMenu}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-slate-200/80 bg-white/90 backdrop-blur transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-4 px-4 py-6">
          <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
            <input
              type="search"
              placeholder="Search for products"
              className="w-full border-none bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm font-semibold">
            {navigationLinks.map(link => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleCloseMenu}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-white/80 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {renderAuthAction(true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
