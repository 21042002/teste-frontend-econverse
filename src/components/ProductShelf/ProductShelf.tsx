import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductShelf.less";


interface ProductShelfProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  title?: string;
  showTabs?: boolean;
}

export default function ProductShelf({
  products,
  onSelectProduct,
  title = "Produtos relacionados",
  showTabs = true
}: ProductShelfProps) {
  return (
    <section className="product-shelf-section">
      <h2 className="shelf-title">{title}</h2>
      
      {showTabs && (
        <div className="shelf-tabs">
          <button className="active">CELULAR</button>
          <button>ACESSÓRIOS</button>
          <button>TABLETS</button>
          <button>NOTEBOOKS</button>
          <button>TVs</button>
          <button>VER TODOS</button>
        </div>
      )}

      <div className="shelf-carousel">
        <button className="arrow left" aria-label="Anterior">&lt;</button>
        <div className="product-list">
          {products.map((item: Product, index: number) => (
            <ProductCard
                key={index}
                product={item}
                onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
        <button className="arrow right" aria-label="Próximo">&gt;</button>
      </div>
    </section>
  );
}