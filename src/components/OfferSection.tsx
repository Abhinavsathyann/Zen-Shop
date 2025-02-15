import React from 'react';
import { motion } from 'framer-motion';

interface OfferSectionProps {
  title: string;
  images: string[];
  descriptions: string[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ title, images, descriptions }) => {
  return (
    <motion.section
      className="py-20 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={image}
                  alt={`Offer Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OfferSection;