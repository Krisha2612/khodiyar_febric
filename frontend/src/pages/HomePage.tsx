import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryShowcase from '../components/home/CategoryShowcase';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import FeaturesBanner from '../components/home/FeaturesBanner';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <NewArrivals />
    </div>
  );
};

export default HomePage;