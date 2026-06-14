import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Globe, Award, Sparkles, Send, ShieldCheck, 
  HelpCircle, ShoppingBag, Landmark, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { b2bAudienceCards, moqTableList, certifications } from '../../data';
import { PartnerInquiry } from '../../types';

// Zod Schema matching requirements
const inquirySchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  country: z.string().min(2, "Please state your target dispatch country"),
  productCategory: z.string().min(1, "Please select your primary product focus"),
  estimatedOrderQuantity: z.string().min(1, "Estimated order size is required"),
  whatsApp: z.string().min(6, "Provide WhatsApp number for real-time B2B draft updates"),
  email: z.string().email("A valid commercial email address is required"),
  message: z.string().min(10, "Please outline your packaging and specification needs"),
});

export default function PartnerWithUsPage() {
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState<PartnerInquiry | null>(null);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<PartnerInquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      country: '',
      productCategory: '',
      estimatedOrderQuantity: '',
      whatsApp: '',
      email: '',
      message: '',
    }
  });

  // Pull from session storage context if the user requested a quote from the products page
  useEffect(() => {
    const preset = sessionStorage.getItem('inquiry_product_preset');
    if (preset) {
      setValue('productCategory', preset);
      setValue('message', `Regarding carrying your ${preset} lines under B2B wholesale rates. We wish to inquire about available natural herbal shades and bulk custom label integration options...`);
      sessionStorage.removeItem('inquiry_product_preset'); // Consume
    }
  }, [setValue]);

  const onSubmitForm = (data: PartnerInquiry) => {
    setSubmittedData(data);
    setIsSuccessToastVisible(true);
    
    // Auto clear success toast after 6 seconds
    setTimeout(() => {
      setIsSuccessToastVisible(false);
    }, 6000);
  };

  return (
    <div id="partner-page-container" className="pt-24 pb-20 text-brand-dark">
      
      {/* Hero Section */}
      <section id="partner-hero" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
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
                Export Hub & Global Supply
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              B2B Supply Partnership
            </h1>
            
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Acquire certified clean-chemical organic garments manufactured inside our licensed zero-waste Gujarat facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Toast Overlay */}
      <AnimatePresence>
        {isSuccessToastVisible && (
          <motion.div
            id="success-toast-overlay"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-10 left-6 right-6 md:left-auto md:right-10 z-50 bg-[#E8EFE9] border-2 border-emerald-700/55 p-6 rounded-lg shadow-xl max-w-sm"
          >
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-full bg-emerald-800 text-[#FAF7F2]">
                <CheckCircle2 size={20} />
              </div>
              <div className="space-y-1.5 text-emerald-950 font-sans mt-0.5">
                <p className="text-sm font-medium leading-relaxed">
                  Thank you. We will contact you within 24 hours.
                </p>
              </div>
            </div>
            
            <button
              id="close-toast-btn"
              onClick={() => setIsSuccessToastVisible(false)}
              className="absolute top-3 right-3 text-emerald-800/60 hover:text-emerald-900 font-bold font-mono text-xs cursor-pointer focus:outline-none"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 space-y-12 sm:space-y-28">

        {/* 1. Who We Supply To */}
        <section id="who-we-supply-to">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold block mb-2">
              AUDIENCE CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-green">
              Who We Partner With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2bAudienceCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brand-beige/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    <Building2 size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-green mb-2">{card.title}</h3>
                  <p className="text-xs text-brand-dark/70 leading-relaxed font-sans">{card.description}</p>
                </div>
                
                <div className="pt-4 border-t border-brand-bg text-[10px] uppercase font-mono tracking-wider text-brand-gold flex items-center gap-1.5 mt-4">
                  <span>Custom Contract Ready</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. MOQ Table Section */}
        <section id="moq-framework" className="bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-brand-beige">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            
            <div className="w-full lg:w-2/5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold block">
                EXPORT TRANSPARENCY
              </span>
              <h2 className="text-3xl font-serif font-bold text-brand-green">
                Our MOQ Framework
              </h2>
              <p className="text-sm text-brand-dark/70 font-sans leading-relaxed">
                To guarantee strict botanical purity, raw herbal vat heating, and sun shade curing, we restrict production to specific batch minimums. Custom dye formulas have a separate development schedule.
              </p>
            </div>

            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-2xl border border-brand-beige/80 overflow-hidden shadow-sm">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-green text-brand-beige border-b border-brand-beige font-mono uppercase tracking-widest text-xs">
                      <th className="px-6 py-4.5 font-bold">Product Category</th>
                      <th className="px-6 py-4.5 font-bold">Minimum Order Quantity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-beige/50">
                    {moqTableList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-brand-green/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-brand-green">{row.category}</td>
                        <td className="px-6 py-4 font-mono font-semibold text-brand-gold uppercase">{row.moq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>


        {/* 3b. Private Label Manufacturing Banner */}
        <section id="private-label-manufacturing" className="relative bg-brand-green rounded-3xl overflow-hidden py-14 px-8 sm:px-14">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-mono font-bold block mb-4">
              Private Label Manufacturing
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-beige leading-snug mb-4">
              Your Brand. Our Process.
            </h2>
            <p className="text-brand-beige/80 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
              We offer full private label manufacturing — your brand, our process. MOQ applies per category. Woven labels, hang tags, and custom packaging available. Inquire below for private label terms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Woven Labels", "Custom Hang Tags", "Private Packaging", "MOQ Per Category"].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-brand-beige/90 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3c. Certifications Section — same design as homepage */}
        <section id="partner-certifications" className="bg-[#FAF8F5] py-16 rounded-3xl border border-brand-beige/50">
          <div className="px-8 sm:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-mono font-bold block mb-3">
                Export Qualifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-green">
                Our Certifications
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-4" />
              <p className="mt-4 text-sm text-brand-dark/60 font-sans">
                Kapada's natural dye process is backed by four recognised certifications. Full documentation available on request.
              </p>
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

        {/* 4. Inquiry Form with React Hook Form + Zod validation */}
        <section id="b2b-inquiry-form-section" className="bg-white p-8 sm:p-12 max-w-4xl mx-auto relative">
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-brand-green uppercase tracking-wide border-b border-brand-green/20 pb-4">
              B2B INQUIRY FORM
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('fullName')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.fullName.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('companyName')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.companyName && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.companyName.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  COUNTRY
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('country')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.country && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.country.message}</p>
                )}
              </div>

              {/* Product Category */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  PRODUCT CATEGORY OF INTEREST
                </label>
                <select
                  {...register('productCategory')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                >
                  <option value="">[To be filled by visitor]</option>
                  <option value="Women's Panties / Briefs">Women's Panties / Briefs</option>
                  <option value="Kids Inner Vest">Kids Inner Vest</option>
                  <option value="Women's Bra">Women's Bra</option>
                  <option value="Kids Inner Shorts / Briefs">Kids Inner Shorts / Briefs</option>
                </select>
                {errors.productCategory && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.productCategory.message}</p>
                )}
              </div>

              {/* Estimated Order Quantity */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  ESTIMATED ORDER QUANTITY
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('estimatedOrderQuantity')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.estimatedOrderQuantity && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.estimatedOrderQuantity.message}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  WHATSAPP NUMBER
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('whatsApp')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.whatsApp && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.whatsApp.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="[To be filled by visitor]"
                  {...register('email')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.email && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-green mb-1">
                  MESSAGE / ADDITIONAL REQUIREMENTS
                </label>
                <input
                  type="text"
                  placeholder="[To be filled by visitor]"
                  {...register('message')}
                  className="w-full py-2 bg-transparent border-0 border-b border-brand-green focus:border-brand-green focus:ring-0 outline-none italic text-brand-dark/70 text-sm"
                />
                {errors.message && (
                  <p className="text-xs text-rose-700 mt-1.5">{errors.message.message}</p>
                )}
              </div>

            </div>

            {/* Submit button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-brand-green text-white text-sm font-bold rounded hover:bg-brand-green/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>

          </form>

        </section>

      </div>

    </div>
  );
}
