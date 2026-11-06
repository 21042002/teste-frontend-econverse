import { Product } from '../types/product';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('./public/mock-produtos.json');
    if (!response.ok) {
      throw new Error(`Erro ao carregar ficheiro local: ${response.status}`);
    }
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Erro ao procurar produtos do mock local:', error);
    return [];
  }
}