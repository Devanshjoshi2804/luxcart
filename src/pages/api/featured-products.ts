import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../types/';

const featuredProducts: Product[] = [
  {
      id: 1,
      name: 'Featured Product 1',
      price: 99.99,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
      description: 'This is a featured product',
      color: '',
      sizes: [],
      category: '',
      brand: '',
      inStock: false
  },
  // Add more featured products as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(featuredProducts);
}