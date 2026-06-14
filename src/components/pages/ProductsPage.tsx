import { motion } from 'motion/react';
import { ShieldAlert, Layers, Sprout, ShoppingBag, Eye, HelpCircle } from 'lucide-react';
import { ActivePage, Product } from '../../types';
import { productsList } from '../../data';

interface ProductsPageProps {
  onChangePage: (page: ActivePage) => void;
}

export default function ProductsPage({ onChangePage }: ProductsPageProps) {
  
  const handleRequestQuote = (productName: string) => {
    // Save in session storage to auto-fill category or message on partner page
    sessionStorage.setItem('inquiry_product_preset', productName);
    onChangePage('partner');
    
    // Quick timeout to allow target page to render, then scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('b2b-inquiry-form-section');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }, 100);
  };

  return (
    <div id="products-page-container" className="pt-24 pb-20 text-brand-dark">
      {/* Products Page Hero Header */}
      <section id="products-hero" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-mono font-bold">
                B2B Wholesale Specifications
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              Our Products
            </h1>
            
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              All Kapada garments are manufactured in Dindigul using natural-fibre base fabrics and herbal dye processes. Zero synthetic dyes. Zero toxic chemicals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Layout of products */}
      <section id="products-grid-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {productsList.map((product) => (
            <motion.div
              id={`product-card-${product.id}`}
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white border border-brand-beige/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                
                
              </div>

              {/* Product Body */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-brand-dark/75 leading-relaxed font-sans mb-6">
                    {product.description}
                  </p>

                  {/* Specifications Strip list */}
                  <div className="mb-8 bg-[#FDFBF7] p-5 rounded-xl border border-brand-beige/50">
                    <ul className="space-y-4 text-sm text-[#4A5D5E] font-sans">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3B5F4A] flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer CTAs */}
                <div className="pt-6 border-t border-brand-bg mt-auto">
                  <button
                    id={`request-quote-btn-${product.id}`}
                    onClick={() => handleRequestQuote(product.name)}
                    className="w-full py-4 bg-brand-gold hover:bg-[#C2A36B] text-brand-dark font-bold uppercase text-sm tracking-[0.2em] rounded-xl transition-all duration-300 text-center cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Request Quote & Sample
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
}
