import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-heading mb-2">Featured Fabrics</h2>
            <p className="text-neutral-600 max-w-2xl">
              Our curated selection of premium fabrics for your most exquisite projects.
            </p>
          </div>
          <Link to="/products?featured=true" className="flex items-center mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium">
            <span>View all</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;