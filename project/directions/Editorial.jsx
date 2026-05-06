// EditorialDirection.jsx — Direction 3: Magazine asymmetric, serif numerals
// Heavier rhythm, oversized italic numerals, asymmetric grid, lifestyle-led.

const { useState: useStateE, useEffect: useEffectE, useRef: useRefE } = React;

function CountUpE({ to, duration = 1400 }) {
  const [val, setVal] = useStateE(0);
  const ref = useRefE();
  useEffectE(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4, root: el.closest('.iw-frame') });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}</span>;
}

function EditorialSite() {
  const [model, setModel] = useStateE('S');
  const [color, setColor] = useStateE('#d9d4c8');

  const colors = [
    { name: 'IVORY',   hex: '#d9d4c8' },
    { name: 'INK',     hex: '#1a1a17' },
    { name: 'OLIVE',   hex: '#5a5d3a' },
    { name: 'BRASS',   hex: '#9b7e4a' },
    { name: 'MARINE',  hex: '#264a55' },
  ];

  return (
    <div className="iw-frame font-body" style={{
      width: '100%', height: '100%', overflow: 'auto',
      background: 'var(--ivory)', color: 'var(--ink)',
      fontSize: 14, lineHeight: 1.6,
    }}>
      {/* MASTHEAD — newspaper-style */}
      <header style={{
        borderBottom: '2px solid var(--ink)',
        padding: '20px 48px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        background: 'var(--ivory)',
        position: 'sticky', top: 0, zIndex: 20,
      }}>
        <div className="tracked-md" style={{ fontSize: 10 }}>VOL. I · MMXXVI</div>
        <div className="font-serif" style={{ fontSize: 36, fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.04em' }}>iwave</div>
        <nav className="tracked-sm" style={{ display: 'flex', gap: 24, fontSize: 10 }}>
          <a>SHOP</a><a>JOURNAL</a><a>ABOUT</a><a>RESERVE</a>
        </nav>
      </header>

      {/* HERO — split editorial */}
      <section style={{ borderBottom: '1px solid var(--ink)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: 640 }}>
          <div className="iw-water" style={{ position: 'relative', color: 'var(--ivory)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="tracked-md" style={{ fontSize: 10, opacity: .75 }}>FEATURE · 01</div>
            <div>
              <div className="font-serif" style={{ fontSize: 'clamp(80px, 11vw, 180px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.02em' }}>
                A new<br/>era.
              </div>
              <div style={{ display: 'flex', gap: 40, marginTop: 28, fontSize: 11 }} className="tracked-sm">
                <span>WATCH FILM</span>
                <span>RESERVE</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid var(--ink)' }}>
            <div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 24 }}>EDITOR'S LETTER</div>
              <p className="font-serif" style={{ fontSize: 26, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, margin: '0 0 20px', color: 'var(--ink)', textWrap: 'balance' }}>
                The first electric jet go-kart, born in a Yale laboratory and
                refined for those who collect moments, not specifications.
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
                Hop in. Throttle forward. Drift. Repeat. The Wavekart asks
                nothing of its rider but presence.
              </p>
            </div>
            <div className="iw-placeholder" style={{ aspectRatio: '4/3', marginTop: 24 }}>
              <div className="iw-placeholder-label">EDITORIAL · STILL LIFE</div>
            </div>
          </div>
        </div>
      </section>

      {/* BIG NUMBER — editorial */}
      <section style={{ padding: '120px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0 }}>
          {[
            { v: 50, u: 'km/h', l: 'top speed' },
            { v: 60, u: 'kg',   l: 'hull weight' },
            { v: 90, u: 'min',  l: 'run time' },
            { v: 0,  u: 'g',    l: 'emissions' },
          ].map((s, i) => (
            <div key={i} style={{ borderLeft: i ? '1px solid var(--hairline)' : 0, padding: '0 28px', textAlign: i % 2 ? 'right' : 'left' }}>
              <div className="font-serif" style={{ fontSize: 'clamp(80px, 10vw, 140px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>
                <CountUpE to={s.v}/>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', justifyContent: i % 2 ? 'flex-end' : 'flex-start', marginTop: 8 }}>
                <span className="font-serif" style={{ fontSize: 22, fontStyle: 'italic' }}>{s.u}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--hairline)' }}/>
                <span className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)' }}>{s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT — magazine spread with toggle */}
      <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <div className="tracked-md" style={{ fontSize: 10 }}>FEATURE · 02 · THE COLLECTION</div>
          <div className="font-serif" style={{ fontSize: 14, fontStyle: 'italic' }}>p. 02 — 03</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 60 }}>
          <div>
            <div style={{ display: 'flex', gap: 0, marginBottom: 32, borderBottom: '1px solid var(--ink)' }}>
              {['S','X'].map(m => (
                <button key={m} onClick={() => setModel(m)} className="tracked-md"
                  style={{
                    padding: '14px 0', flex: 1, border: 0, background: 'transparent',
                    fontSize: 11, cursor: 'pointer', fontFamily: 'inherit',
                    color: model === m ? 'var(--ink)' : 'var(--warm-grey)',
                    borderBottom: model === m ? '2px solid var(--ink)' : '2px solid transparent',
                    marginBottom: -1, transition: 'all .2s',
                  }}>
                  WAVEKART {m}
                </button>
              ))}
            </div>

            <div className="font-serif" style={{ fontSize: 96, fontStyle: 'italic', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 20 }}>
              {model}.
            </div>
            <p className="font-serif" style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, marginBottom: 24, textWrap: 'balance' }}>
              {model === 'S'
                ? 'Compact. Electric. Sized for the back of an SUV.'
                : 'Larger hull. Marine-grade. Built for the dock and the resort.'}
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 36, maxWidth: 360 }}>
              {model === 'S'
                ? 'A solo craft refined for the adventurer who values portability without forfeiting precision. 60 kilograms of considered engineering.'
                : 'For yacht owners and resort operators. Greater stability, wider turning radius, and the same effortless throttle.'}
            </p>

            <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 12 }}>FINISH</div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 36 }}>
              {colors.map(c => (
                <button key={c.hex} onClick={() => setColor(c.hex)}
                  style={{
                    width: 28, height: 28, borderRadius: 0,
                    background: c.hex, cursor: 'pointer', padding: 0,
                    border: color === c.hex ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                    outline: color === c.hex ? '1px solid var(--ink)' : 0,
                    outlineOffset: 3,
                  }}/>
              ))}
            </div>
            <div className="font-mono tracked-sm" style={{ fontSize: 10, marginBottom: 28 }}>
              REF · {colors.find(c=>c.hex===color)?.name} · ${'8,800'} USD
            </div>

            <button className="tracked-md" style={{
              border: '1px solid var(--ink)', background: 'transparent', color: 'var(--ink)',
              padding: '16px 28px', fontSize: 10, cursor: 'pointer', fontFamily: 'inherit',
            }}>RESERVE WAVEKART {model} →</button>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="iw-placeholder" style={{ aspectRatio: '4/5', height: '100%' }}>
              <div className="iw-kart" style={{
                '--kart-color': color, position: 'absolute', inset: 0,
              }} key={`${model}-${color}`}>
                <div className="iw-kart-body iw-fade-in" style={{
                  width: model === 'X' ? '70%' : '58%',
                  height: model === 'X' ? '40%' : '34%',
                }}/>
              </div>
              <div className="font-mono tracked-sm" style={{ position: 'absolute', top: 20, left: 20, fontSize: 9, color: 'var(--warm-grey)' }}>
                FIG. {model === 'S' ? 'I' : 'II'}
              </div>
              <div className="font-mono tracked-sm" style={{ position: 'absolute', bottom: 20, right: 20, fontSize: 9, color: 'var(--warm-grey)' }}>
                {model === 'S' ? '2.1 m × 60 kg' : '2.6 m × 92 kg'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="tracked-md" style={{ fontSize: 10, marginBottom: 16 }}>FEATURE · 03 · A COMPARISON</div>
        <h2 className="font-serif" style={{ fontSize: 'clamp(56px, 7vw, 96px)', fontStyle: 'italic', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 60px' }}>
          Two crafts.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
          {[
            { m: 'S', specs: [['Length','2.1 m'],['Weight','60 kg'],['For','Solo · SUV']] },
            { m: 'X', specs: [['Length','2.6 m'],['Weight','92 kg'],['For','Yacht · Resort']] },
          ].map((c, i) => (
            <div key={c.m} style={{
              padding: '40px 32px', borderLeft: i ? '1px solid var(--hairline)' : 0,
            }}>
              <div className="font-serif" style={{ fontSize: 144, fontStyle: 'italic', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.04em' }}>
                {c.m}
              </div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginTop: 4, marginBottom: 32 }}>WAVEKART {c.m}</div>
              {c.specs.map(([k,v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderTop: '1px solid var(--hairline)', fontSize: 13 }}>
                  <span style={{ color: 'var(--warm-grey)' }}>{k}</span>
                  <span className="font-serif" style={{ fontStyle: 'italic', fontSize: 16 }}>{v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE — magazine spread */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--ink)' }}>
        <div style={{ padding: '0 48px', marginBottom: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, marginBottom: 16 }}>FEATURE · 04 · IN PRACTICE</div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontStyle: 'italic', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
              Wherever<br/>the water<br/>finds you.
            </h2>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: 420 }}>
            From the back of an SUV to the deck of a 60-foot yacht. From
            inland lake at sunrise to coastal drift at golden hour. The
            Wavekart adapts — quietly.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 0 }}>
          {[
            { ratio: '3/4', l: 'YACHT · DECK' },
            { ratio: '4/3', l: 'COASTAL DRIFT · GOLDEN HOUR' },
            { ratio: '3/4', l: 'SUV TRANSPORT' },
          ].map((p, i) => (
            <div key={i} className="iw-placeholder" style={{ aspectRatio: p.ratio, borderLeft: i ? '1px solid var(--hairline)' : 0 }}>
              <div className="iw-placeholder-label">{p.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — pull quotes */}
      <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="tracked-md" style={{ fontSize: 10, marginBottom: 60 }}>FEATURE · 05 · TESTIMONY</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          {[
            { name: 'Rober S.', role: 'Wavekart Owner · Florida', q: 'No gas smell. Reef-friendly. Charge and go. The ideal choice for an eco-conscious ride.' },
            { name: 'Philipp O.', role: 'Wavekart Owner · Lake Como', q: 'Light enough to fit in my SUV. Speed and maneuverability that delivers a truly thrilling experience.' },
          ].map(t => (
            <figure key={t.name} style={{ margin: 0 }}>
              <div className="font-serif" style={{ fontSize: 64, fontStyle: 'italic', fontWeight: 300, lineHeight: 1, marginBottom: 12 }}>“</div>
              <blockquote className="font-serif" style={{ fontSize: 24, fontStyle: 'italic', fontWeight: 300, lineHeight: 1.45, margin: '0 0 24px', textWrap: 'pretty' }}>
                {t.q}
              </blockquote>
              <figcaption className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)' }}>
                — {t.name.toUpperCase()} · {t.role.toUpperCase()}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* YALE ORIGIN */}
      <section style={{ padding: '120px 48px', borderBottom: '1px solid var(--ink)' }}>
        <div className="tracked-md" style={{ fontSize: 10, marginBottom: 16 }}>FEATURE · 06 · ORIGIN</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(56px, 7vw, 108px)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>
            Built<br/>at <span style={{ borderBottom: '1px solid currentColor', paddingBottom: 6 }}>Yale.</span>
          </h2>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--ink-2)', margin: '0 0 20px' }}>
              IWAVE began as an engineering thesis at Yale University — a
              quiet question about whether a watercraft could be both
              intimate and electric, both thrilling and silent.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--ink-2)', margin: 0 }}>
              Five years and dozens of prototypes later, the answer is
              parked in your driveway.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--ink)', textAlign: 'center' }}>
        <h3 className="font-serif" style={{ fontSize: 56, fontStyle: 'italic', fontWeight: 300, letterSpacing: '-0.02em', margin: '0 0 32px' }}>
          The Journal.
        </h3>
        <p style={{ fontSize: 13, color: 'var(--warm-grey)', marginBottom: 28 }}>
          Quarterly letters on water, craft, and life on the coast.
        </p>
        <div style={{ display: 'flex', maxWidth: 480, margin: '0 auto', borderBottom: '1px solid var(--ink)' }}>
          <input placeholder="your@email.com" style={{
            flex: 1, padding: '12px 4px', border: 0, background: 'transparent',
            outline: 0, fontFamily: 'inherit', fontSize: 14,
          }}/>
          <button className="tracked-md" style={{
            background: 'transparent', border: 0, fontSize: 10,
            fontFamily: 'inherit', cursor: 'pointer', padding: '12px 8px',
          }}>SUBSCRIBE →</button>
        </div>
      </section>

      <footer style={{ padding: '48px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60 }}>
        <div>
          <div className="font-serif" style={{ fontSize: 32, fontStyle: 'italic', fontWeight: 300, marginBottom: 16 }}>iwave</div>
          <p style={{ fontSize: 12, color: 'var(--warm-grey)', maxWidth: 280 }}>A Yale-born studio engineering the future of water craft.</p>
        </div>
        {[
          { h: 'WAVEKART', i: ['S','X','Compare','Reserve'] },
          { h: 'JOURNAL',  i: ['Issue 01','Issue 02','Archive'] },
          { h: 'CONTACT',  i: ['Inquiry','Dealers','Affiliate'] },
        ].map(c => (
          <div key={c.h}>
            <div className="tracked-md" style={{ fontSize: 9, marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
              {c.i.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ padding: '20px 48px 40px', borderTop: '1px solid var(--ink)', display: 'flex', justifyContent: 'space-between', fontSize: 10 }} className="tracked-sm">
        <span>© MMXXVI IWAVE · NEW HAVEN, CT</span>
        <span>VOL. I — 01</span>
      </div>
    </div>
  );
}

window.EditorialSite = EditorialSite;
