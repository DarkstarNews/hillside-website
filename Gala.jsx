function Gala() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section id="gala" className="section bg-cream gala-section" data-screen-label="04 Gatherings">
      <figure className="gala__photo">
        <img
          src="./assets/photos/recap-stage.webp"
          alt="The room at Hillside 2026, lit by overhead bokeh and a single stage."
          loading="lazy"
        />
      </figure>

      <div className="container gala__copy">
        <span className="label">Gatherings</span>
        <h2 className="gala__headline">
          Inaugural.<br/>And just the start.
        </h2>
        <dl className="gala__meta">
          <div><dt>Inaugural</dt><dd>02 May 2026 · The Bowery Hotel</dd></div>
          <div><dt>What’s next</dt><dd>To be announced</dd></div>
        </dl>
      </div>

      <aside className="gala__save container">
        <span className="label" style={{ color: "var(--forest)" }}>Stay close</span>
        <h3 className="gala__save-title">Be the first to know.</h3>
        <p className="gala__save-body">
          We’ll write when the next gathering is on the calendar.
        </p>
        {!submitted ? (
          <form className="gala__save-form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />
            <button type="submit">
              Keep me posted <span aria-hidden="true">→</span>
            </button>
          </form>
        ) : (
          <p className="gala__save-thanks">
            Thank you. We’ll be in touch.
          </p>
        )}
      </aside>
    </section>
  );
}

window.Gala = Gala;
