import { motion } from 'motion/react';
import { FileText, ShoppingBag, AlertTriangle, Scale, Globe, MessageSquare } from 'lucide-react';

const sections = [
  {
    icon: <FileText className="w-5 h-5 text-brand-gold" />,
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the Kapada website (thekapada.com), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website.',
      'These Terms apply to all visitors, B2B partners, wholesale buyers, and any other individuals who access or use our website.',
      'Kapada reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date.',
    ],
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-brand-gold" />,
    title: 'Products & B2B Orders',
    content: [
      'Kapada is a B2B-first brand manufacturing naturally dyed kids wear and women\'s innerwear. All products are made using herbal and plant-based dyes with zero synthetic chemicals in the dye chain.',
      'All product inquiries and orders submitted through our website are subject to availability, minimum order quantities (MOQ), and Kapada\'s production schedule.',
      'Product descriptions, colour representations, and specifications are provided in good faith. Minor variations in colour between digital displays and actual products may occur due to the natural dye process.',
      'Kapada reserves the right to reject any order or inquiry at its discretion without obligation to provide a reason.',
    ],
  },
  {
    icon: <Globe className="w-5 h-5 text-brand-gold" />,
    title: 'Intellectual Property',
    content: [
      'All content on this website — including text, images, logos, design elements, and branding — is the intellectual property of Kapada and is protected under applicable copyright and trademark laws.',
      'You may not reproduce, distribute, modify, or create derivative works from any content on this website without prior written permission from Kapada.',
      'The Kapada name, logo, and tagline "Naturally Dyed. Skin Safe. Sustainably Made." are proprietary marks.',
    ],
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-brand-gold" />,
    title: 'Limitation of Liability',
    content: [
      'Kapada\'s website is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, about the accuracy, reliability, or availability of the site or its content.',
      'Kapada shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website, including but not limited to loss of profits, data, or goodwill.',
      'Our maximum liability for any claim arising from these Terms shall not exceed the value of the specific order in question.',
    ],
  },
  {
    icon: <Scale className="w-5 h-5 text-brand-gold" />,
    title: 'Governing Law & Disputes',
    content: [
      'These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website or any transactions conducted through Kapada shall be subject to the exclusive jurisdiction of courts located in Dindigul, Tamil Nadu, India.',
      'We encourage resolution of disputes through good-faith communication before initiating any legal proceedings.',
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-brand-gold" />,
    title: 'Contact & Queries',
    content: [
      'If you have any questions about these Terms & Conditions, please contact us:',
      '📞 +91 6383619810',
      '📍 Dindigul / Coimbatore, Tamil Nadu, India',
      'We aim to respond to all legal queries within 7 business days.',
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <div id="terms-conditions-page" className="pt-24 pb-20 text-brand-dark">

      {/* Hero Header */}
      <section className="relative bg-[#FDFBF7] py-24 sm:py-32 overflow-hidden border-b border-brand-beige/50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-mono font-bold">
                Legal
              </span>
              <div className="h-px w-8 sm:w-16 bg-brand-gold/60" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif font-bold text-brand-green leading-[1.1] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Please read these terms carefully before using our website or engaging in any business with Kapada.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              id={`terms-section-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white border border-brand-beige/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-brand-green">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((para, j) => (
                  <li key={j} className="text-sm sm:text-base text-brand-dark/70 leading-relaxed font-sans flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold/60 flex-shrink-0" />
                    <span>{para}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-brand-dark/40 font-sans">
          These Terms & Conditions were last reviewed in June 2025. Kapada reserves the right to update these terms at any time. Continued use of this website constitutes acceptance of any revised terms.
        </p>
      </section>

    </div>
  );
}
