import './CategoryNav.less';


export default function CategoryNav() {
  return (
    <nav className="category-nav">
      <div className="category-container">
        <img src="src/public/images/categories-banner.png" alt="Categorias: Tecnologia, Supermercado, Bebidas, Ferramentas, Saúde, Esportes e Fitness, Moda" 
        className="category-banner-image"/>
      </div>
    </nav>
  );
}