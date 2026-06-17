import { motion } from 'motion/react';
import { ShieldCheck, Leaf, HeartHandshake, Award, ArrowRight, Sparkles, Sprout, FlameKindling, Landmark } from 'lucide-react';
import { ActivePage } from '../../types';
import { certifications } from '../../data';

interface HomePageProps {
  onChangePage: (page: ActivePage) => void;
}

export default function HomePage({ onChangePage }: HomePageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Aesthetic container styles
  const usps = [
    {
      icon: <Leaf className="text-brand-green w-8 h-8 stroke-[1.25]" />,
      title: "Herbal Dyed",
      description: "Infused with 100% natural, botanically sourced therapeutic colors. Zero petroleum synthetics or heavy-metals."
    },
    {
      icon: <ShieldCheck className="text-brand-green w-8 h-8 stroke-[1.25]" />,
      title: "Skin Safe",
      description: "Strictly chemical-free fabric processing. Safe for babies and women suffering from acute hyper-sensitivity."
    },
    {
      icon: <Sprout className="text-brand-green w-8 h-8 stroke-[1.25]" />,
      title: "Kids First",
      description: "Dermatologically sound garments developed under pediatric guidelines. Non-chafing wellness knits."
    },
    {
      icon: <HeartHandshake className="text-brand-green w-8 h-8 stroke-[1.25]" />,
      title: "Sustainably Made",
      description: "Ethical zero-discharge manufacturing in Gujarat utilizing rain-harvested water and bio-mordants."
    },
  ];

  return (
    <div id="home-page-container" className="space-y-0 text-brand-dark">
      
      {/* 1. HERO SECTION */}
      <section
        id="home-hero-section"
        className="relative h-screen bg-brand-dark flex items-center justify-center overflow-hidden"
      >
        {/* video element background, with dynamic overlay and elegant stock placeholder as absolute fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          src="/hero.mp4"
          onError={(e) => {
            // If the external video fails or is blocked, this element degrades gracefully in opacity
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Dynamic gradient overlay matching brand identity */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-dark/70 to-brand-dark/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-green/20 mix-blend-color" />

        {/* Abstract botanical design shapes in raw CSS */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 text-brand-beige flex flex-col items-center mt-24">


          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FAF7F2] leading-[1.1] max-w-5xl mx-auto"
          >
            Clothing That Heals From the Outside In
          </motion.h1>

          <motion.p
            id="hero-subheadline"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-[#E7DDC9]/95 font-sans leading-relaxed max-w-2xl font-light"
          >
            Naturally dyed. Chemically free. Built for the most sensitive skin — your child's and yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            <button
              id="hero-cta-partner-btn"
              onClick={() => {
                onChangePage('partner');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-brand-beige text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-dark/45 cursor-pointer flex items-center justify-center gap-2"
            >
              Partner With Us
              <ArrowRight size={14} />
            </button>
            
            <a
              id="hero-down-catalogue-btn"
              href="/Kapada_Catalogue_2026.pdf"
              download="Kapada_Catalogue_2026.pdf"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-beige/50 hover:border-brand-gold text-brand-beige hover:text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Download Catalogue
            </a>
          </motion.div>
        </div>

        {/* Scroll down elegant visual hint */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-brand-beige/60">
          <span className="text-[9px] tracking-widest uppercase font-mono">Scroll Explore</span>
          <div className="w-1 h-6 rounded-full bg-brand-gold/40 relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-1 left-0 right-0 h-1.5 rounded-full bg-brand-gold"
            />
          </div>
        </div>
      </section>

      {/* 2. USP SECTION */}
      <section id="usp-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold block mb-3">
            Therapeutic Integrity
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-green">
            Pure Clothing, Engineered Clinically
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/80 border border-brand-beige/70 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-400 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-green/10 transition-colors">
                {usp.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                {usp.title}
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-sans">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section id="product-categories-section" className="bg-[#FAF8F5] py-24 border-y border-brand-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold block mb-3">
              Corporate Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-green">
              What We Make
            </h2>
            <p className="text-sm text-brand-dark/60 mt-3 font-sans">
              Our clinical organic structures are optimized exclusively for wholesale bulk distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Category Card 1: Kids Wear */}
            <motion.div
              id="category-card-kids"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white border border-brand-beige/70 rounded-3xl overflow-hidden shadow-md flex flex-col h-full group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/kids wear.webp"
                  alt="Naturally dyed kids wear organic collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-brand-beige px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
                  MOQ 1,000 Pcs
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green mb-3">
                    Kids Wear
                  </h3>
                  <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed font-sans mb-6">
                    Innerwear and everyday essentials — naturally dyed, soft on young skin, free from synthetic dyes that trigger allergies and rashes in children.
                  </p>
                </div>
                <div>
                  <button
                    id="explore-kids-wear-btn"
                    onClick={() => {
                      onChangePage('products');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="flex items-center gap-2.5 text-brand-gold font-semibold uppercase text-xs tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Explore Kids Wear</span>
                    <ArrowRight size={14} className="text-brand-gold" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Category Card 2: Women's Innerwear */}
            <motion.div
              id="category-card-womens"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white border border-brand-beige/70 rounded-3xl overflow-hidden shadow-md flex flex-col h-full group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/womens wear.webp"
                  alt="Women organic intimate garments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-brand-beige px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
                  MOQ 1,000 Pcs
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green mb-3">
                    Women's Innerwear
                  </h3>
                  <p className="text-sm sm:text-base text-brand-dark/70 leading-relaxed font-sans mb-6">
                    Bras and panties crafted from natural-fibre fabric, dyed with plant-based and herbal processes. No synthetic chemicals touching your most sensitive skin.
                  </p>
                </div>
                <div>
                  <button
                    id="explore-womens-inner-btn"
                    onClick={() => {
                      onChangePage('products');
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="flex items-center gap-2.5 text-brand-gold font-semibold uppercase text-xs tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Explore Women's Innerwear</span>
                    <ArrowRight size={14} className="text-brand-gold" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PROCESS PREVIEW */}
      <section id="process-preview-section" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold block mb-3">
            Pure Botanical Cycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-green">
            Three Core Manufacturing Pillars
          </h2>
          <p className="text-sm text-brand-dark/60 mt-3">From raw natural crop to therapeutic shielding fibers.</p>
        </div>

        {/* Horizontal 3-step timeline */}
        <div className="relative mt-20">
          
          {/* Animated connection line */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-brand-beige" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-beige shadow-sm flex items-center justify-center font-serif text-2xl font-bold text-brand-green mb-6 relative">
                1
                <div className="absolute inset-2 rounded-full border border-dashed border-brand-gold/40 animate-spin-[20s]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-green mb-3">
                Natural Fibre Base
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-sans">
                Sourced from certified mills, Dindigul
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-beige shadow-sm flex items-center justify-center font-serif text-2xl font-bold text-brand-green mb-6 relative">
                2
                <div className="absolute inset-2 rounded-full border border-dashed border-brand-green/40 animate-spin-[20s]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-green mb-3">
                Herbal Dye Process
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-sans">
                Plant-based dyes, no synthetic mordants
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-20 h-20 rounded-full bg-white border border-brand-beige shadow-sm flex items-center justify-center font-serif text-2xl font-bold text-brand-green mb-6 relative">
                3
                <div className="absolute inset-2 rounded-full border border-dashed border-brand-gold/40 animate-spin-[20s]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-green mb-3">
                Quality Finish
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed font-sans">
                Skin-safety checked before dispatch
              </p>
            </div>

          </div>
        </div>


      </section>

      {/* 5. CERTIFICATIONS SECTION */}
      <section id="certifications-section" className="bg-[#FAF8F5] py-24 border-t border-brand-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold block mb-3">
              Export Qualifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-green">
              Validated Global Certifications
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-brand-beige/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-green/30 flex flex-col items-center text-center"
              >
                <div className="w-full h-36 rounded-xl overflow-hidden mb-5 flex items-center justify-center bg-brand-bg">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-3"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-green mb-2">{cert.name}</h3>
                <p className="text-xs text-brand-dark/60 font-sans leading-relaxed">{cert.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNER CTA BANNER */}
      <section id="partner-cta-banner-section" className="relative bg-brand-green py-24 text-brand-beige overflow-hidden">
        {/* Ambient forest green design elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 pointer-events-none" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-brand-beige leading-tight"
          >
            Supplying to Boutiques, Wellness Retailers <br className="hidden md:inline" />and Export Buyers Worldwide
          </motion.h2>

          <p className="mt-4 text-brand-beige/80 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Ready to enhance your client's health and wellness indices through real botanical wardrobe solutions?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-brand-beige">MOQ 1000 Pcs</span>
              <span className="block text-xs uppercase tracking-wider text-brand-beige/70 font-mono mt-1">Per Category</span>
            </div>
            <div className="text-center border-y sm:border-y-0 sm:border-x border-white/10 py-4 sm:py-0">
              <span className="block text-2xl font-serif font-bold text-brand-beige">Private Label</span>
              <span className="block text-xs uppercase tracking-wider text-brand-beige/70 font-mono mt-1">Custom Pack & Specs</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-brand-beige">Global Shipping</span>
              <span className="block text-xs uppercase tracking-wider text-brand-beige/70 font-mono mt-1">Air/Sea Logistics</span>
            </div>
          </div>

          <div className="mt-12">
            <button
              id="banner-partner-cta-btn"
              onClick={() => {
                onChangePage('partner');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="px-10 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-green/45 cursor-pointer inline-flex items-center gap-2"
            >
              Become a Kapada Partner
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
