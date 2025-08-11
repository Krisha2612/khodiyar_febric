import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { fabricTypes, patterns } from '../../data/products';

interface ProductFilterProps {
  activeFilters: {
    fabricType: string[];
    pattern: string[];
    priceRange: [number, number] | null;
  };
  onFilterChange: (filters: {
    fabricType?: string[];
    pattern?: string[];
    priceRange?: [number, number] | null;
  }) => void;
  onClearAll: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  activeFilters,
  onFilterChange,
  onClearAll
}) => {
  const [expandedSections, setExpandedSections] = useState({
    fabricType: true,
    pattern: true,
    price: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFabricTypeChange = (fabricType: string) => {
    const newFabricTypes = activeFilters.fabricType.includes(fabricType)
      ? activeFilters.fabricType.filter(type => type !== fabricType)
      : [...activeFilters.fabricType, fabricType];
    
    onFilterChange({ fabricType: newFabricTypes });
  };

  const handlePatternChange = (pattern: string) => {
    const newPatterns = activeFilters.pattern.includes(pattern)
      ? activeFilters.pattern.filter(pat => pat !== pattern)
      : [...activeFilters.pattern, pattern];
    
    onFilterChange({ pattern: newPatterns });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({ priceRange: [min, max] });
  };

  const handleClearFilters = () => {
    onClearAll();
  };

  const priceRanges = [
    { label: 'Under $20', min: 0, max: 20 },
    { label: '$20 - $30', min: 20, max: 30 },
    { label: '$30 - $50', min: 30, max: 50 },
    { label: 'Over $50', min: 50, max: 1000 }
  ];

  // Check if any filters are active
  const hasActiveFilters = 
    activeFilters.fabricType.length > 0 || 
    activeFilters.pattern.length > 0 || 
    activeFilters.priceRange !== null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Filters</h3>
        {hasActiveFilters && (
          <button 
            onClick={handleClearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Fabric Type Filter */}
      <div className="mb-6 border-b border-neutral-200 pb-6">
        <button 
          className="flex justify-between items-center w-full text-left mb-3"
          onClick={() => toggleSection('fabricType')}
        >
          <h4 className="text-md font-medium">Fabric Type</h4>
          {expandedSections.fabricType ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.fabricType && (
          <div className="space-y-2 ml-1">
            {fabricTypes.map(type => (
              <div key={type.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`fabric-${type.id}`}
                  checked={activeFilters.fabricType.includes(type.id)}
                  onChange={() => handleFabricTypeChange(type.id)}
                  className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor={`fabric-${type.id}`} className="ml-2 text-sm text-neutral-700">
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pattern Filter */}
      <div className="mb-6 border-b border-neutral-200 pb-6">
        <button 
          className="flex justify-between items-center w-full text-left mb-3"
          onClick={() => toggleSection('pattern')}
        >
          <h4 className="text-md font-medium">Pattern</h4>
          {expandedSections.pattern ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.pattern && (
          <div className="space-y-2 ml-1">
            {patterns.map(pattern => (
              <div key={pattern.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`pattern-${pattern.id}`}
                  checked={activeFilters.pattern.includes(pattern.id)}
                  onChange={() => handlePatternChange(pattern.id)}
                  className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor={`pattern-${pattern.id}`} className="ml-2 text-sm text-neutral-700">
                  {pattern.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <button 
          className="flex justify-between items-center w-full text-left mb-3"
          onClick={() => toggleSection('price')}
        >
          <h4 className="text-md font-medium">Price</h4>
          {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-2 ml-1">
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`price-${index}`}
                  name="price-range"
                  checked={
                    activeFilters.priceRange !== null && 
                    activeFilters.priceRange[0] === range.min && 
                    activeFilters.priceRange[1] === range.max
                  }
                  onChange={() => handlePriceChange(range.min, range.max)}
                  className="h-4 w-4 rounded-full border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor={`price-${index}`} className="ml-2 text-sm text-neutral-700">
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <h4 className="text-sm font-medium mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {activeFilters.fabricType.map(type => {
              const typeName = fabricTypes.find(t => t.id === type)?.name || type;
              return (
                <button
                  key={`filter-${type}`}
                  onClick={() => handleFabricTypeChange(type)}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800"
                >
                  {typeName}
                  <X size={12} className="ml-1" />
                </button>
              );
            })}
            
            {activeFilters.pattern.map(pattern => {
              const patternName = patterns.find(p => p.id === pattern)?.name || pattern;
              return (
                <button
                  key={`filter-${pattern}`}
                  onClick={() => handlePatternChange(pattern)}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800"
                >
                  {patternName}
                  <X size={12} className="ml-1" />
                </button>
              );
            })}
            
            {activeFilters.priceRange && (
              <button
                onClick={() => onFilterChange({ priceRange: null })}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800"
              >
                {activeFilters.priceRange[0] === 0 ? 'Under' : '$' + activeFilters.priceRange[0]} - 
                {activeFilters.priceRange[1] >= 1000 ? ' Above' : ' $' + activeFilters.priceRange[1]}
                <X size={12} className="ml-1" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;