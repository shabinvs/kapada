import { motion } from 'motion/react';
import { ayurvedaShadesList } from '../../data';

export default function ColoursPage() {
  return (
    <div id="colours-page-container" className="pt-24 pb-20 text-brand-dark">

      {/* Hero Header */}
      <section id="colours-hero" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
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
                Ayurvastra Botanical Palette
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              Natural Colours
            </h1>

            <p className="text-brand-dark/70 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Every colour in our palette is derived from nature's pharmacy. Each dye source carries centuries of documented therapeutic benefits embedded into the fabric itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Palette count strip */}
      <div className="bg-brand-green py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8 text-brand-beige text-center">
          <div>
            <span className="block text-3xl font-serif font-bold">{ayurvedaShadesList.length}</span>
            <span className="text-xs uppercase tracking-widest font-mono text-brand-beige/70 mt-1 block">Natural Shades</span>
          </div>
          <div className="hidden sm:block w-px bg-brand-beige/20"></div>
          <div>
            <span className="block text-3xl font-serif font-bold">0</span>
            <span className="text-xs uppercase tracking-widest font-mono text-brand-beige/70 mt-1 block">Synthetic Dyes</span>
          </div>
          <div className="hidden sm:block w-px bg-brand-beige/20"></div>
          <div>
            <span className="block text-3xl font-serif font-bold">100%</span>
            <span className="text-xs uppercase tracking-widest font-mono text-brand-beige/70 mt-1 block">Plant Based</span>
          </div>
        </div>
      </div>

      {/* Colours Grid */}
      <section id="colours-grid-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ayurvedaShadesList.map((shade, i) => (
            <motion.div
              key={shade.name}
              id={`colour-card-${shade.name.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-beige/50 flex flex-col group"
            >
              {/* Colour swatch */}
              <div
                className="h-40 w-full flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  backgroundColor: shade.colorHex,
                  border: shade.borderHex ? `1px solid ${shade.borderHex}` : undefined,
                }}
              >
                {/* Number badge */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.15)',
                    color: shade.textColorHex ?? '#fff',
                  }}
                >
                  #{String(i + 1).padStart(2, '0')}
                </span>

                <span
                  className="font-serif text-4xl font-bold tracking-wider uppercase opacity-95 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                  style={{ color: shade.textColorHex ?? '#fff' }}
                >
                  {shade.name}
                </span>
              </div>

              {/* Card body */}
              <div className="p-7 flex-1 flex flex-col gap-4">
                {/* Source label */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: shade.colorHex }}></div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-0.5">Herb Source</span>
                    <span className="text-sm font-semibold text-brand-dark font-sans">{shade.herbSource}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-brand-beige/60"></div>

                {/* Benefits */}
                <p className="text-sm font-sans text-brand-dark/75 leading-relaxed">
                  {shade.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
