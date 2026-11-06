import { useState } from 'react';
import { Product } from '../../types/product';
import './Modal.less';


interface ModalProps {
  product: Product;
  onClose: () => void;
}

export default function Modal({ product, onClose }: ModalProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botão Fechar (X) */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-body">
          {/* Imagem do Produto */}
          <div className="modal-image-container">
            <img src={product.photo} alt={product.productName} />
          </div>

          {/* Informações do Produto */}
          <div className="modal-details">
            <h2 className="modal-title">{product.productName}</h2>
            <p className="modal-price">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>

            <p className="modal-description">
              {product.descritionShort || 'Many desktop publishing packages and web page editors now use many desktop publishing.'}
            </p>

            <a href="#" className="modal-link">
              Veja mais detalhes do produto &gt;
            </a>

            {/* Controle de Quantidade e Botão Comprar */}
            <div className="modal-actions">
              <div className="quantity-control">
                <button type="button" onClick={handleDecrease}>-</button>
                <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
                <button type="button" onClick={handleIncrease}>+</button>
              </div>

              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}