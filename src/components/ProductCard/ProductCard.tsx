import { Product } from "../../types/product";
import './ProductCard.less';

interface ProductCardProps {
    product: Product;
    onSelectProduct: (product: Product) => void;
}

export default function ProductCard({ product, onSelectProduct }: ProductCardProps) {
    const originalPrice = product.price;
    const installmentValue = originalPrice / 2
    const formatCurrency = (val: number) =>  val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })
    
    return (
    <div className="product-card">
      <img src={product.photo} alt={product.productName} className="product-image" />
      <h3 className="product-name">{product.productName}</h3>
      
      {/* Exibe o preço original vindo diretamente do JSON */}
      <p className="old-price">
        {formatCurrency(originalPrice)}
      </p>
      
      {/* Exibe o valor total do produto (mock) */}
      <p className="current-price">
        {formatCurrency(originalPrice)}
      </p>
      
      {/* Exibe a parcela calculada dinamicamente com base no valor do mock */}
      <p className="installments">
        ou 2x de {formatCurrency(installmentValue)} sem juros
      </p>
      
      <p className="shipping">Frete grátis</p>
      
      <button className="buy-button" onClick={() => onSelectProduct(product)}>
        COMPRAR
      </button>
    </div>
    );
}



