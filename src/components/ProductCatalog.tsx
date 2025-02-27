import React, { useState } from 'react';
import { Car, Disc, CircleDot, Wrench, Bus } from 'lucide-react';
import type { Product } from '../types';
import Welcome from './Welcome';

const products: Product[] = [
  {
    id: '1',
    name: 'Sistema de Frenos Premium',
    category: 'brakes',
    type: 'maestranza',
    description: 'Sistema completo de frenos de alta calidad para máximo rendimiento y seguridad.',
    imageUrl: './assets/frenos.avif',
    features: ['Pastillas cerámicas', 'Discos ventilados', 'Kit de instalación incluido']
  },
  {
    id: '2',
    name: 'Neumáticos Todo Terreno',
    category: 'tires',
    type: 'maestranza',
    description: 'Neumáticos resistentes diseñados para todo tipo de superficies.',
    imageUrl: './assets/neumaticos_todo_terreno.avif',
    features: ['Alta durabilidad', 'Excelente tracción', 'Bajo nivel de ruido']
  },
  {
    id: '3',
    name: 'Kit de Embrague Profesional',
    category: 'clutches',
    type: 'taxibus',
    description: 'Sistema de embrague completo para taxibuses, diseñado para uso intensivo.',
    imageUrl: './assets/buses.avif',
    features: ['Disco de alta resistencia', 'Plato de presión reforzado', 'Rodamiento incluido']
  }
];

const CategoryIcon = ({ category }: { category: Product['category'] }) => {
  switch (category) {
    case 'brakes':
      return <Disc className="w-6 h-6" />;
    case 'tires':
      return <CircleDot className="w-6 h-6" />;
    case 'clutches':
      return <Car className="w-6 h-6" />;
  }
};

export function ProductCatalog() {
  const [activeType, setActiveType] = useState<'maestranza' | 'taxibus'>('maestranza');

  const filteredProducts = products.filter(product => product.type === activeType);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1B2A4A]">Nuestros Productos</h2>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveType('maestranza')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeType === 'maestranza' 
                  ? 'bg-[#FF3A3A] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Wrench size={20} />
              Maestranza y Repuestos Especiales
            </button>
            <button
              onClick={() => setActiveType('taxibus')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                activeType === 'taxibus' 
                  ? 'bg-[#3A8EFF] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bus size={20} />
              Repuestos de Taxibuses
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                  <CategoryIcon category={product.category} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1B2A4A]">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#FF3A3A] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/*
                <button className="mt-6 w-full bg-[#1B2A4A] text-white px-4 py-2 rounded hover:bg-[#2A3B5A] transition-colors">
                  Más Información
                </button>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}