// shared/FAQPage.jsx — FAQ with sectioned accordion. Brief, useful only.

function FAQSection({ num, title, items }) {
  return (
    <section style={{ padding: '60px 60px', borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60 }}>
        <div>
          <div className="font-mono tracked-sm" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 12 }}>
            {num}
          </div>
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 300, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.15 }}>
            {title}
          </h2>
        </div>
        <div>
          {items.map((it, i) => (
            <FAQItem key={it.q} q={it.q} a={it.a}/>
          ))}
          <div style={{ borderTop: '1px solid var(--hairline)' }}/>
        </div>
      </div>
    </section>
  );
}

function FAQPage() {
  const product = [
    { q: 'Who are WaveKarts suitable for?',
      a: 'WaveKarts are beginner-friendly and safe for both adults and teens. They\'re ideal for yachts, lakes, resorts, rental operations, and private docks.' },
    { q: 'What\'s the top speed and battery life?',
      a: 'Top speed reaches up to 32 mph (52 km/h), with a battery runtime of 60–90 minutes depending on riding style and conditions.' },
    { q: 'Can it drift on water like a go-kart?',
      a: 'Absolutely. Our unique hull design enables controlled water drifting — a true go-kart-style experience on open water.' },
    { q: 'Do I need training to operate it?',
      a: 'No training needed. The vehicle is extremely intuitive — most riders are comfortable within five minutes.' },
  ];

  const battery = [
    { q: 'What kind of battery does IWAVE use? Is it safe?',
      a: 'We use high-quality, certified lithium battery packs with built-in protections for overheating, overcharging, and short-circuiting. Batteries comply with global standards including UN38.3 and MSDS.' },
    { q: 'Can I remove or replace the battery?',
      a: 'Yes. The battery features a quick-swap design — changeable in roughly 10 seconds.' },
  ];

  const purchase = [
    { q: 'What\'s the price and where can I buy it?',
      a: (
        <React.Fragment>
          <p style={{ margin: '0 0 12px' }}>
            The starting retail price is <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>$8,999 USD</strong>. You can order directly through our website or through an authorized IWAVE dealer.
          </p>
          <p style={{ margin: 0 }}>
            For customization or business inquiries, email <a href="mailto:info@iwavekart.com" style={{ color: 'var(--ink)' }}>info@iwavekart.com</a>.
          </p>
        </React.Fragment>
      ) },
    { q: 'Do you ship internationally?',
      a: 'Yes — we ship worldwide. Delivery costs vary based on destination and order quantity. Please contact us for an estimate.' },
    { q: 'Is there a warranty? What if something breaks?',
      a: 'All IWAVE products come with a 12-month standard warranty. Outside dealer-supported regions, we provide replacement parts and remote technical support. Extended warranties and service partnerships are available in select locations.' },
    { q: 'I run a hotel or rental business. Do you offer B2B packages?',
      a: 'Yes — we offer bulk pricing, customized branding, and exclusive partnerships for hotels, resorts, rental fleets, and entertainment venues. Reach out to explore collaboration.' },
    { q: 'What\'s the lead time to receive a boat?',
      a: 'Production takes approximately 15 business days. Shipping time depends on your method and destination. In total, plan for a lead time of around 60 days.' },
  ];

  const regulations = [
    { q: 'Do I need a license to operate it?',
      a: 'In most regions, no special license is required. Please check with local authorities for specific requirements in your area.' },
    { q: 'Are WaveKarts certified for legal use?',
      a: 'Yes. WaveKarts meet key international safety and transport standards including MSDS, UN38.3, and personal watercraft flotation requirements. For the U.S. market, each WaveKart is issued a Hull Identification Number (HIN), making it eligible for registration in accordance with local regulations.' },
  ];

  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active="faq"/>

      {/* HERO */}
      <section style={{ padding: '120px 60px 80px', textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div className="tracked-xl" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 18 }}>FAQ</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 200, letterSpacing: '-0.04em',
          lineHeight: 0.98, margin: '0 0 32px',
        }}>
          Questions, answered.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto', lineHeight: 1.5 }}>
          The first electric water go-kart, born at Yale. Here's everything
          you need to know before reserving yours.
        </p>
      </section>

      <FAQSection num="I"   title="Product"            items={product}/>
      <FAQSection num="II"  title="Battery & safety"   items={battery}/>
      <FAQSection num="III" title="Purchase & support" items={purchase}/>
      <FAQSection num="IV"  title="Regulations & use"  items={regulations}/>

      {/* STILL HAVE QUESTIONS — dark accent block */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: '#fff', textAlign: 'center' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 24 }}>STILL HAVE QUESTIONS</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 32px' }}>
          We're happy to help.
        </h2>
        <p style={{ opacity: .75, maxWidth: 480, margin: '0 auto 48px', fontSize: 15, lineHeight: 1.6 }}>
          Reach out and our team will respond within 48 hours.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href="mailto:info@iwavekart.com?subject=Wavekart%20Inquiry" style={{
            display: 'inline-block', padding: '16px 32px', borderRadius: 999,
            background: '#fff', color: 'var(--ink)', fontFamily: 'inherit',
            fontSize: 14, fontWeight: 500, textDecoration: 'none',
          }}>info@iwavekart.com</a>
          <a href="mailto:support@iwavekart.com?subject=Wavekart%20Support" style={{
            display: 'inline-block', padding: '16px 32px', borderRadius: 999,
            background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)',
            fontFamily: 'inherit', fontSize: 14, textDecoration: 'none',
          }}>support@iwavekart.com</a>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
window.FAQPage = FAQPage;
