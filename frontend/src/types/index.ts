export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  fabricType: string;
  weight: string;
  width: string;
  colors: string[];
  patterns: string[];
  category: string;
  featured?: boolean;
  newArrival?: boolean;
  inStock: boolean;
  stockQuantity?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

export interface FabricType {
  id: string;
  name: string;
}

export interface Pattern {
  id: string;
  name: string;
}