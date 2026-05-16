// shared/AboutPage.jsx — full About page with mission, story, Yale roots,
// philosophy, and team. Luxury restraint — numerals replace emoji, clean grids.

function AboutPage() {
  const mission = [
    { n: '01', h: 'Accessible',   p: 'No steep learning curve. Hop in and ride.' },
    { n: '02', h: 'Sustainable',  p: '100% electric. Zero emissions. Protect the waters we love.' },
    { n: '03', h: 'Fun',          p: 'Joy for families, thrill seekers, and explorers alike.' },
    { n: '04', h: 'Considered',   p: 'Minimalist design. Attention to every detail.' },
  ];

  const philosophy = [
    { n: '01', h: 'Cool design',           p: 'Simplicity meets function.' },
    { n: '02', h: 'Intuitive & stable',    p: 'Built for confident riding by anyone.' },
    { n: '03', h: 'Built to last',         p: 'High-quality materials, tested in extreme conditions.' },
    { n: '04', h: 'Modular & upgradable',  p: 'Accessories and software updates keep your ride evolving.' },
    { n: '05', h: 'Community-driven',      p: 'We listen to our riders and improve with every version.' },
  ];

  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active="about"/>

      {/* HERO */}
      <section style={{ padding: '120px 60px 80px', textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div className="tracked-xl" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 18 }}>ABOUT IWAVE</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 200, letterSpacing: '-0.04em',
          lineHeight: 0.98, margin: '0 0 32px', textWrap: 'balance',
        }}>
          Ride the future of water.
        </h1>
        <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto', lineHeight: 1.5, textWrap: 'balance' }}>
          The water is for everyone — and so is the thrill of riding it.
          Our mission: bring electric-powered watercraft to enthusiasts
          around the world.
        </p>
      </section>

      {/* OUR STORY — editorial 2-column */}
      <section style={{ padding: '100px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>OUR STORY</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
              Frustrated<br/>by what existed.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              IWAVE was founded by a team of passionate designers, engineers,
              and water-sports lovers. Traditional watercraft were noisy,
              polluting, expensive, and hard to learn — so we set out to
              create something different.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              We imagined a product that would be easy to ride, safe for all
              ages, fully electric and sustainable, and designed with
              performance and style in mind.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              Three years of design, engineering, and more than{' '}
              <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>200 user tests</strong>{' '}
              on lakes, rivers, and open waters later — the result is the
              Wavekart series.
            </p>
          </div>
        </div>
      </section>

      {/* YALE — accent band */}
      <section style={{ padding: '120px 60px', background: '#FAFAF8', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>NEW HAVEN, CT</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 28px' }}>
              Born at Yale.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: '0 0 20px' }}>
              IWAVE was proudly founded at Yale University, where innovation
              and impact meet. We are inspired every day by the mission to
              build a global electric water-sports brand, starting from Yale.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              From early prototypes to international pilots, the Yale
              ecosystem — and a community of creators and changemakers —
              has empowered every step of our journey.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { y: '2024', l: 'Tsai CITY Accelerator Program · Cohort member' },
              { y: '2025', l: 'Tsai CITY Summer Fellow team' },
            ].map(b => (
              <div key={b.y} style={{
                background: '#fff', border: '1px solid var(--hairline)', borderRadius: 16,
                padding: '28px 32px', display: 'flex', alignItems: 'baseline', gap: 24,
              }}>
                <div className="font-display" style={{ fontSize: 40, fontWeight: 200, letterSpacing: '-0.02em', minWidth: 90 }}>{b.y}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — 4-up grid */}
      <section style={{ padding: '120px 60px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>OUR MISSION</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 64px', maxWidth: 700 }}>
            Redefining what<br/>personal watercraft can be.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {mission.map((m, i) => (
              <div key={m.n} style={{
                padding: '32px 28px 40px',
                borderLeft: i ? '1px solid var(--hairline)' : 0,
              }}>
                <div className="font-mono tracked-sm" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 28 }}>
                  {m.n}
                </div>
                <h3 className="font-display" style={{ fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 14px' }}>{m.h}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — 5-up grid, ink ground */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: '#fff' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 16 }}>PRODUCT PHILOSOPHY</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 64px', maxWidth: 800 }}>
            Every Wavekart is built<br/>with a clear philosophy.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            {philosophy.map((m, i) => (
              <div key={m.n} style={{
                padding: '32px 24px 40px',
                borderLeft: i ? '1px solid var(--hairline-light)' : 0,
              }}>
                <div className="font-mono tracked-sm" style={{ fontSize: 10, opacity: .55, marginBottom: 28 }}>
                  {m.n}
                </div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 14px' }}>{m.h}</h3>
                <p style={{ fontSize: 13, opacity: .75, lineHeight: 1.65, margin: 0 }}>{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '120px 60px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>OUR TEAM</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 48px', maxWidth: 900 }}>
            A global team with deep roots<br/>in engineering, industrial design,<br/>and action sports.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', margin: 0 }}>
              Our core team members have backgrounds from top international
              companies and brands — united by a shared vision: making
              water adventure electric, exciting, and accessible.
            </p>
            <div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 24 }}>OPERATIONS</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
                {[
                  { c: 'United States', city: 'New Haven · CT' },
                  { c: 'UAE',           city: 'Dubai'          },
                  { c: 'Asia',          city: 'Shenzhen'       },
                ].map((loc, i) => (
                  <div key={loc.c} style={{ padding: '24px 20px', borderLeft: i ? '1px solid var(--hairline)' : 0 }}>
                    <div className="font-display" style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 6px' }}>{loc.c}</div>
                    <div className="font-mono tracked-sm" style={{ fontSize: 10, color: 'var(--warm-grey)' }}>{loc.city}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: 'var(--warm-grey)', marginTop: 28, lineHeight: 1.6 }}>
                With a growing network of riders and partners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '100px 60px', background: '#FAFAF8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>INQUIRIES</div>
            <h2 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Reserve, partner, press.</h2>
            <a href={MAIL_INQ} style={{ fontSize: 18, color: 'var(--ink)' }}>info@iwavekart.com</a>
          </div>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>OWNER SUPPORT</div>
            <h2 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: '0 0 16px' }}>Service, parts, advice.</h2>
            <a href={MAIL_SUPPORT} style={{ fontSize: 18, color: 'var(--ink)' }}>support@iwavekart.com</a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
window.AboutPage = AboutPage;
