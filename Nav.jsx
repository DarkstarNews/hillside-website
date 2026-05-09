function Nav({ inverse = false, vertical = false }) {
  const cls = "site-nav" + (inverse ? " site-nav--inverse" : "") + (vertical ? " site-nav--vertical" : "");
  return (
    <header className={cls}>
      <a href="index.html" className="site-nav__mark" aria-label="Hillside · home">
        <img
          src="./assets/logos/hillside-wordmark-white.png"
          alt="Hillside"
          className="site-nav__logo"
        />
      </a>
      {!vertical && (
        <nav className="site-nav__links" aria-label="Primary">
          <a href="tyler-g-foundation.html">The Foundation</a>
          <a href="gallery.html">Gallery</a>
          <a href="sponsors.html">Sponsors</a>
          <a href="donate.html" className="site-nav__cta">Donate</a>
        </nav>
      )}
    </header>
  );
}

window.Nav = Nav;
