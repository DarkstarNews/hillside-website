function Donate() {
  return (
    <section id="donate" className="section bg-forest donate" data-screen-label="07 Donate">
      <div className="container donate__inner">
        <span className="label" style={{ color: "var(--cream)" }}>Make a gift</span>
        <h2 className="donate__headline">
          Do the right thing.<br/>100% of proceeds go to charity.
        </h2>
        <p className="donate__body">
          Donor gifts are pooled and granted in full to our partners. Operating costs are sponsor-funded — so every dollar raised leaves the building.
        </p>
        <div className="donate__cta">
          <a
            href="donate.html"
            className="btn donate__btn"
          >
            Make a gift →
          </a>
          <a href="mailto:events@hillsidenewyork.com" className="donate__alt">
            Or write to us directly →
          </a>
        </div>

        <p className="donate__taxline">
          Hillside is a 501(c)(3) public charity. Gifts are tax-deductible to the extent allowed by law.
        </p>
      </div>
    </section>
  );
}

window.Donate = Donate;
