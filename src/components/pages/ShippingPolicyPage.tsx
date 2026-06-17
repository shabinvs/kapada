import { motion } from 'motion/react';
import { Truck, Clock, Globe, Package, AlertCircle, Phone } from 'lucide-react';

const sections = [
  {
    icon: <Globe className="w-5 h-5 text-brand-gold" />,
    title: 'Shipping Scope',
    content: [
      'Kapada ships B2B bulk orders across India and internationally to select regions including the Middle East, South-East Asia, Europe, and North America.',
      'All shipping arrangements for bulk/wholesale orders are handled directly through our logistics partners. Specific courier selection depends on destination, order volume, and lead time.',
      'For domestic orders within India, we work with reliable freight partners to ensure safe and timely delivery of your consignment.',
    ],
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-gold" />,
    title: 'Lead Times & Processing',
    content: [
      'Standard Production Lead Time: 3–6 weeks from confirmed order and advance payment, depending on the quantity and colour variants selected.',
      'Custom Colour / Dyeing Requests: May require an additional 1–2 weeks for dye sampling and client approval before production commences.',
      'Once dispatched, domestic shipping typically takes 3–7 business days. International freight timelines vary by destination and Incoterm agreed upon.',
      'Orders are only dispatched after receipt of the agreed advance payment percentage as stipulated in the proforma invoice.',
    ],
  },
  {
    icon: <Package className="w-5 h-5 text-brand-gold" />,
    title: 'Packaging Standards',
    content: [
      'All Kapada products are packed using eco-conscious, minimal-plastic packaging in line with our sustainability values.',
      'Garments are folded and packed in breathable poly-bags, then placed in sturdy export cartons suitable for freight handling.',
      'Custom branded packaging (labels, hang tags, polybags with your brand) is available for eligible B2B partners — inquire at the time of order confirmation.',
      'Kapada is not responsible for customs duties, import taxes, or clearance delays at the destination country. These are the buyer\'s responsibility.',
    ],
  },
  {
    icon: <Truck className="w-5 h-5 text-brand-gold" />,
    title: 'Freight Terms & Incoterms',
    content: [
      'All B2B export orders are typically shipped on EXW (Ex-Works) or FOB (Free On Board) terms unless otherwise agreed in writing.',
      'The buyer is responsible for arranging and bearing the cost of freight, insurance, and customs clearance unless a different Incoterm is agreed in the proforma invoice.',
      'For domestic bulk orders within India, freight charges are calculated based on weight, volume, and destination pincode, and will be communicated before dispatch.',
    ],
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-brand-gold" />,
    title: 'Delays & Force Majeure',
    content: [
      'Kapada will communicate proactively if there are any production or shipping delays beyond the quoted lead time.',
      'We are not liable for delays caused by events beyond our reasonable control, including but not limited to natural disasters, port strikes, customs clearance delays, or force majeure events.',
      'Kapada will work in good faith to minimise the impact of any such delays on your business.',
    ],
  },
  {
    icon: <Phone className="w-5 h-5 text-brand-gold" />,
    title: 'Shipping Queries',
    content: [
      'For shipping quotes, freight arrangements, or tracking information, please reach out to us directly:',
      '📞 +91 6383619810',
      '📍 Dindigul / Coimbatore, Tamil Nadu, India',
      'Our logistics team responds to shipping queries within 2 business days.',
    ],
  },
];

export default function ShippingPolicyPage() {
  return (
    <div id="shipping-policy-page" className="pt-24 pb-20 text-brand-dark">

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
              Shipping Policy
            </h1>
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Transparent, reliable, and sustainability-conscious logistics for B2B partners worldwide.
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
              id={`shipping-section-${i}`}
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
          Shipping terms are subject to revision. Any changes will be communicated to active partners before taking effect.
        </p>
      </section>

    </div>
  );
}
