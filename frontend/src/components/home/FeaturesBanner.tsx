import React from 'react';
import { TruckIcon, Package, Scissors, RefreshCw } from 'lucide-react';

const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: <TruckIcon className="text-primary-600" size={32} />,
      title: 'Free Shipping',
      description: 'On orders over $100'
    },
    {
      icon: <Package className="text-primary-600" size={32} />,
      title: 'Premium Quality',
      description: 'Curated selection of fabrics'
    },
    {
      icon: <Scissors className="text-primary-600" size={32} />,
      title: 'Cut to Order',
      description: 'Precision cutting service'
    },
    {
      icon: <RefreshCw className="text-primary-600" size={32} />,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-padded">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;