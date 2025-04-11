import logoFooter from "../assets/logo-footer.svg"; // adapte selon ton fichier réel

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <img src={logoFooter} alt="Logo Kasa blanc" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
