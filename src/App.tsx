import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import CategoryNav from './components/CategoryNav/CategoryNav';
import ProductShelf from './components/ProductShelf/ProductShelf';
import PartnerBanners from './components/PartnerBanners/PartnerBanners';
import BrandLogos from './components/BrandLogos/BrandLogos';
import NewsletterFooter from './components/NewsletterFotter/NewsletterFooter';
import Modal from './components/Modal/Modal';
import { Product } from './types/product';
import { getProducts } from './services/productService';
import './styles/global.less';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        {/* Banner Principal Black Friday */}
        <MainBanner />

        {/* Ícones de Categorias */}
        <CategoryNav />

        {!loading && (
          <>
            {/* Primeira Vitrine com abas de categoria */}
            <ProductShelf 
              products={products} 
              onSelectProduct={setSelectedProduct} 
              title="Produtos relacionados"
              showTabs={true}
            />

            {/* Primeiro Bloco de Banners Parceiros lado a lado */}
            <PartnerBanners />

            {/* Segunda Vitrine */}
            <ProductShelf 
              products={products} 
              onSelectProduct={setSelectedProduct} 
              title="Produtos relacionados"
              showTabs={false}
            />

            {/* Segundo Bloco de Banners Parceiros */}
            <PartnerBanners />

            {/* Seção Navegue por Marcas (Logos lado a lado) */}
            <BrandLogos />

            {/* Terceira Vitrine */}
            <ProductShelf 
              products={products} 
              onSelectProduct={setSelectedProduct} 
              title="Produtos relacionados"
              showTabs={false}
            />
          </>
        )}
      </main>

      {/* Seção de Newsletter e Rodapé */}
      <NewsletterFooter />

      {/* Modal Interativo */}
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;