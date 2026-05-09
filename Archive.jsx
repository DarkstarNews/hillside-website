function Archive() {
  const galas = [
    {
      year: "2026",
      date: "May 2, 2026",
      venue: "The Bowery Hotel · New York",
      beneficiary: "The Tyler G. Foundation",
      raised: "[$X.XM] raised",
      href: "#recap",
      forthcoming: false,
    },
    {
      year: "2027",
      date: "Forthcoming",
      venue: "New York · in May",
      beneficiary: "Beneficiary TBA",
      raised: "Save the date opens autumn 2026",
      href: "#gala",
      forthcoming: true,
    },
  ];

  return (
    <section id="archive" className="section bg-cream-deep" data-screen-label="06 Archive">
      <div className="container archive">
        <div className="archive__head">
          <span className="label">Past galas</span>
          <h2 className="archive__headline">An annual chapter.</h2>
        </div>

        <div className="archive__grid">
          {galas.map((g) => (
            <a
              key={g.year}
              href={g.href}
              className={"archive__card" + (g.forthcoming ? " is-forthcoming" : "")}
            >
              <span className="archive__date">{g.date}</span>
              <span className="archive__year">{g.year}</span>
              <span className="archive__venue">{g.venue}</span>
              <span className="archive__beneficiary">{g.beneficiary}</span>
              <span className="archive__credit">{g.raised}</span>
              <span className="archive__more">
                {g.forthcoming ? "Save the date" : "View the chapter"} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Archive = Archive;
