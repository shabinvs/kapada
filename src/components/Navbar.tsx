import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, PhoneCall } from 'lucide-react';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  onChangePage: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onChangePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: ActivePage }[] = [
    { label: "HOME", id: 'home' },
    { label: "PRODUCTS", id: 'products' },
    { label: "OUR STORY", id: 'story' },
    { label: "OUR PROCESS", id: 'process' },
    { label: "COLOURS", id: 'colours' },
    { label: "PARTNER WITH US", id: 'partner' },
    { label: "CONTACT US", id: 'contact' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    onChangePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <nav
        id="kapada-main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-beige/50 py-4'
            : 'bg-transparent pt-2 pb-4'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center mt-2">
            {/* Logo area */}
            <button
              id="navbar-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center group cursor-pointer text-left -ml-2"
            >
              <img
                src="/Kapada full logo.png"
                alt="Kapada Logo"
                className="h-10 sm:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      id={`nav-item-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                        activePage === item.id
                          ? 'text-brand-gold font-bold'
                          : (isScrolled || activePage !== 'home')
                            ? 'text-brand-dark/70 hover:text-brand-gold'
                            : 'text-brand-beige/90 hover:text-brand-gold'
                      }`}
                    >
                      {item.label}
                      {activePage === item.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>


            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${(isScrolled || activePage !== 'home') ? 'text-brand-dark' : 'text-brand-beige'} hover:text-brand-gold p-2 transition-colors focus:outline-none` }
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-brand-bg border-b border-brand-beige/80 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activePage === item.id
                        ? 'bg-brand-green text-brand-beige pl-6'
                        : 'text-brand-dark/80 hover:bg-brand-beige/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
