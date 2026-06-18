import { motion } from 'motion/react';
import { 
  MapPin, Mail, Phone, MessageSquare, Instagram, 
  Facebook, Landmark, Clock, ArrowRight, CornerDownRight 
} from 'lucide-react';

export default function ContactPage() {
  
  const contactCards = [
    {
      title: "Commercial wholesales",
      subtitle: "B2B client onboarding & contracts",
      email: "Info@thekapada.com",
      phone: "+91 6383619810"
    },
    {
      title: "Technical Dermal Lab",
      subtitle: "Special testing & certification files",
      email: "Info@thekapada.com",
      phone: "+91 6383619810"
    },
    {
      title: "Logistics Desk",
      subtitle: "Customs clearings & shipping tracking",
      email: "Info@thekapada.com",
      phone: "+91 6383619810"
    }
  ];

  return (
    <div id="contact-page-container" className="pt-24 pb-20 text-brand-dark">
      
      {/* Contact Hero */}
      <section id="contact-hero" className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
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
                Global Corporate Channels
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60"></div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              Get In Touch
            </h1>

            <p className="text-brand-dark/70 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
              Reach our team directly for B2B inquiries, export coordination, and wholesale partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main interactive grid */}
      <section id="contact-main-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold block">
              OFFICES & REPRESENTATIVES
            </span>
            <h2 className="text-3xl font-serif font-bold text-brand-green">
              Headquarters and Liaison desks
            </h2>
            <p className="text-sm text-brand-dark/75 leading-relaxed font-sans">
              Depending on your location, you may reach our manufacturing plant directly or consult with our advisory board.
            </p>

            <div className="space-y-6">
              
              {/* Contact Table */}
              <div className="bg-white border border-brand-beige/80 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm font-sans">
                  <tbody className="divide-y divide-brand-beige/50">
                    <tr className="bg-[#F8F5EE]">
                      <td className="px-6 py-4 font-bold text-brand-green w-1/3">Brand</td>
                      <td className="px-6 py-4 text-brand-dark">Kapada</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-bold text-brand-green">Address</td>
                      <td className="px-6 py-4 text-brand-dark">Dindigul, Tamil Nadu</td>
                    </tr>
                    <tr className="bg-[#F8F5EE]">
                      <td className="px-6 py-4 font-bold text-brand-green">Email</td>
                      <td className="px-6 py-4 text-brand-dark">[ Info@thekapada.com ]</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-bold text-brand-green">Phone</td>
                      <td className="px-6 py-4 text-brand-dark">[ +91 6383619810 ]</td>
                    </tr>
                    <tr className="bg-[#F8F5EE]">
                      <td className="px-6 py-4 font-bold text-brand-green">WhatsApp</td>
                      <td className="px-6 py-4 text-brand-dark">[ +91 6383619810 ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Social Channels Link Cards */}
              <div className="bg-white border border-brand-beige/80 rounded-2xl p-6 shadow-sm">
                <span className="block text-[10px] uppercase font-mono text-brand-gold font-bold tracking-wider mb-4">
                  DIGITAL COMPLIANCE NETWORKS
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/kapadaindiaofficial?igsh=MWM1d2k2N3VsYmczcQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-bg hover:bg-brand-green hover:text-brand-beige text-brand-dark px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 w-full justify-center"
                  >
                    <Instagram size={14} />
                    <span>Instagram</span>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/share/18jFTpQhz7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-bg hover:bg-brand-green hover:text-brand-beige text-brand-dark px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 w-full justify-center"
                  >
                    <Facebook size={14} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed Placeholder (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <span className="text-xs uppercase tracking-widest text-brand-gold font-mono font-bold block">
              COORDINATES & LOGISTICS ROUTES
            </span>

            {/* Google Map Integration */}
            <div className="border border-brand-beige rounded-3xl shadow-md h-[450px] relative overflow-hidden bg-brand-bg">
              <iframe 
                src="https://maps.google.com/maps?q=Dindigul,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Dindigul, Tamil Nadu Location"
              ></iframe>
            </div>



          </div>

        </div>
      </section>



    </div>
  );
}
