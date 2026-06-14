import { motion } from 'motion/react';
import { Wheat, Sparkles, Flower, Droplets, Sun, ShieldCheck } from 'lucide-react';
import { processSteps } from '../../data';

export default function OurProcessPage() {

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat': return <Wheat size={24} className="text-brand-green" />;
      case 'Sparkles': return <Sparkles size={24} className="text-brand-green" />;
      case 'Flower': return <Flower size={24} className="text-brand-green" />;
      case 'Droplets': return <Droplets size={24} className="text-brand-green" />;
      case 'Sun': return <Sun size={24} className="text-brand-green" />;
      default: return <ShieldCheck size={24} className="text-brand-green" />;
    }
  };

  return (
    <div id="our-process-page-container" className="pt-24 pb-20 text-brand-dark">
      
      {/* Page Header */}
      <section id="process-page-header" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
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
                The Botanical Chemistry Engine
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              From Plant to Fabric
            </h1>
            
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Every Kapada garment passes through a six-step natural dye process. No shortcuts. No synthetic substitutes at any stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6-Step Visual Timeline Section */}
      <section id="six-process-steps" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold block mb-2">
            RIGOROUS WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-green">
            The Kapada Process
          </h2>
          <p className="text-brand-dark/70 mt-3 font-sans max-w-xl mx-auto text-sm sm:text-base">
            A transparent six-step journey from raw organic fibres to certified chemical-free textiles.
          </p>
        </div>

        {/* 2 Column desktop / 1 column mobile layout */}
        <div className="space-y-24 relative">
          
          {/* Timeline center line graphic */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-brand-beige/60 -translate-x-1/2 z-0" />

          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                id={`process-step-${step.number}`}
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Visual Image container (column 1) */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group bg-white p-3 rounded-3xl border border-brand-beige/50 shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-brand-bg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Floating number pill */}
                    <div className="absolute top-6 left-6 bg-brand-dark text-brand-beige rounded-full w-12 h-12 flex items-center justify-center font-mono font-bold text-lg border-2 border-brand-beige shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Text description container (column 2) */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                      {getStepIcon(step.icon)}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold">
                      PILLAR {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed font-sans">
                    {step.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-800 font-semibold uppercase">
                      Green Chemistry Verified
                    </span>
                  </div>
                </div>

                {/* Desktop point indicator */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-bg border-4 border-brand-gold items-center justify-center shadow-md z-20 group-hover:bg-brand-green">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
