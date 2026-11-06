import './Header.less';

export default function Header() {
  return (
    <header className="header-container">
      {/* Barra de avisos topo */}
      <div className="top-bar">
        <span>Compra <strong>100% segura</strong></span>
        <span><strong>Frete grátis</strong> acima de R$ 200,00</span>
        <span><strong>Parcele</strong> suas compras</span>
      </div>

      {/* Conteúdo central (Logo, Busca e Ícones) */}
      <div className="main-header">
        <img src="/public/images/logo.png" alt="Econverse" className="logo" />
        
        <div className="search-box">
          <input type="text" placeholder="O que você está procurando?" />
        </div>

        <img src="/public/images/header-icons.png" alt="ecoverse-logo" />
        <div className="header-icons">
          
        </div>
      </div>

      {/* Menu de Categorias Horizontal */}
      <nav className="header-nav">
        <ul>
          <li><a href="#" className="active">TODAS CATEGORIAS</a></li>
          <li><a href="#">SUPERMERCADO</a></li>
          <li><a href="#">LIVROS</a></li>
          <li><a href="#">MODA</a></li>
          <li><a href="#">LANÇAMENTOS</a></li>
          <li><a href="#">OFERTAS DO DIA</a></li>
          <li><a href="#">ASSINATURA</a></li>
        </ul>
      </nav>
    </header>
  );
}