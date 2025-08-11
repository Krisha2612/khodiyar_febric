import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-padded">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-2">Explore Our Categories</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Find the perfect fabric for any project, from everyday basics to luxury materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] transition-transform duration-500 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img
                src={category.imageSrc}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-white text-2xl font-heading mb-1">{category.name}</h3>
                <p className="text-neutral-200 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;