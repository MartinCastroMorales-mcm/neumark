import React from 'react';
import { ChevronRight, Shield, PenTool as Tool, Timer } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-[#1B2A4A] text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="./assets/neumark.jpeg" 
              alt="NEUMAK Logo" 
              className="h-32 w-auto"
            />
          </div>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">
            Expertos en repuestos y maestranza de alta calidad
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="./assets/Catalogo_Maestranza_Axioma_2024.pdf" className="bg-[#FF3A3A] hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Catálogo Maestranza y Repuestos Especiales <ChevronRight size={20} />
            </a>
            <a href="./assets/Catalogo_taxibuses_Axioma_2024.pdf" className="bg-[#3A8EFF] hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Catálogo Repuestos de Taxibuses <ChevronRight size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
            <Shield className="w-12 h-12 text-[#FF3A3A]" />
            <div>
              <h3 className="font-semibold text-lg">Garantía Asegurada</h3>
              <p className="text-gray-400">Respaldo total en todos nuestros productos</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
            <Tool className="w-12 h-12 text-[#FF3A3A]" />
            <div>
              <h3 className="font-semibold text-lg">Servicio Experto</h3>
              <p className="text-gray-400">Asesoría técnica especializada</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#1B2A4A]/80 p-6 rounded-lg border border-[#3A8EFF]/20">
            <Timer className="w-12 h-12 text-[#FF3A3A]" />
            <div>
              <h3 className="font-semibold text-lg">Entrega Rápida</h3>
              <p className="text-gray-400">Envíos a todo el país</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}