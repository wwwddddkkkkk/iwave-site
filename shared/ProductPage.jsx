// shared/ProductPage.jsx — Apple/DJI-style product page. Renders for S or X.
// Brief: hero, statement, 3 feature blocks, color picker, specs, CTA.

// Shared FAQ items (apply to both models)
const SHARED_FAQS = [
  { q: 'How do I swap the battery in seconds?',
    a: (
      <React.Fragment>
        <p style={{ margin: '0 0 12px' }}>Swapping batteries is quick and simple:</p>
        <ol style={{ margin: '0 0 12px', paddingLeft: 20 }}>
          <li>Turn off the boat.</li>
          <li>Open the battery box, lift out the battery, and insert a fully charged one.</li>
          <li>Close the box securely — you’re ready to go.</li>
        </ol>
        <p style={{ margin: 0 }}><em>Pro tip:</em> always double-check the battery seal to keep your boat protected.</p>
      </React.Fragment>
    ) },
  { q: 'How do I enjoy longer rides?',
    a: (
      <React.Fragment>
        <p style={{ margin: '0 0 12px' }}>The battery lasts approximately 60–90 minutes under continuous riding. In real life, you’re rarely holding the throttle non-stop — cruising, drifting, and pausing extend that significantly.</p>
        <p style={{ margin: '0 0 12px' }}>In our test rides, groups of 4–5 people take 10–15 minute turns each and easily enjoy 2–4 rounds on a single battery.</p>
        <p style={{ margin: 0 }}>For intense riders or families who love to share, we recommend a second battery. Swapping takes just minutes — and the fun continues all day.</p>
      </React.Fragment>
    ) },
  { q: 'What if I don’t like fast speed?',
    a: (
      <React.Fragment>
        <p style={{ margin: '0 0 12px' }}>Your boat adapts to your mood. Glide slowly to enjoy the view, or push the throttle for a go-kart-on-water experience. Ride at your own pace — the experience is yours to create.</p>
        <p style={{ margin: 0, fontSize: 13, color: 'var(--warm-grey)' }}><em>Safety:</em> in most regions, minors must be accompanied by an adult. Please check local regulations and ride responsibly.</p>
      </React.Fragment>
    ) },
  { q: 'How do I clean the boat?',
    a: 'Rinse with fresh water after every ride. Avoid high-pressure washers on electronic components. For the body, use a soft cloth and mild detergent — treat it like your favorite car or sports gear.' },
  { q: 'Charging tips',
    a: (
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Always use the original charger provided. Connect the charger before plugging it into the outlet.</li>
        <li>Charge in a cool, dry place away from direct sunlight.</li>
        <li>Do not leave the battery on charge unattended for extended periods.</li>
      </ul>
    ) },
  { q: 'Safety & maintenance',
    a: (
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Perform a pre-ride check for loose components or visible damage.</li>
        <li>Store the boat in a shaded area or indoors when not in use.</li>
        <li>If any issues occur (e.g. power failure, controller pairing), refer to the user manual or contact our support team.</li>
      </ul>
    ) },
  { q: 'What if my boat needs service?',
    a: (
      <React.Fragment>
        <p style={{ margin: '0 0 12px' }}>Every boat comes with a 12-month warranty. If something breaks, we ship replacement parts free of charge to your address or directly to your service provider.</p>
        <p style={{ margin: '0 0 12px' }}>After the warranty expires, we continue to supply replacement parts at fair prices so you can keep enjoying your boat for years.</p>
        <p style={{ margin: 0 }}>Choose how to handle repairs: follow our step-by-step video guides yourself, or bring it to an authorized service provider — either way, our team is here to help.</p>
      </React.Fragment>
    ) },
];

const PRODUCT = {
  S: {
    name: 'Wavekart S',
    edition: 'Sport Edition',
    tag: 'COMPACT · SPORT',
    headline: 'Light. Quick. Yours.',
    sub: 'For riders looking for portability and fun. Fits easily in an SUV for personal adventures.',
    price: '8,999',
    features: [
      { h: 'Sixty kilograms.',         p: 'Light enough to slide into the back of an SUV. Two adults can lift it from parking lot to lake.' },
      { h: 'Silent electric drive.',   p: 'Zero emissions. Reef-friendly. A throttle that responds in milliseconds.' },
      { h: 'Ten-second battery swap.', p: '5.2 kWh / 72V Li-ion, certified to UN38.3 and MSDS. Charge in the garage, swap on the dock.' },
    ],
    specs: [
      ['Top speed',            '35–50 km/h'],
      ['Run time',             '60–90 min'],
      ['Battery capacity',     '5.2 kWh / 72V'],
      ['Battery cell',         'Lithium'],
      ['Charging voltage',     '110V / 220V'],
      ['Max load',             '300 lbs'],
      ['Hull weight',          '60 kg + 26 kg battery'],
      ['Product size',         '1950 × 850 × 650 mm'],
      ['Package size',         '2060 × 900 × 800 mm'],
      ['Material',             'Fiberglass'],
      ['Drive',                'Electric jet'],
      ['Capacity',             '1 rider'],
      ['Standard accessories', 'Bumper, deck cover'],
      ['Certification',        'UN38.3 · MSDS · HIN (US)'],
      ['Warranty',             '12 months'],
      ['Lead time',            '~60 days'],
    ],
    faqs: [
      { q: 'What is the bumper for?',
        a: (
          <React.Fragment>
            <p style={{ margin: '0 0 12px' }}>Every Wavekart S comes with a complimentary bumper, designed to enhance your experience: it adds extra stability in choppy waters, and provides an additional layer of protection when docking or maneuvering near other boats.</p>
            <p style={{ margin: '0 0 12px' }}><em>For rentals:</em> we highly recommend installing the bumper — it ensures a safer, more stable ride for first-time riders.</p>
            <p style={{ margin: 0 }}><em>For personal use:</em> install it for added comfort in rougher conditions, or remove it for a sleeker look in calm waters.</p>
          </React.Fragment>
        ) },
      { q: 'How easy is it to handle & transport?',
        a: (
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>With the battery removed, the hull is 60 kg — two adults can easily lift and carry it.</li>
            <li>With a small trailer, even a single person can tow it effortlessly.</li>
            <li>Two men and two women can comfortably carry it together from parking lot to lake front.</li>
            <li>The boat fits inside most SUV trunks — no trailer needed unless you prefer one.</li>
          </ul>
        ) },
      ...SHARED_FAQS,
    ],
  },
  X: {
    name: 'Wavekart X',
    edition: 'Family Edition',
    tag: 'SPACIOUS · FAMILY',
    headline: 'Built for the dock.',
    sub: 'Ideal for resort rentals and commercial operations — or your private lake. A spacious hull, designed to be shared.',
    price: 'On request',
    features: [
      { h: 'HDPE marine hull.',        p: 'High-density polyethylene. Highly durable, impact-resistant. Built for shared use and salt water.' },
      { h: 'Family-ready stability.',  p: 'A roomier hull and wider stance. Made for first-time riders, guests, and longer sessions.' },
      { h: 'Same silent drive.',       p: 'Zero emissions, zero engine noise. Welcome on every marina, every reef.' },
    ],
    specs: [
      ['Top speed',            '35–50 km/h'],
      ['Run time',             '60–90 min'],
      ['Battery capacity',     '6.4 kWh / 72V'],
      ['Battery cell',         'Lithium'],
      ['Charging voltage',     '110V / 220V'],
      ['Max load',             '300 lbs'],
      ['Hull weight',          '70 kg + 30 kg battery'],
      ['Product size',         '2100 × 1150 × 660 mm'],
      ['Package size',         '2250 × 1200 × 800 mm'],
      ['Material',             'HDPE (high-density polyethylene)'],
      ['Drive',                'Electric jet'],
      ['Capacity',             '1 rider'],
      ['Standard accessories', 'Deck cover'],
      ['Certification',        'UN38.3 · MSDS · HIN (US)'],
      ['Warranty',             '12 months'],
      ['Lead time',            '~60 days'],
    ],
    faqs: [
      { q: 'What’s the difference from Wavekart S?',
        a: (
          <React.Fragment>
            <p style={{ margin: '0 0 12px' }}>Both models deliver the same signature Wavekart experience — fast, fun, and incredibly intuitive. The difference comes down to size, material, and usage style.</p>
            <p style={{ margin: '0 0 12px' }}><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Wavekart X</strong> is larger, roomier, and built with HDPE (high-density polyethylene). Highly durable and impact-resistant — perfect for rental operations and family use.</p>
            <p style={{ margin: '0 0 12px' }}><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Wavekart S</strong> is more compact and lightweight, with a fiberglass body for a sleek, premium finish. Ideal for private owners and luxury resorts. It also fits in most SUV trunks and can be carried by two adults.</p>
            <p style={{ margin: 0 }}>Both share the same core performance — choose the one that best fits your lifestyle or business.</p>
          </React.Fragment>
        ) },
      ...SHARED_FAQS,
    ],
  },
};

function ProductPage({ model }) {
  const p = PRODUCT[model];
  const colorList = getColors(model);
  const [color, setColor] = React.useState(colorList[0].hex);
  const active = colorList.find(c => c.hex === color) || colorList[0];

  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active={model.toLowerCase()} />

      {/* HERO — Apple-style: tag, edition, headline, sub, big product shot below */}
      <section style={{ padding: '80px 60px 40px', textAlign: 'center' }}>
        <div className="tracked-xl" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 18 }}>{p.tag}</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.95,
          letterSpacing: '-0.04em', fontWeight: 200, margin: '0 0 12px',
        }}>{p.name}</h1>
        <div className="font-serif" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--warm-grey)', marginBottom: 24 }}>
          {p.edition}
        </div>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.5 }}>{p.sub}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <BuyCTA model={model} />
          <a href="compare.html" style={{
            padding: '14px 28px', borderRadius: 999, fontSize: 13,
            border: '1px solid var(--ink)', color: 'var(--ink)', textDecoration: 'none',
          }}>Compare →</a>
        </div>
      </section>

      {/* HERO PRODUCT SHOT */}
      <section style={{ padding: '20px 60px 100px' }}>
        <div style={{
          position: 'relative', maxWidth: 1200, margin: '0 auto',
          aspectRatio: '16/9', background: '#FAFAF8', borderRadius: 24, overflow: 'hidden',
        }}>
          <KartImage model={model} color={color} />
          <div className="font-mono tracked-sm" style={{ position: 'absolute', bottom: 24, left: 24, fontSize: 10, color: 'var(--warm-grey)' }}>
            MODEL · {model} · {active.name}
          </div>
        </div>

        {/* Color picker */}
        <div style={{ maxWidth: 1200, margin: '40px auto 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)' }}>FINISH · {active.name}</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {colorList.map(c => (
              <button key={c.hex} onClick={() => setColor(c.hex)} title={c.name}
                style={{
                  width: 34, height: 34, borderRadius: '50%', padding: 0,
                  background: c.hex, cursor: 'pointer',
                  border: color === c.hex ? '2px solid var(--ink)' : '1px solid var(--hairline)',
                  outline: color === c.hex ? '1px solid var(--ink)' : 0, outlineOffset: 3,
                  transition: 'all .2s',
                }}/>
            ))}
          </div>
        </div>
      </section>

      {/* BIG STATEMENT — DJI-style headline section */}
      <section style={{ padding: '120px 60px', textAlign: 'center', background: '#FAFAF8', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
        <h2 className="font-display" style={{
          fontSize: 'clamp(40px, 5.5vw, 80px)', fontWeight: 200, letterSpacing: '-0.03em',
          lineHeight: 1.1, margin: 0, maxWidth: 900, marginInline: 'auto', textWrap: 'balance',
        }}>
          {p.headline}
        </h2>
      </section>

      {/* FEATURE BLOCKS — Apple-style, 3 stacked cards */}
      <section style={{ padding: '120px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1300, margin: '0 auto' }}>
          {p.features.map((f, i) => (
            <article key={i} style={{
              background: '#FAFAF8', borderRadius: 20, padding: 36,
              minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div className="iw-placeholder" style={{ aspectRatio: '4/3', borderRadius: 12, marginBottom: 28 }}>
                <div className="iw-placeholder-label">FEATURE {String(i+1).padStart(2,'0')}</div>
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 12px' }}>{f.h}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{f.p}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HEADLINE NUMBERS */}
      <section style={{ padding: '120px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>BY THE NUMBERS</div>
        <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 80px' }}>
          Every figure, considered.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { v: 50, u: 'km/h', l: 'TOP SPEED' },
            { v: 90, u: 'min',  l: 'RUN TIME' },
            { v: model === 'X' ? 70 : 60, u: 'kg', l: 'HULL WEIGHT' },
            { v: 10, u: 'sec', l: 'BATTERY SWAP' },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 24, paddingRight: 32, borderLeft: i ? '1px solid var(--hairline)' : 0, paddingLeft: i ? 32 : 0 }}>
              <div className="font-display" style={{ fontSize: 72, fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <CountUp to={s.v}/>
                <span style={{ fontSize: 16, color: 'var(--warm-grey)' }}>{s.u}</span>
              </div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginTop: 16 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS — full table */}
      <section style={{ padding: '120px 60px', background: '#FAFAF8', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>SPECIFICATIONS</div>
          <h2 className="font-display" style={{ fontSize: 48, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 48px' }}>
            {p.name} · Tech Specs
          </h2>
          <dl style={{ margin: 0 }}>
            {p.specs.map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', padding: '18px 0', borderTop: '1px solid var(--hairline)', fontSize: 14 }}>
                <dt style={{ color: 'var(--warm-grey)' }}>{k}</dt>
                <dd style={{ margin: 0 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PRODUCT FAQ — model-specific accordion */}
      <section style={{ padding: '120px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 60 }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>YOU MIGHT WANT TO KNOW</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Wavekart {model}<br/>questions.
            </h2>
            <p style={{ fontSize: 13, color: 'var(--warm-grey)', lineHeight: 1.7, margin: 0 }}>
              More general questions on the <a href="faq.html" style={{ color: 'var(--ink)' }}>FAQ page</a> — or reach out at <a href="mailto:info@iwavekart.com" style={{ color: 'var(--ink)' }}>info@iwavekart.com</a>.
            </p>
          </div>
          <div>
            {p.faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a}/>)}
            <div style={{ borderTop: '1px solid var(--hairline)' }}/>
          </div>
        </div>
      </section>

      {/* FINAL CTA — single dark band */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: '#fff', textAlign: 'center' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 24 }}>RESERVE</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 24px' }}>
          {p.name}.{model === 'S' ? <React.Fragment><br/>From ${p.price}.</React.Fragment> : <React.Fragment><br/>Pricing on request.</React.Fragment>}
        </h2>
        <p style={{ opacity: .75, maxWidth: 480, margin: '0 auto 40px', fontSize: 15, lineHeight: 1.6 }}>
          We build each Wavekart to order. Reach out and our team will be in touch within 48 hours.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href={`mailto:info@iwavekart.com?subject=Reserve%20Wavekart%20${model}&body=I'm%20interested%20in%20reserving%20a%20Wavekart%20${model}.%0A%0AName:%0ALocation:%0APreferred%20finish:`} style={{
            display: 'inline-block', padding: '16px 36px', borderRadius: 999,
            background: '#fff', color: 'var(--ink)', fontFamily: 'inherit',
            fontSize: 14, fontWeight: 500, textDecoration: 'none',
          }}>Reserve Wavekart {model} →</a>
          <a href={`mailto:info@iwavekart.com?subject=Schedule%20a%20Wavekart%20${model}%20test%20ride`} style={{
            display: 'inline-block', padding: '16px 36px', borderRadius: 999,
            background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)',
            fontFamily: 'inherit', fontSize: 14, textDecoration: 'none',
          }}>Schedule a test ride →</a>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

window.ProductPage = ProductPage;
