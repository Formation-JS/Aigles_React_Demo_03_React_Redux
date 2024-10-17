export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  isActive: boolean;
  createAt: string; 
  updateAt: string;
}

export type ProductFormData = Omit<Product, 'id' | 'isActive' | 'createAt' | 'updateAt'>;