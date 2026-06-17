import { MapPin, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  onChangePage: (page: ActivePage) => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const handleNavClick = (pageId: ActivePage) => {
    onChangePage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks: { label: string; id: ActivePage }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Our Story', id: 'story' },
    { label: 'Our Process', id: 'process' },
    { label: 'Colours', id: 'colours' },
    { label: 'Partner With Us', id: 'partner' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="kapada-global-footer" className="bg-brand-dark text-brand-beige relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-brand-beige/10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 space-y-5">
            <img
              src="/Kapada full logo.png"
              alt="Kapada Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
            <p className="text-sm text-brand-beige/60 leading-relaxed font-sans">
              Naturally Dyed. Skin Safe. Sustainably Made.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-brand-beige/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-brand-beige/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://wa.me/916383619810"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-brand-beige/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-mono font-bold mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-brand-beige/65 hover:text-brand-gold transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-mono font-bold mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-brand-beige/65">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span>+91 6383619810</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span>Dindigul / Coimbatore, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-mono font-bold mb-6">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-brand-beige/65">
              {['Privacy Policy', 'Terms & Conditions', 'Shipping Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <span className="hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-6 text-center text-xs text-brand-beige/40 font-sans">
          © {currentYear} Kapada. All rights reserved. Manufactured in Dindigul, Tamil Nadu, India.
        </div>

      </div>
    </footer>
  );
}
