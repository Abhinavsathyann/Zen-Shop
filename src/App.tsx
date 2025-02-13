import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import DressCategory from './components/DressCategory';
import InaugurationNotification from './components/InaugurationNotification';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <InaugurationNotification />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
            alt="Zen Shop Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            {...fadeIn}
          >
            <h1 className="text-6xl font-serif text-white mb-4">Zen Shop</h1>
            <p className="text-xl text-white">Elegance in Every Stitch</p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#collections" className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Explore Collections
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif mb-8">About Us</h2>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-pink-500 mr-2" />
              <span className="text-xl font-serif">Welcome to Zen Shop</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Zen Shop, we believe that every dress tells a story. Our carefully curated collection brings together the finest fabrics and contemporary designs to create pieces that make you feel confident and beautiful. With years of experience in fashion, our team is dedicated to helping you find the perfect dress for every occasion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We take pride in offering personalized styling services and ensuring that each customer leaves with a dress that makes them feel extraordinary. Visit us to experience fashion that combines elegance with comfort.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        id="collections"
        className="py-20 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DressCategory 
              title="Evening Wear"
              image="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80"
            />
            <DressCategory 
              title="Casual Dresses"
              image="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
            />
            <DressCategory 
              title="Wedding Collection"
              image="https://images.unsplash.com/photo-1594552072238-48c869e4c470?auto=format&fit=crop&q=80"
            />
            <DressCategory 
              title="Girls Collection"
              image="https://images.unsplash.com/photo-1602407294553-6ac9170c3cad?auto=format&fit=crop&q=80"
              description="Adorable dresses for little fashionistas"
            />
          </div>
        </div>
      </motion.section>

     
<motion.section 
  id="contact"
  className="py-20 px-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-serif text-center mb-16">Visit Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-gray-600" />
          <p className="text-lg">Elayoor, Malappuram</p>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-gray-600" />
          <div>
            <p className="text-lg">+91 77367 25917</p>
            <p className="text-lg">+91 86061 41624</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-gray-600" />
          <p className="text-lg">contact@zenshop.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <Clock className="w-6 h-6 text-gray-600" />
          <p className="text-lg">Mon-Sun: 9AM-8PM</p>
        </div>
        <div className="flex items-center space-x-4">
          <Instagram className="w-6 h-6 text-gray-600" />
          <p className="text-lg">@_zen__shop_</p>
        </div>
      </div>
      <div className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1739436411989!6m8!1m7!1sVNQB61F1rVmYLSE8kQBHHQ!2m2!1d11.17982950399063!2d76.0667280827505!3f181.31076101317956!4f-4.160268729722716!5f0.7820865974627469"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</motion.section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Zen Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;









