import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import { products } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // State for filters
  const [activeFilters, setActiveFilters] = useState({
    fabricType: [] as string[],
    pattern: [] as string[],
    priceRange: null as [number, number] | null
  });
  
  // State for products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // State for mobile filter visibility
  const [showFilters, setShowFilters] = useState(false);
  
  // Get category from URL if present
  const categoryParam = queryParams.get('category');
  const featuredParam = queryParams.get('featured');
  const newParam = queryParams.get('new');
  
  // Initialize filters based on URL params
  useEffect(() => {
    let initialFilters = {
      fabricType: [] as string[],
      pattern: [] as string[],
      priceRange: null as [number, number] | null
    };
    
    if (categoryParam) {
      initialFilters.fabricType = [categoryParam];
    }
    
    setActiveFilters(initialFilters);
  }, [categoryParam]);
  
  // Apply filters to products
  useEffect(() => {
    let result = [...products];
    
    // Apply category/featured/new filters from URL
    if (categoryParam) {
      result = result.filter(product => 
        product.category.toLowerCase() === categoryParam.toLowerCase() ||
        product.fabricType.toLowerCase() === categoryParam.toLowerCase()
      );
    }
    
    if (featuredParam === 'true') {
      result = result.filter(product => product.featured);
    }
    
    if (newParam === 'true') {
      result = result.filter(product => product.newArrival);
    }
    
    // Apply active filters
    if (activeFilters.fabricType.length > 0) {
      result = result.filter(product => 
        activeFilters.fabricType.some(type => 
          product.fabricType.toLowerCase() === type.toLowerCase() ||
          product.category.toLowerCase() === type.toLowerCase()
        )
      );
    }
    
    if (activeFilters.pattern.length > 0) {
      result = result.filter(product => 
        product.patterns.some(pattern => 
          activeFilters.pattern.includes(pattern.toLowerCase())
        )
      );
    }
    
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange;
      result = result.filter(product => 
        product.price >= min && product.price <= max
      );
    }
    
    setFilteredProducts(result);
  }, [categoryParam, featuredParam, newParam, activeFilters]);
  
  const handleFilterChange = (filters: {
    fabricType?: string[];
    pattern?: string[];
    priceRange?: [number, number] | null;
  }) => {
    setActiveFilters(prev => ({
      ...prev,
      ...filters
    }));
  };
  
  const handleClearAll = () => {
    // Keep category filter from URL but clear all other filters
    const newFilters = {
      fabricType: categoryParam ? [categoryParam] : [],
      pattern: [],
      priceRange: null as [number, number] | null
    };
    
    setActiveFilters(newFilters);
  };
  
  const toggleMobileFilters = () => {
    setShowFilters(prev => !prev);
  };
  
  // Determine page title
  let pageTitle = 'All Fabrics';
  if (categoryParam) {
    pageTitle = `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Fabrics`;
  } else if (featuredParam === 'true') {
    pageTitle = 'Featured Fabrics';
  } else if (newParam === 'true') {
    pageTitle = 'New Arrivals';
  }

  return (
    <div className="py-8">
      <div className="container-padded">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl md:text-4xl font-heading mb-2">{pageTitle}</h1>
          <p className="text-neutral-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={toggleMobileFilters}
            className="flex items-center space-x-2 px-4 py-2 border border-neutral-300 rounded-md bg-white shadow-sm text-neutral-700 hover:bg-neutral-50"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilter
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />
          </div>
          
          {/* Products Grid */}
          <div className="flex-grow">
            <ProductGrid products={filteredProducts} columns={3} />
          </div>
        </div>
        
        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMobileFilters}></div>
            <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-medium">Filters</h3>
                <button onClick={toggleMobileFilters} className="text-neutral-500">
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 60px)' }}>
                <ProductFilter
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;