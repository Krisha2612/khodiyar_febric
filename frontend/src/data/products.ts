import { Product, Category, FabricType, Pattern } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Satin',
    description: 'Luxurious cotton satin fabric with a smooth, glossy surface and matte back. Perfect for elegant dresses, blouses, and special occasion wear.',
    price: 24.99,
    imageSrc: 'https://images.pexels.com/photos/4620546/pexels-photo-4620546.jpeg',
    imageAlt: 'Folded white cotton satin fabric',
    fabricType: 'Cotton',
    weight: 'Medium',
    width: '58"',
    colors: ['White', 'Ivory', 'Blue'],
    patterns: ['Solid'],
    category: 'Cotton',
    featured: true,
    inStock: true,
    stockQuantity: 150
  },
  {
    id: '2',
    name: 'Pure Silk Charmeuse',
    description: 'Exquisite pure silk charmeuse with a lustrous sheen. This lightweight, flowing fabric drapes beautifully and is ideal for luxury garments.',
    price: 49.99,
    imageSrc: 'https://images.pexels.com/photos/5745021/pexels-photo-5745021.jpeg',
    imageAlt: 'Draped silk charmeuse fabric in emerald green',
    fabricType: 'Silk',
    weight: 'Light',
    width: '45"',
    colors: ['Emerald', 'Ruby', 'Sapphire', 'Pearl'],
    patterns: ['Solid'],
    category: 'Silk',
    featured: true,
    inStock: true,
    stockQuantity: 85
  },
  {
    id: '3',
    name: 'Organic Linen Blend',
    description: 'Sustainable organic linen blend with a textured, natural finish. Perfect for summer garments, home decor, and casual wear.',
    price: 32.50,
    imageSrc: 'https://images.pexels.com/photos/4946975/pexels-photo-4946975.jpeg',
    imageAlt: 'Natural organic linen fabric',
    fabricType: 'Linen',
    weight: 'Medium',
    width: '54"',
    colors: ['Natural', 'Sage', 'Stone'],
    patterns: ['Solid'],
    category: 'Linen',
    newArrival: true,
    inStock: true,
    stockQuantity: 120
  },
  {
    id: '4',
    name: 'Patterned Cotton Poplin',
    description: 'Crisp cotton poplin with delicate floral pattern. Ideal for dresses, shirts, and children\'s clothing.',
    price: 18.75,
    imageSrc: 'https://images.pexels.com/photos/5698639/pexels-photo-5698639.jpeg',
    imageAlt: 'Patterned cotton poplin fabric with floral design',
    fabricType: 'Cotton',
    weight: 'Light',
    width: '44"',
    colors: ['Blue', 'White'],
    patterns: ['Floral'],
    category: 'Cotton',
    inStock: true,
    stockQuantity: 200
  },
  {
    id: '5',
    name: 'Merino Wool Gabardine',
    description: 'High-quality merino wool gabardine with a smooth finish and excellent drape. Perfect for tailored garments, suits, and formal wear.',
    price: 42.95,
    imageSrc: 'https://images.pexels.com/photos/6567956/pexels-photo-6567956.jpeg',
    imageAlt: 'Dark navy merino wool gabardine fabric',
    fabricType: 'Wool',
    weight: 'Medium-Heavy',
    width: '60"',
    colors: ['Navy', 'Charcoal', 'Black'],
    patterns: ['Solid'],
    category: 'Wool',
    inStock: true,
    stockQuantity: 75
  },
  {
    id: '6',
    name: 'Liberty Cotton Lawn',
    description: 'Premium Liberty London cotton lawn featuring exclusive designer patterns. This lightweight, soft fabric is perfect for blouses, dresses, and fine details.',
    price: 38.50,
    imageSrc: 'https://images.pexels.com/photos/8145312/pexels-photo-8145312.jpeg',
    imageAlt: 'Liberty cotton lawn fabric with colorful pattern',
    fabricType: 'Cotton',
    weight: 'Light',
    width: '53"',
    colors: ['Multi'],
    patterns: ['Floral', 'Abstract'],
    category: 'Cotton',
    featured: true,
    inStock: true,
    stockQuantity: 60
  },
  {
    id: '7',
    name: 'Japanese Selvedge Denim',
    description: 'Premium Japanese selvedge denim with distinctive character. Ideal for jeans, jackets, and heavy-duty garments or accessories.',
    price: 28.99,
    imageSrc: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    imageAlt: 'Raw selvedge denim fabric',
    fabricType: 'Denim',
    weight: 'Heavy',
    width: '32"',
    colors: ['Indigo'],
    patterns: ['Solid'],
    category: 'Denim',
    inStock: true,
    stockQuantity: 90
  },
  {
    id: '8',
    name: 'Stretch Velvet',
    description: 'Luxurious stretch velvet with a plush pile and slight stretch for comfort. Perfect for evening wear, costumes, and home decor accents.',
    price: 26.50,
    imageSrc: 'https://images.pexels.com/photos/6567717/pexels-photo-6567717.jpeg',
    imageAlt: 'Rich burgundy stretch velvet fabric',
    fabricType: 'Velvet',
    weight: 'Medium',
    width: '58"',
    colors: ['Burgundy', 'Emerald', 'Navy', 'Black'],
    patterns: ['Solid'],
    category: 'Specialty',
    newArrival: true,
    inStock: true,
    stockQuantity: 110
  },
];

export const categories: Category[] = [
  {
    id: 'cotton',
    name: 'Cotton',
    description: 'Natural, breathable fabrics perfect for everyday wear',
    imageSrc: 'https://images.pexels.com/photos/4553036/pexels-photo-4553036.jpeg'
  },
  {
    id: 'silk',
    name: 'Silk',
    description: 'Luxurious, smooth fabrics with a beautiful drape',
    imageSrc: 'https://images.pexels.com/photos/1189431/pexels-photo-1189431.jpeg'
  },
  {
    id: 'linen',
    name: 'Linen',
    description: 'Textured, natural fabrics ideal for warm weather',
    imageSrc: 'https://images.pexels.com/photos/5663498/pexels-photo-5663498.jpeg'
  },
  {
    id: 'wool',
    name: 'Wool',
    description: 'Warm, versatile fabrics for cold weather garments',
    imageSrc: 'https://images.pexels.com/photos/8295874/pexels-photo-8295874.jpeg'
  },
  {
    id: 'denim',
    name: 'Denim',
    description: 'Durable cotton twill fabrics for jeans and jackets',
    imageSrc: 'https://images.pexels.com/photos/459281/pexels-photo-459281.jpeg'
  },
  {
    id: 'specialty',
    name: 'Specialty',
    description: 'Unique and decorative fabrics for special projects',
    imageSrc: 'https://images.pexels.com/photos/6567623/pexels-photo-6567623.jpeg'
  }
];

export const fabricTypes: FabricType[] = [
  { id: 'cotton', name: 'Cotton' },
  { id: 'silk', name: 'Silk' },
  { id: 'linen', name: 'Linen' },
  { id: 'wool', name: 'Wool' },
  { id: 'denim', name: 'Denim' },
  { id: 'velvet', name: 'Velvet' },
  { id: 'crepe', name: 'Crepe' },
  { id: 'satin', name: 'Satin' },
  { id: 'chiffon', name: 'Chiffon' }
];

export const patterns: Pattern[] = [
  { id: 'solid', name: 'Solid' },
  { id: 'floral', name: 'Floral' },
  { id: 'striped', name: 'Striped' },
  { id: 'checkered', name: 'Checkered' },
  { id: 'abstract', name: 'Abstract' },
  { id: 'geometric', name: 'Geometric' }
];