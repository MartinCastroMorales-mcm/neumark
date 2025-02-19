export interface Product {
  id: string;
  name: string;
  category: 'brakes' | 'tires' | 'clutches';
  type: 'maestranza' | 'taxibus';
  description: string;
  imageUrl: string;
  features: string[];
}

export interface LeadForm {
  name: string;
  email: string;
  phone: string;
  interest: 'brakes' | 'tires' | 'clutches' | 'general';
  message: string;
}