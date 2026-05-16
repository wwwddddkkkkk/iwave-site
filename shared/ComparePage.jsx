// shared/ComparePage.jsx — side-by-side comparison + FAQ
function ComparePage() {
  // Full official spec sheet
  const rows = [
    { k: 'Edition',           s: 'Sport',                       x: 'Family'                       },
    { k: 'Target users',      s: 'Personal · portability & fun', x: 'Commercial · resorts · families' },
    { k: 'Top speed',         s: '35–50 km/h',                  x: '35–50 km/h'                   },
    { k: 'Run time',          s: '60–90 min',                   x: '60–90 min'                    },
    { k: 'Battery capacity',  s: '5.2 kWh / 72V',               x: '6.4 kWh / 72V'                },
    { k: 'Battery cell',      s: 'Lithium',                     x: 'Lithium'                      },
    { k: 'Charging voltage',  s: '110V / 220V',                 x: '110V / 220V'                  },
    { k: 'Max load',          s: '300 lbs',                     x: '300 lbs'                      },
    { k: 'Material',          s: 'Fiberglass',                  x: 'HDPE (high-density polyethylene)' },
    { k: 'Product weight',    s: '60 kg + 26 kg battery',       x: '70 kg + 30 kg battery'        },
    { k: 'Product size',      s: '1950 × 850 × 650 mm',         x: '2100 × 1150 × 660 mm'         },
    { k: 'Package size',      s: '2060 × 900 × 800 mm',         x: '2250 × 1200 × 800 mm'         },
    { k: 'Std. accessories',  s: 'Bumper, deck cover',          x: 'Deck cover'                   },
    { k: 'Certification',     s: 'UN38.3 · MSDS · HIN (US)',    x: 'UN38.3 · MSDS · HIN (US)'     },
    { k: 'Warranty',          s: '12 months',                   x: '12 months'                    },
    { k: 'Lead time',         s: '~60 days',                    x: '~60 days'                     },
    { k: 'Best for',          s: 'SUV transport · solo',        x: 'Yacht · Resort · rental'      },
    { k: 'From',              s: '$8,999',                      x: 'On request'                   },
  ];

  const faqs = [
    { q: 'Which model is right for me?',
      a: (
        <React.Fragment>
          <p style={{ margin: '0 0 12px' }}>Both deliver the same signature Wavekart experience — fast, fun, and intuitive. The difference is size, material, and use case.</p>
          <p style={{ margin: '0 0 12px' }}><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Wavekart S</strong> — compact, lightweight fiberglass body. Sleek, premium, and SUV-friendly. Ideal for private owners and luxury resorts.</p>
          <p style={{ margin: 0 }}><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Wavekart X</strong> — larger and roomier, built with HDPE. Highly durable and impact-resistant. Perfect for rental operations, hotels, and family use.</p>
        </React.Fragment>
      ) },
    { q: 'Are the performance specs the same?',
      a: 'Yes. Both models share the same core performance — 35–50 km/h top speed, 60–90 minutes of run time, and the same silent electric jet drive. The X carries a larger 6.4 kWh battery for higher-duty cycles.' },
    { q: 'Can I use them on the ocean as well as lakes?',
      a: 'Both are rated for fresh and salt water. The X\'s HDPE hull is particularly forgiving on shared shorelines and against the dings of busy marinas.' },
    { q: 'Do I need a license?',
      a: 'In most regions, no special license is required. Each Wavekart ships with a Hull Identification Number (HIN) for U.S. registration. Please check local regulations.' },
    { q: 'What\'s the warranty and support like?',
      a: 'Both come with a 12-month standard warranty. We ship replacement parts free of charge during the warranty period, and continue supplying parts at fair prices afterward.' },
    { q: 'What about pricing for Wavekart X?',
      a: (
        <React.Fragment>
          <p style={{ margin: '0 0 12px' }}>Wavekart X pricing is provided on request, since most orders involve fleet quantities, branding, or commercial customization.</p>
          <p style={{ margin: 0 }}>For a quote, email <a href="mailto:info@iwavekart.com" style={{ color: 'var(--ink)' }}>info@iwavekart.com</a>.</p>
        </React.Fragment>
      ) },
  ];

  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active="compare"/>

      <section style={{ padding: '80px 60px 40px', textAlign: 'center' }}>
        <div className="tracked-xl" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 18 }}>COMPARE</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1, margin: '0 0 24px' }}>
          S or X.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto', lineHeight: 1.5 }}>
          Two crafts, one ethos. Choose by who's riding, where, and how often.
        </p>
      </section>

      {/* Two-column hero cards */}
      <section style={{ padding: '60px 60px', maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { m: 'S', edition: 'Sport Edition',  tag: 'COMPACT · 60 KG · FIBERGLASS', tagline: 'Portability and fun for personal adventures.', price: '$8,999',     priceNote: 'Starting from', href: 'wavekart-s.html' },
            { m: 'X', edition: 'Family Edition', tag: 'SPACIOUS · 70 KG · HDPE',      tagline: 'Designed for resorts, rentals, and shared shorelines.', price: 'On request', priceNote: 'Pricing',       href: 'wavekart-x.html' },
          ].map(c => (
            <div key={c.m} style={{
              background: '#FAFAF8', borderRadius: 24, padding: 40,
              display: 'flex', flexDirection: 'column',
            }}>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 12 }}>{c.tag}</div>
              <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 4px', lineHeight: 1 }}>
                Wavekart {c.m}
              </h2>
              <div className="font-serif" style={{ fontSize: 20, fontStyle: 'italic', color: 'var(--warm-grey)', marginBottom: 20 }}>
                {c.edition}
              </div>
              <p style={{ color: 'var(--ink-2)', marginBottom: 28, fontSize: 16, lineHeight: 1.55 }}>{c.tagline}</p>
              <div style={{ aspectRatio: '4/3', background: '#fff', borderRadius: 12, marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
                <KartImage model={c.m} color={getColors(c.m)[0].hex} />
              </div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 4 }}>{c.priceNote.toUpperCase()}</div>
              <div className="font-display" style={{ fontSize: 28, fontWeight: 200, marginBottom: 24 }}>{c.price}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                <a href={c.href} style={{
                  flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: 999,
                  background: 'var(--ink)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 500,
                }}>View Wavekart {c.m}</a>
                <a href={`mailto:info@iwavekart.com?subject=Reserve%20Wavekart%20${c.m}`} style={{
                  flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: 999,
                  border: '1px solid var(--ink)', color: 'var(--ink)', textDecoration: 'none', fontSize: 13,
                }}>Reserve</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spec comparison table — full official sheet */}
      <section style={{ padding: '80px 60px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>SIDE BY SIDE</div>
          <h2 className="font-display" style={{ fontSize: 48, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 48px' }}>
            Specifications.
          </h2>
          <div style={{ borderTop: '1px solid var(--ink)' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '20px 0', borderBottom: '1px solid var(--ink)' }} className="tracked-md">
              <div style={{ fontSize: 10, color: 'var(--warm-grey)' }}></div>
              <div style={{ fontSize: 11 }}>WAVEKART S</div>
              <div style={{ fontSize: 11 }}>WAVEKART X</div>
            </div>
            {rows.map(r => (
              <div key={r.k} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '18px 0', borderBottom: '1px solid var(--hairline)', fontSize: 14 }}>
                <div style={{ color: 'var(--warm-grey)' }}>{r.k}</div>
                <div>{r.s}</div>
                <div>{r.x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section style={{ padding: '100px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 60 }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>CHOOSING</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Questions<br/>about choosing.
            </h2>
            <p style={{ fontSize: 13, color: 'var(--warm-grey)', lineHeight: 1.7, margin: 0 }}>
              More on the <a href="faq.html" style={{ color: 'var(--ink)' }}>FAQ page</a> — or write us at <a href="mailto:info@iwavekart.com" style={{ color: 'var(--ink)' }}>info@iwavekart.com</a>.
            </p>
          </div>
          <div>
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a}/>)}
            <div style={{ borderTop: '1px solid var(--hairline)' }}/>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: '#fff', textAlign: 'center' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 24 }}>READY?</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 32px' }}>
          Reserve, or<br/>schedule a test.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href="mailto:info@iwavekart.com?subject=Reserve%20a%20Wavekart" style={{
            display: 'inline-block', padding: '16px 32px', borderRadius: 999,
            background: '#fff', color: 'var(--ink)', fontFamily: 'inherit',
            fontSize: 14, fontWeight: 500, textDecoration: 'none',
          }}>Reserve</a>
          <a href="mailto:info@iwavekart.com?subject=Schedule%20a%20Wavekart%20test%20ride" style={{
            display: 'inline-block', padding: '16px 32px', borderRadius: 999,
            background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)',
            fontFamily: 'inherit', fontSize: 14, textDecoration: 'none',
          }}>Schedule a test ride</a>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
window.ComparePage = ComparePage;
