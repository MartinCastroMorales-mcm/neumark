import React from 'react';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ContactForm } from './components/ContactForm';
import Welcome from './components/Welcome';

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