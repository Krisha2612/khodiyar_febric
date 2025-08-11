import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductGallery from '../components/product/ProductGallery';
import ProductDetails from '../components/product/ProductDetails';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === id) || null;
    setProduct(foundProduct);
    
    // Find related products (same category, excluding current product)
    if (foundProduct) {
      const related = products
        .filter(p => 
          p.id !== foundProduct.id && 
          (p.category === foundProduct.category || p.fabricType === foundProduct.fabricType)
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container-padded py-12">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-neutral-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-padded py-12">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-neutral-600 mb-6">We couldn't find the product you're looking for.</p>
          <Link to="/products" className="btn btn-primary">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-padded">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="text-neutral-400" />
                <Link to="/products" className="text-neutral-600 hover:text-primary-600 ml-1">
                  Products
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="text-neutral-400" />
                <Link 
                  to={`/products?category=${product.category.toLowerCase()}`} 
                  className="text-neutral-600 hover:text-primary-600 ml-1"
                >
                  {product.category}
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="text-neutral-400" />
                <span className="text-neutral-800 ml-1 font-medium truncate max-w-[150px]" aria-current="page">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <ProductGallery mainImage={product.imageSrc} imageAlt={product.imageAlt} />
          <ProductDetails product={product} />
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-heading mb-6">You May Also Like</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;