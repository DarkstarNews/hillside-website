function Footer() {
  return (
    <footer className="site-footer" data-screen-label="08 Footer">
      <div className="container site-footer__inner">
        <div className="site-footer__col site-footer__col--mark">
          <img
            src="./assets/logos/hillside-wordmark-white.png"
            alt="Hillside"
            className="site-footer__logo"
          />
          <span className="site-footer__sub">A New York charity.</span>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">Contact</span>
          <a href="mailto:hello@hillside.org">hello@hillside.org</a>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">Follow</span>
          <a href="https://rickyrodriguezphotography.pic-time.com/client/hillside-event--bowery-hotel/gallery" target="_blank" rel="noopener">2026 gallery</a>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__label">The charity</span>
          <span>Hillside</span>
          <span>501(c)(3) public charity</span>
        </div>
      </div>

      <div className="container site-footer__base">
        <span className="site-footer__copy">
          © 2026 Hillside. All rights reserved.
        </span>
        <span className="site-footer__credits">
          Photography by Ricky Rodriguez
        </span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
