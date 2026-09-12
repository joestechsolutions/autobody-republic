const PHONE = 'tel:+18054235325'
const EMAIL = 'mailto:autobodyrepublic@gmail.com'
const IG = 'https://instagram.com/_caytlin_'

function Bear({ size = 96 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Autobody Republic bear">
      <circle cx="24" cy="14" r="7" fill="#7a4a2b"/>
      <circle cx="42" cy="14" r="7" fill="#7a4a2b"/>
      <ellipse cx="32" cy="34" rx="20" ry="17" fill="#7a4a2b"/>
      <rect x="18" y="28" width="28" height="14" rx="7" fill="#9aa0a6"/>
      <circle cx="25" cy="33" r="4.5" fill="#565b60"/>
      <rect x="33" y="30" width="8" height="7" rx="2" fill="#565b60"/>
      <circle cx="26" cy="26" r="2" fill="#111"/>
      <circle cx="38" cy="26" r="2" fill="#111"/>
    </svg>
  )
}

function Star() {
  return <span className="star" aria-hidden>★</span>
}

function Header() {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <div className="brand">
          <Bear size={34} />
          <div className="brand-name">AUTOBODY <em>REPUBLIC</em></div>
        </div>
        <a className="hdr-link" href="#booking">Book a slot →</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="kicker"><Star /> FORD ESCAPE RECALL · CSP 23B56</div>
            <h1>The recall repair comes to <span className="u">your</span> dealership.</h1>
            <p className="lede">
              Autobody Republic performs the 23B56 door-check reinforcement repair
              <strong> on-site</strong> — the vehicle never leaves your lot. No off-site
              transfers, no customer shuttles, no coordination with an outside collision shop.
              About <strong>one hour per door</strong>, using Ford's current repair procedure.
            </p>
            <div className="cta-row">
              <a className="btn btn-red btn-big" href="#booking">Schedule a vehicle</a>
              <a className="btn btn-ghost btn-big" href="#how">How it works</a>
            </div>
            <div className="hero-facts">
              <div className="fact"><strong>~1 hr</strong><span>per-door repair</span></div>
              <div className="fact"><strong>$480</strong><span>Ford sublet allowance · 2-door</span></div>
              <div className="fact"><strong>0</strong><span>off-site transfers</span></div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hc-top">
              <Bear size={44} />
              <div>
                <div className="hc-brand">AUTOBODY <em>REPUBLIC</em></div>
                <div className="hc-sub">Mobile body shop · SD County</div>
              </div>
            </div>
            <div className="hc-job">
              <div className="hc-job-title">NEXT JOB — TODAY 2:00 PM</div>
              <div className="hc-row"><span>Vehicle</span><strong>Ford Escape 2022</strong></div>
              <div className="hc-row"><span>Service</span><strong>23B56 · LF door kit</strong></div>
              <div className="hc-row"><span>Location</span><strong>Your service drive</strong></div>
              <div className="hc-row"><span>Duration</span><strong>~1 hour</strong></div>
              <div className="hc-status">VEHICLE STAYS ON YOUR LOT ✓</div>
            </div>
            <div className="stripe" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="sec" id="problem">
      <div className="wrap">
        <h2>Today's process vs. ours</h2>
        <div className="cols">
          <div className="col col-old">
            <h3>Without us</h3>
            <ol>
              <li>Escape arrives for 23B56</li>
              <li>Find & schedule an outside body shop</li>
              <li>Vehicle transported off-site</li>
              <li>Customer transported or waits days</li>
              <li>Vehicle returns — coordinate pickup</li>
            </ol>
          </div>
          <div className="col col-new">
            <h3>With Autobody Republic</h3>
            <ol>
              <li>Escape arrives for 23B56</li>
              <li>Book a slot on our calendar</li>
              <li>We arrive — repair on your lot</li>
              <li>Customer waits comfortably or keeps their car</li>
              <li>Done — about an hour later</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="sec sec-gray" id="services">
      <div className="wrap">
        <h2>Built for one job — done right</h2>
        <p className="sub">Phase one is exclusively the Ford 23B56 program. Focus, not a menu.</p>
        <div className="cards">
          <div className="card">
            <div className="tag">SERVICE A</div>
            <h3>On-site kit repair</h3>
            <p>Door check-arm reinforcement using Ford's current rivet-plate procedure.
             One or two doors, completed in your service drive.</p>
            <ul>
              <li>~1 hr single door · ~2.6 hr labor two-door</li>
              <li>Pre/post photo documentation on every job</li>
              <li>VIN + RO tracked end-to-end</li>
            </ul>
          </div>
          <div className="card card-muted">
            <div className="tag tag-dim">ON THE ROADMAP</div>
            <h3>Door replacement management</h3>
            <p>For doors beyond repair: OEM door ordering, customer keeps the
             vehicle while the door arrives, paint through our partner facility.</p>
            <p className="note">Not part of the initial pilot — coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <h2>How a vehicle flows</h2>
        <div className="steps">
          <div className="step"><div className="n">1</div><div><h4>Advisor books</h4><p>Service advisor picks an open slot on our live calendar — instant confirmation, no phone tag.</p></div></div>
          <div className="step"><div className="n">2</div><div><h4>We arrive</h4><p>Mobile rig shows up with Ford procedure tooling at your scheduled window.</p></div></div>
          <div className="step"><div className="n">3</div><div><h4>Repair on-site</h4><p>Kit installation per Ford's 23B56 supplement. Customer can wait on premises.</p></div></div>
          <div className="step"><div className="n">4</div><div><h4>Documented & done</h4><p>Pre/post photos + QC notes filed to the RO. Vehicle stays on your lot.</p></div></div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="sec sec-gray" id="pricing">
      <div className="wrap">
        <h2>The math works for the dealership</h2>
        <p className="lede">Ford's 23B56 program allows a <strong>$240-per-door sublet allowance</strong>
        for the service-kit installation — <strong>$480 for a two-door vehicle</strong> (plus sublet
        admin time). You keep the difference while we handle everything.</p>
        <div className="tiers">
          <div className="tier">
            <div className="tag">1–4 / wk</div>
            <div className="price">$220<span>/door</span></div>
            <p>Standard pilot rate</p>
          </div>
          <div className="tier tier-hot">
            <div className="tag">5–9 / wk</div>
            <div className="price">$205<span>/door</span></div>
            <p>Volume rate</p>
          </div>
          <div className="tier">
            <div className="tag">10+ / wk</div>
            <div className="price">$195<span>/door</span></div>
            <p>Partner rate</p>
          </div>
        </div>
        <p className="fine">Your margin per kit door at standard rate: <strong>$20+</strong> — a typical
        two-door job runs about <strong>$440–$500 all-in with accessories and materials</strong>.
        Zero transport cost, zero loaner pressure, zero customer friction. Pilot pricing locked for 90 days.</p>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="sec" id="trust">
      <div className="wrap">
        <h2>Vendor-ready before we knock</h2>
        <div className="trust-grid">
          <div><h4>✓ Licensed</h4><p>California BAR Automotive Repair Dealer registration + mobile-repair vehicle registration.</p></div>
          <div><h4>✓ Insured</h4><p>Garage liability, commercial auto, workers' comp — certificate on file before the pilot.</p></div>
          <div><h4>✓ Ford procedure</h4><p>Work follows the current 23B56 supplement exactly — rivet-plate kit installation, not improvised welding.</p></div>
          <div><h4>✓ Documented</h4><p>Every job: VIN, RO, pre/post photos, parts, technician, timestamp. Paper trail ready for Ford claims.</p></div>
        </div>
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section className="sec sec-book" id="booking">
      <div className="wrap">
        <h2>Put a vehicle on our calendar</h2>
        <p className="lede">Pick your dealership, choose an open slot, enter VIN + RO. Instant confirmation — no approval wait.</p>
        <div className="book-card">
          <div className="book-note">
            <strong>Live booking opens with the pilot dealership.</strong><br />
            Service managers: call or text now to get on the schedule and lock pilot pricing.
          </div>
          <a className="btn btn-red btn-big" href={PHONE}>Call (805) 423-5325</a>
          <a className="btn btn-ghost btn-big" href={EMAIL}>Email the shop</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div>
          <div className="brand"><Bear size={26} /><div className="brand-name">AUTOBODY <em>REPUBLIC</em></div></div>
          <p className="fine">Mobile body shop · San Diego County, CA · Ford Escape CSP 23B56 specialists</p>
        </div>
        <div className="ftr-links">
          <a href={PHONE}>(805) 423-5325</a>
          <a href={EMAIL}>autobodyrepublic@gmail.com</a>
          <a href={IG} target="_blank" rel="noreferrer">@_CAYTLIN_</a>
        </div>
      </div>
      <div className="ftr-stripe" />
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <How />
        <Pricing />
        <Trust />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
