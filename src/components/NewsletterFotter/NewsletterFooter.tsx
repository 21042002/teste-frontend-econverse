import './NewsletterFooter.less';

export default function NewsletterFooter() {
  return (
    <footer className="footer-container">
      {/* Seção Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Receba as melhores ofertas e novidades diretamente no seu e-mail.</p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">CADASTRAR</button>
        </form>
      </section>

      {/* Rodapé Principal */}
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/public/images/logo.png" alt="Econverse Logo" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div>
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div>
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}