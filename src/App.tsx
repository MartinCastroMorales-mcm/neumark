import React from 'react';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductCatalog />
      <ContactForm />
    </div>
  );
}

export default App;