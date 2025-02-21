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
  nombre: string;
  correo: string;
  telefono: string;
  interes: 'brakes' | 'tires' | 'clutches' | 'general';
  mensaje: string;
}