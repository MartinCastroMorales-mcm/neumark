import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import type { LeadForm } from '../types';

export function ContactForm() {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    email: '',
    phone: '',
    interest: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar el formulario a un servicio de formularios estático
    const formUrl = 'https://formspree.io/f/your-form-id'; // Reemplazar con tu ID de Formspree
    
    fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Mensaje enviado correctamente');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'general',
          message: ''
        });
      } else {
        alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    });
  };

  return (
    <div className="bg-gray-50 py-24" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contáctanos</h2>
            <p className="mt-4 text-lg text-gray-600">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">+56 9 3413 8052</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">ventas@neumakrepuestos.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="font-semibold">Rut Empresa:</h3>
                  <p className="text-gray-600">76.355.171-1</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <div>
                  <h3 className="font-semibold">Direcciones</h3>
                  <p className="text-gray-600">Jorge Montt 2325, Concepción</p>
                  <p className="text-gray-600">Briceño 2274, Concepción</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                  Interés Principal
                </label>
                <select
                  id="interest"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value as LeadForm['interest'] })}
                >
                  <option value="general">Información General</option>
                  <option value="brakes">Frenos</option>
                  <option value="tires">Neumáticos</option>
                  <option value="clutches">Embragues</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
              >
                Enviar Mensaje <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}