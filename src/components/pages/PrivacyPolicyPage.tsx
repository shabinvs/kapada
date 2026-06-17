import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, Bell, Mail } from 'lucide-react';

const sections = [
  {
    icon: <Eye className="w-5 h-5 text-brand-gold" />,
    title: 'Information We Collect',
    content: [
      'When you visit our website or submit a B2B inquiry, we may collect personal information such as your name, company name, email address, WhatsApp number, country, and order details.',
      'We also automatically collect non-personal data such as browser type, IP address, pages visited, and time spent on pages through standard web analytics tools. This data is used solely to improve your browsing experience.',
      'We do not collect payment information directly — all transactions, if any, are handled through secure third-party processors.',
    ],
  },
  {
    icon: <Database className="w-5 h-5 text-brand-gold" />,
    title: 'How We Use Your Information',
    content: [
      'To respond to B2B inquiries and partnership applications submitted through our website.',
      'To communicate with you about your order, sample request, or any business collaboration.',
      'To improve our website functionality, design, and content based on aggregated analytics.',
      'To send you relevant updates about Kapada products, collections, or industry insights — only if you have opted in. You may unsubscribe at any time.',
    ],
  },
  {
    icon: <Shield className="w-5 h-5 text-brand-gold" />,
    title: 'Data Protection & Security',
    content: [
      'Kapada takes data security seriously. We implement industry-standard SSL encryption for all data transmissions on our website.',
      'Your personal information is stored on secure servers and is accessible only to authorised Kapada personnel who need it to carry out their responsibilities.',
      'We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (such as logistics partners or email platforms) solely for business operations, under strict confidentiality agreements.',
    ],
  },
  {
    icon: <Lock className="w-5 h-5 text-brand-gold" />,
    title: 'Cookies & Tracking',
    content: [
      'Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and analyse site traffic.',
      'You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the website.',
      'We do not use cookies to track you across third-party websites.',
    ],
  },
  {
    icon: <Bell className="w-5 h-5 text-brand-gold" />,
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete any personal data we hold about you.',
      'You may withdraw your consent for marketing communications at any time by contacting us at the details below.',
      'If you believe your data has been mishandled, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.',
    ],
  },
  {
    icon: <Mail className="w-5 h-5 text-brand-gold" />,
    title: 'Contact Us',
    content: [
      'For any privacy-related concerns, data access requests, or to exercise your rights, please reach out to us:',
      '📞 +91 6383619810',
      '📍 Dindigul / Coimbatore, Tamil Nadu, India',
      'We aim to respond to all privacy-related queries within 5 business days.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div id="privacy-policy-page" className="pt-24 pb-20 text-brand-dark">

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
              Privacy Policy
            </h1>
            <p className="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Your trust is the foundation of everything we do. Here's exactly how Kapada collects, uses, and protects your data.
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
              id={`privacy-section-${i}`}
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
          This Privacy Policy applies to the Kapada website and associated business communications. It may be updated from time to time — continued use of the website implies acceptance of any changes.
        </p>
      </section>

    </div>
  );
}
