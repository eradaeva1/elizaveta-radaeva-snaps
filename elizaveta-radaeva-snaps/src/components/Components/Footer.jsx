// import Footer from './Footer.scss';

function Footer() {
  return (
    <section className="footer">
      
      <div className="footer__container">
      <h2 className="nav__logo footer__logo footer__card">Snaps</h2>
      <div className="footer__links">
        <article className="footer__links-left">
          <a href="#" className="footer__link">
            For photographers
          </a>
          <a href="#" className="footer__link">
            Hire Talent
          </a>
          <a href="#" className="footer__link">
            Inspiration
          </a>
        </article>
        <article className="footer__links-right">
          <a href="#" className="footer__link">
            About
          </a>
          <a href="#" className="footer__link">
            Careers
          </a>
          <a href="#" className="footer__link">
            Support
          </a>
        </article>
        </div>
        </div>
        <article className="footer__socials">
          <a href="#" className="footer__social-link">
            <img
              src="src\assets\logos\Facebook.svg"
              alt="Facebook-logo"
              className="footer__social-facebook"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              className="footer__social-twitter"
              src="src\assets\logos\X_twitter.svg"
              alt="X-twitter-logo"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src="src\assets\logos\Instagram.svg"
              alt="Instagram-logo"
              className="footer__social-instagram"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src="src\assets\logos\Pinterest.svg"
              alt="Pinterest-logo"
              className="footer__social-pinterest"
            />
          </a>
        </article>
    
      <article className="footer__rights">
        <a href="#" className="footer__rights-text">
          © 2024 Snaps .{" "}
        </a>
        <a href="#" className="footer__rights-text">
          Terms
        </a>
        <a href="#" className="footer__rights-text">
          Privacy
        </a>
        <a href="#" className="footer__rights-text">
          Cookies
        </a>
      </article>
    </section>
  );
}

export default Footer;
