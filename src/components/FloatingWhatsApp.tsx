export default function FloatingWhatsApp() {
  return (
    <a
      id="global-floating-whatsapp"
      href="https://wa.me/916383619810?text=Hello%20Kapada%20B2B%20Team,%20we%20are%20interested%20in%20carrying%20your%20organic%20lines."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact Kapada B2B on WhatsApp"
    >
      {/* Ping ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/40 group-hover:scale-125 transition-transform duration-500 animate-ping" />

      {/* Official WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="28"
        height="28"
        className="relative z-10"
        fill="white"
        aria-hidden="true"
      >
        <path d="M24 4C12.954 4 4 12.954 4 24c0 3.615.974 7.01 2.673 9.94L4.05 43.23a1 1 0 0 0 1.22 1.22l9.29-2.622A19.908 19.908 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36c-3.27 0-6.35-.9-8.99-2.46l-.64-.38-6.63 1.87 1.87-6.63-.38-.64A15.955 15.955 0 0 1 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16zm8.81-11.65c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.84-2.36-1.42-1.26-2.38-2.82-2.66-3.3-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.38-.92-.78-.8-1.08-.82-.28-.02-.6-.02-.92-.02-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.5 2.04.8 2.74 1.02 1.15.36 2.2.31 3.03.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>

      {/* Hover label */}
      <span className="absolute right-16 bg-brand-dark text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
        WhatsApp B2B Desk
      </span>
    </a>
  );
}
