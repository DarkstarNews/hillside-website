function Hero() {
  const slides = [
    { src: "./assets/photos/hero-2026.webp",      alt: "A couple dancing under disco-ball reflections at the inaugural Hillside gala.", pos: "center 35%" },
    { src: "./assets/photos/recap-stage.webp",     alt: "The room at Hillside 2026, lit by overhead bokeh.", pos: "center 40%" },
    { src: "./assets/photos/recap-group.webp",     alt: "Friends gathered in formalwear at the inaugural Hillside.", pos: "center 30%" },
    { src: "./assets/photos/recap-stage-night.webp", alt: "A speaker addresses the gathered crowd late in the evening.", pos: "center 50%" },
    { src: "./assets/photos/recap-glow.webp",      alt: "A guest catches a flash of light, mid-conversation.", pos: "center 35%" },
  ];
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <Nav inverse vertical />

      <div className="hero__photo">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={"hero__slide" + (i === active ? " is-active" : "")}
            style={{ objectPosition: s.pos }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="hero__photo-scrim" aria-hidden="true"></div>
        <div className="hero__photo-vignette" aria-hidden="true"></div>
        <div className="hero__dots" aria-hidden="true">
          {slides.map((_, i) => (
            <span key={i} className={"hero__dot" + (i === active ? " is-active" : "")} />
          ))}
        </div>
        <nav className="hero__nav" aria-label="Primary">
          <a href="tyler-g-foundation.html">The Foundation</a>
          <a href="gallery.html">Gallery</a>
          <a href="sponsors.html">Sponsors</a>
          <a href="donate.html" className="hero__nav-cta">Donate</a>
        </nav>
      </div>

      <div className="hero__plate">
        <span className="hero__eyebrow">A New York charity · est. 2026</span>
        <h1 className="hero__headline">
          A gathering.<br/>Given away in full.
        </h1>
        <p className="hero__sub">
          Hillside brings people together to support the partners doing the work — beginning with the Tyler G. Foundation.
        </p>
        <div className="hero__ctas">
          <a href="#event-2026" className="btn--quiet hero__quiet">The 2026 event <span aria-hidden="true">→</span></a>
        </div>

        <div className="hero__meta" aria-hidden="true">
          <span className="hero__meta-line">Inaugural · 02 May 2026</span>
          <span className="hero__meta-line">The Bowery Hotel · New York</span>
        </div>
      </div>

    </section>
  );
}

window.Hero = Hero;
