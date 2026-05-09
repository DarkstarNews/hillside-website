function Recap() {
  return (
    <section id="event-2026" className="section bg-cream recap" data-screen-label="05 2026 Event">
      <div className="container recap__head">
        <span className="label">The 2026 event</span>
        <h2 className="recap__headline">
          Three hundred and fifty-five<br/>people, in one room.
        </h2>
        <p className="lede recap__lede">
          On the second of May, friends, family and strangers from fourteen states and five countries came to The Bowery Hotel in support of the Tyler G. Foundation — the nonprofit Tyler’s family built in his memory to fund recovery, education and family resources for those fighting addiction.
        </p>
      </div>

      <div className="recap__stats container">
        <div><span className="recap__stat-num">355</span><span className="recap__stat-label">guests</span></div>
        <div><span className="recap__stat-num">14</span><span className="recap__stat-label">states represented</span></div>
        <div><span className="recap__stat-num">5</span><span className="recap__stat-label">countries</span></div>
        <div><span className="recap__stat-num">30</span><span className="recap__stat-label">vendors</span></div>
      </div>

      <div className="recap__gallery">
        <figure className="recap__bleed recap__bleed--projection">
          <img src="./assets/photos/recap-step-repeat.webp" alt="Guests arrive past the Hillside step-and-repeat at The Bowery Hotel." loading="lazy" />
          <figcaption>Arrival · 7:30 pm</figcaption>
        </figure>

        <div className="recap__pair">
          <figure>
            <img src="./assets/photos/recap-glow.webp" alt="A guest in a sapphire dress catches a flash of light, mid-conversation." loading="lazy" />
          </figure>
          <figure>
            <img src="./assets/photos/recap-terrace.webp" alt="Guests gathered on the terrace under the glass awning." loading="lazy" />
          </figure>
        </div>

        <figure className="recap__bleed">
          <img src="./assets/photos/recap-stage-night.webp" alt="A speaker addresses the gathered crowd late in the evening." loading="lazy" />
          <figcaption>Remarks</figcaption>
        </figure>

        <div className="recap__pair">
          <figure>
            <img src="./assets/photos/recap-speaker.webp" alt="A speaker on stage in black-and-white, mid-sentence." loading="lazy" />
          </figure>
          <figure>
            <img src="./assets/photos/hero-2026.webp" alt="A couple dancing under the disco-ball reflections." loading="lazy" />
          </figure>
        </div>
      </div>

      <div className="container recap__foot">
        <a href="gallery.html" className="recap__more">
          View the full gallery <span aria-hidden="true">→</span>
        </a>
        <span className="recap__credit">Photography · Ricky Rodriguez</span>
      </div>
    </section>
  );
}

window.Recap = Recap;
