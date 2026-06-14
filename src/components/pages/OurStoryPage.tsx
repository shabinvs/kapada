import { motion } from 'motion/react';
import { Landmark, Quote, ArrowRight, Award, Stethoscope, Microscope, Sparkles, Send } from 'lucide-react';
import { founderTimeline } from '../../data';
import { ActivePage } from '../../types';

interface OurStoryPageProps {
  onChangePage: (page: ActivePage) => void;
}

export default function OurStoryPage({ onChangePage }: OurStoryPageProps) {
  
  const iconMap = (title: string) => {
    if (title.includes("Clinical")) return <Stethoscope className="text-brand-gold w-6 h-6" />;
    if (title.includes("Research")) return <Microscope className="text-brand-gold w-6 h-6" />;
    if (title.includes("Discovery")) return <Sparkles className="text-brand-gold w-6 h-6" />;
    return <Landmark className="text-brand-gold w-6 h-6" />;
  };

  return (
    <div id="our-story-page-container" className="pt-24 pb-20 text-brand-dark">
      
      {/* Editorial Headline Header */}
      <section id="our-story-header" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
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
                Empathetic Genesis Story
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              Our Story
            </h1>
            
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Discover how pediatric dentistry merged with botanical chemistry to solve a silent epidemic of synthetic textile sensitivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main storyteller layout */}
      <section id="founder-story-editorial" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-semibold block mb-4">
            Message from Dr. Mohammed Tahir
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-green leading-tight mb-8">
            Why a Dentist Built a Clothing Brand
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-brand-dark/80 leading-relaxed font-sans">
            <p>
              Dr. Mohammed Tahir spent over a decade in clinical practice watching patients present with skin conditions, allergic reactions, and sensitivities that had nothing to do with what they ate or touched — but everything to do with what they wore.
            </p>
            <p>
              As a dental professional trained in the science of biocompatibility — the study of how materials interact with living tissue — Dr. Tahir became increasingly aware of what most consumers never think about: the chemicals in their clothing.
            </p>
            <p>
              Synthetic dyes. Azo compounds. Formaldehyde-based fabric finishes. These are not abstract concerns. They are absorbed through skin — the body's largest organ — every single day.
            </p>
            <p>
              The decision to act came when he started looking for truly chemical-free innerwear for his own family. What he found was a market full of 'natural' claims with no substance behind them.
            </p>
            <div className="pt-8 pb-4">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-brand-green italic tracking-wide relative inline-block">
                <span className="relative z-10">Kapada was built to close that gap.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-gold/30 -z-0 transform -skew-x-12 transition-all duration-500 hover:h-full hover:bottom-0"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-1">
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed font-sans">
              Manufactured in Dindigul, Tamil Nadu — Kapada produces naturally dyed kids wear and women's innerwear using herbal and plant-based dye processes, with zero synthetic chemicals in the dye chain.
            </p>
            
            <div className="relative bg-brand-green/5 p-8 rounded-2xl border-l-4 border-brand-green italic text-brand-green text-xl sm:text-2xl font-serif shadow-sm font-medium">
              <Quote className="absolute top-6 left-4 text-brand-green/20 w-8 h-8" />
              "This is not wellness marketing. This is a medical professional's standard applied to what you wear."
            </div>

            {/* Founder signature block */}
            <div className="pt-8 border-t border-brand-beige flex items-center gap-6">
              <div>
                <span className="block font-serif text-xl font-bold text-brand-green">— Dr. Mohammed Tahir</span>
                <span className="block text-xs uppercase tracking-widest text-brand-gold font-mono mt-1">Founder, Kapada</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-2 lg:order-2">
            <div className="bg-[#FAF8F5] p-3 rounded-3xl border border-brand-beige/50 shadow-md">
              <img
                src="/Founder image.png"
                alt="Dr. Mohammed Tahir, Founder of Kapada"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-inner filter grayscale-[25%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Story call to action banner */}
      <section id="story-partner-cta" className="py-20 text-center max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-serif font-bold text-brand-green">
          Elevate Your Brand's Ethical Purity Index
        </h3>
        <p className="text-sm text-brand-dark/70 mt-3 max-w-2xl mx-auto font-sans">
          Incorporate physical herbal fabrics into your baby capsule or premium underwear lines today. Explore custom licensing.
        </p>
        <button
          onClick={() => {
            onChangePage('partner');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          className="mt-8 px-8 py-3.5 bg-brand-green hover:bg-brand-green/90 text-brand-beige text-xs font-bold uppercase tracking-widest rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2 shadow-sm"
        >
          Begin B2B Assessment
          <ArrowRight size={14} />
        </button>
      </section>

    </div>
  );
}
