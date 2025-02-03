import facebookLogo from "../../assets/logos/Facebook.svg";
import twitterLogo from "../../assets/logos/X_twitter.svg";
import instagramLogo from "../../assets/logos/Instagram.svg";
import pinterestLogo from "../../assets/logos/Pinterest.svg";
import "./Footer.scss"

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h2 className="nav__logo footer__logo footer__card">Snaps</h2>
        <div className="footer__links">
          <article className="footer__links-left">
            <a href="#" className="footer__link">For photographers</a>
            <a href="#" className="footer__link">Hire talent</a>
            <a href="#" className="footer__link">Inspiration</a>
          </article>
          <article className="footer__links-right">
            <a href="#" className="footer__link">About</a>
            <a href="#" className="footer__link">Careers</a>
            <a href="#" className="footer__link">Support</a>
          </article>
        </div>

        <article className="footer__socials">
          <a href="#" className="footer__social-link">
            <img src={facebookLogo} alt="Facebook-logo" className="footer__social-facebook" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={twitterLogo} alt="X-twitter-logo" className="footer__social-twitter" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={instagramLogo} alt="Instagram-logo" className="footer__social-instagram" />
          </a>
          <a href="#" className="footer__social-link">
            <img src={pinterestLogo} alt="Pinterest-logo" className="footer__social-pinterest" />
          </a>
        </article>
      </div>

      <article className="footer__rights">
        <a href="#" className="footer__rights-text">© 2024 Snaps .</a>
        <a href="#" className="footer__rights-text">Terms</a>
        <a href="#" className="footer__rights-text">Privacy</a>
        <a href="#" className="footer__rights-text">Cookies</a>
      </article>
    </section>
  );
}

export default Footer;