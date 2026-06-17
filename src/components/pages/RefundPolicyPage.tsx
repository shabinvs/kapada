import { motion } from 'motion/react';
import { RefreshCw, XCircle, CheckCircle, ClipboardList, Banknote, Phone } from 'lucide-react';

const sections = [
  {
    icon: <CheckCircle className="w-5 h-5 text-brand-gold" />,
    title: 'Eligibility for Returns',
    content: [
      'Kapada accepts return or replacement requests only in cases where the goods received are defective, damaged during transit, or significantly different from the confirmed order specifications (style, colour, size, quantity).',
      'All claims must be raised within 7 days of delivery with supporting photographic or video evidence of the issue.',
      'Returns are not accepted for reasons of buyer\'s remorse, change of mind, or minor natural colour variations inherent to the herbal dyeing process. As a natural dye-based product, slight shade variations between batches are expected and do not constitute a defect.',
    ],
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-brand-gold" />,
    title: 'Return Process',
    content: [
      'Step 1: Contact us via WhatsApp (+91 6383619810) or email within 7 days of delivery with your order details and photographic evidence of the defect or discrepancy.',
      'Step 2: Our quality assurance team will review the claim within 3–5 business days and respond with a resolution — either replacement, partial credit, or refund.',
      'Step 3: If a return is approved, we will provide instructions for shipping the goods back to our facility. Return shipping costs for approved claims are borne by Kapada.',
      'Step 4: Upon receipt and inspection of returned goods, we will process the agreed resolution within 7 business days.',
    ],
  },
  {
    icon: <XCircle className="w-5 h-5 text-brand-gold" />,
    title: 'Non-Returnable Items',
    content: [
      'Customised or private-label orders (with buyer\'s branding, custom colours, or bespoke specifications) are non-returnable unless they arrive defective.',
      'Sample orders are non-refundable.',
      'Products that have been used, washed, or altered in any way after delivery are not eligible for return.',
      'Orders for which the claim is raised beyond the 7-day window are not eligible for return consideration.',
    ],
  },
  {
    icon: <Banknote className="w-5 h-5 text-brand-gold" />,
    title: 'Refund Policy',
    content: [
      'Refunds are issued only when a replacement is not feasible due to production constraints or stock unavailability, or when mutually agreed upon by both parties.',
      'Advance payments (deposits) are non-refundable once production has commenced. In the event of a cancellation before production begins, a 10% administrative charge will be deducted from any refund.',
      'Approved refunds are processed to the original payment method (bank transfer or UPI) within 10–14 business days of approval.',
      'International buyers: Refunds will be processed in the original currency at the exchange rate prevailing on the day of the transaction. Kapada is not responsible for exchange rate fluctuations.',
    ],
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-brand-gold" />,
    title: 'Cancellations',
    content: [
      'Orders can be cancelled without penalty within 24 hours of placing and confirming the order.',
      'Cancellations after 24 hours but before production begins are subject to a 10% administrative fee on the total order value.',
      'Cancellations after production has commenced are not eligible for refund. In such cases, partial credit may be considered at Kapada\'s sole discretion.',
    ],
  },
  {
    icon: <Phone className="w-5 h-5 text-brand-gold" />,
    title: 'Raise a Claim',
    content: [
      'To initiate a return or refund claim, please contact us directly:',
      '📞 +91 6383619810 (WhatsApp preferred for faster response)',
      '📍 Dindigul / Coimbatore, Tamil Nadu, India',
      'Our team handles all claims with care and aims to resolve every issue fairly and promptly.',
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <div id="refund-policy-page" className="pt-24 pb-20 text-brand-dark">

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
              Refund Policy
            </h1>
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Fair, transparent, and straightforward. Here's everything you need to know about returns, refunds, and cancellations.
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
              id={`refund-section-${i}`}
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
          Kapada's Refund Policy is designed to protect both our partners and our manufacturing commitments. We appreciate your understanding and continued partnership.
        </p>
      </section>

    </div>
  );
}
