import React from 'react';
import { motion } from 'framer-motion';

interface DressCategoryProps {
  title: string;
  image: string;
  description?: string;
}

const DressCategory: React.FC<DressCategoryProps> = ({ title, image, description }) => {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DressCategory;