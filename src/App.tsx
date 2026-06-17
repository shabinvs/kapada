import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { ActivePage } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import OurStoryPage from './components/pages/OurStoryPage';
import OurProcessPage from './components/pages/OurProcessPage';
import PartnerWithUsPage from './components/pages/PartnerWithUsPage';
import ContactPage from './components/pages/ContactPage';
import ColoursPage from './components/pages/ColoursPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsConditionsPage from './components/pages/TermsConditionsPage';
import ShippingPolicyPage from './components/pages/ShippingPolicyPage';
import RefundPolicyPage from './components/pages/RefundPolicyPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onChangePage={setActivePage} />;
      case 'products':
        return <ProductsPage onChangePage={setActivePage} />;
      case 'colours':
        return <ColoursPage />;
      case 'story':
        return <OurStoryPage onChangePage={setActivePage} />;
      case 'process':
        return <OurProcessPage />;
      case 'partner':
        return <PartnerWithUsPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsConditionsPage />;
      case 'shipping':
        return <ShippingPolicyPage />;
      case 'refund':
        return <RefundPolicyPage />;
      default:
        return <HomePage onChangePage={setActivePage} />;
    }
  };

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div id="kapada-application-root" className="min-h-screen bg-brand-bg text-brand-dark flex flex-col justify-between selection:bg-brand-green/20 selection:text-brand-green font-sans overflow-x-hidden">
      
      {/* 1. Transparent-to-Solid Dynamic Header/Navbar */}
      <Navbar activePage={activePage} onChangePage={handlePageChange} />

      {/* 2. Page Content container with fluid Framer Motion animations strictly conforming to guidelines */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Static WhatsApp widget with pulsate animations */}
      <FloatingWhatsApp />

      {/* 4. Elegant Editorial structural corporate footer */}
      <Footer onChangePage={handlePageChange} />
    </div>
  );
}
