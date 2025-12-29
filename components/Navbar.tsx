
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Models', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blog' }
  ];

  return (
    <header className={`fixed top-0 z-[100] w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 py-4 lg:px-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined font-bold">electric_scooter</span>
          </div>
          <h2 className="text-slate-900 text-xl font-black tracking-tight uppercase">Prakriti EV</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors uppercase tracking-wider ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/test-ride" className="hidden sm:flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-slate-900 text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105">
            Book Test Ride
          </Link>
          <button 
            className="md:hidden flex items-center justify-center p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase ${location.pathname === link.path ? 'text-primary' : 'text-slate-900'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/test-ride" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-12 items-center justify-center rounded-lg bg-primary text-slate-900 font-bold"
          >
            Book Test Ride
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
