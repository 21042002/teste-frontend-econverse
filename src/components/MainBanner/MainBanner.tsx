import './MainBanner.less';

export default function MainBanner() {
  return (
    <section className="main-banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Venha conhecer nossas promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <button className="banner-button">Ver produtos</button>
      </div>
    </section>
  );
}