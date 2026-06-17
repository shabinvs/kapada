export type ActivePage = 'home' | 'products' | 'colours' | 'story' | 'process' | 'partner' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: 'kids' | 'womens';
  image: string;
  description: string;
  specs: string[];
  moq: string;
}

export interface AyurvedaShade {
  name: string;
  herbSource: string;
  benefits: string;
  colorHex: string;
  textColorHex?: string;
  borderHex?: string;
}

export interface PartnerInquiry {
  fullName: string;
  companyName: string;
  country: string;
  productCategory: string;
  estimatedOrderQuantity: string;
  whatsApp: string;
  email: string;
  message: string;
}
