import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.pexels.com/photos/4620553/pexels-photo-4620553.jpeg"
          alt="Luxury fabrics background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="container-padded relative z-20 flex flex-col items-start justify-center min-h-[90vh] py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white mb-6 leading-tight"
          >
            Discover Premium Fabrics for Your Creative Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-neutral-100 text-xl mb-8 max-w-2xl"
          >
            From luxurious silks to sustainable linens, find the perfect fabric for your next project at Khodiyar Fabric.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/products" 
              className="group btn btn-primary inline-flex items-center"
            >
              Shop All Fabrics
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              to="/products?featured=true" 
              className="btn btn-outline border-white text-white hover:bg-white/20"
            >
              Explore Featured Collection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;