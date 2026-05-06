// IvoryDirection.jsx — Direction 1: Hermès / Bottega quiet luxury, ivory ground
// Cream + ink, hairline rules, oversized restrained type, lots of breathing room.

const { useState, useEffect, useRef } = React;

// Animated counter that runs when in view
function CountUp({ to, suffix = '', duration = 1400, format = (n)=>n }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
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
  return <span ref={ref}>{format(val)}{suffix}</span>;
}

function IvorySite() {
  const [model, setModel] = useState('S');
  const [color, setColor] = useState('#d9d4c8');

  const colors = [
    { name: 'BONE',     hex: '#d9d4c8' },
    { name: 'GRAPHITE', hex: '#2a2a26' },
    { name: 'SAFFRON',  hex: '#c89645' },
    { name: 'OCEAN',    hex: '#264a55' },
    { name: 'CORAL',    hex: '#b8533c' },
  ];

  return (
    <div className="iw-frame font-body" style={{
      width: '100%', height: '100%', overflow: 'auto',
      background: 'var(--ivory)', color: 'var(--ink)',
      fontSize: 14, lineHeight: 1.55,
    }}>

      {/* NAV */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(244,241,236,0.86)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--hairline)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 36px' }}>
          <div className="font-display tracked-xl" style={{ fontSize: 14, fontWeight: 300 }}>IWAVE</div>
          <nav className="tracked-md" style={{ display: 'flex', gap: 36, fontSize: 10.5, color: 'var(--ink)' }}>
            <a>Wavekart S</a><a>Wavekart X</a><a>Compare</a><a>Discover</a><a>Journal</a>
          </nav>
          <div className="tracked-md" style={{ display: 'flex', gap: 24, fontSize: 10.5 }}>
            <span>Account</span><span>Cart (0)</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="iw-water" style={{ padding: '120px 60px 100px', color: 'var(--ivory)', minHeight: 720, position: 'relative' }}>
        <div className="tracked-lg" style={{ fontSize: 10, opacity: .65, marginBottom: 28 }}>
          MMXXVI · COLLECTION 01
        </div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(64px, 9vw, 148px)',
          lineHeight: 0.92, letterSpacing: '-0.04em', fontWeight: 200,
          margin: 0, maxWidth: 1100,
        }}>
          A new era,<br/>on water.
        </h1>
        <div style={{
          position: 'absolute', bottom: 60, left: 60, right: 60,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <p className="font-body" style={{ maxWidth: 360, fontSize: 13.5, opacity: .8, lineHeight: 1.7, margin: 0 }}>
            The first electric jet go-kart, engineered for those who measure
            craft in moments — not specifications.
          </p>
          <div className="tracked-md" style={{ fontSize: 10.5, display: 'flex', gap: 32, alignItems: 'center' }}>
            <span style={{ borderBottom: '1px solid currentColor', paddingBottom: 4 }}>Discover Wavekart</span>
            <span>Reserve →</span>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section style={{ padding: '140px 60px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 40 }}>
          I · INTRODUCTION
        </div>
        <p className="font-display" style={{ fontSize: 38, lineHeight: 1.35, fontWeight: 200, letterSpacing: '-0.02em', margin: 0, textWrap: 'balance' }}>
          Hop in. Push the throttle.
          The water responds — quietly,
          precisely, without compromise.
          A craft built at Yale,
          refined for the open coast.
        </p>
      </section>

      <hr className="iw-rule"/>

      {/* PRODUCT SHOWCASE — S/X TOGGLE */}
      <section style={{ padding: '120px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 60 }}>
          <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)' }}>II · THE COLLECTION</div>
          <div style={{ display: 'flex', gap: 4, padding: 4, border: '1px solid var(--hairline)', borderRadius: 999 }}>
            {['S', 'X'].map(m => (
              <button key={m} onClick={() => setModel(m)}
                className="tracked-md"
                style={{
                  padding: '8px 22px', borderRadius: 999, border: 0, cursor: 'pointer',
                  background: model === m ? 'var(--ink)' : 'transparent',
                  color: model === m ? 'var(--ivory)' : 'var(--ink)',
                  fontSize: 10, transition: 'all .35s',
                  fontFamily: 'inherit',
                }}>
                Wavekart {m}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--ivory-2)', borderRadius: 2 }}>
            <div className="iw-kart" style={{ '--kart-color': color, position: 'absolute', inset: 0, transition: 'all .6s cubic-bezier(.2,.7,.3,1)' }} key={model}>
              <div className="iw-kart-body" style={{ width: model === 'X' ? '70%' : '58%', height: model === 'X' ? '42%' : '36%' }}/>
            </div>
            <div className="font-mono" style={{ position: 'absolute', top: 24, left: 24, fontSize: 10, letterSpacing: '0.18em', color: 'var(--warm-grey)' }}>
              MODEL · {model}
            </div>
            <div className="font-mono" style={{ position: 'absolute', bottom: 24, right: 24, fontSize: 10, letterSpacing: '0.18em', color: 'var(--warm-grey)' }}>
              03 / 12
            </div>
          </div>

          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 20 }}>
              {model === 'S' ? 'COMPACT · PORTABLE' : 'GRAND · STABLE'}
            </div>
            <h2 className="font-display" style={{ fontSize: 72, fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 28px' }}>
              Wavekart <em style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 300 }}>{model}</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 440, margin: '0 0 40px' }}>
              {model === 'S'
                ? 'Compact, electric-powered. Light enough to slide into the back of your SUV, refined enough to dock beside a Riva.'
                : 'A larger frame in marine-grade HDPE. Built for stability, designed for resorts, yacht owners, and those who value occasion.'}
            </p>

            {/* Color picker */}
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>FINISH</div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
              {colors.map(c => (
                <button key={c.hex} onClick={() => setColor(c.hex)}
                  title={c.name}
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: c.hex, cursor: 'pointer',
                    border: color === c.hex ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                    outline: color === c.hex ? '1px solid var(--ink)' : 'none',
                    outlineOffset: 4,
                    padding: 0,
                  }}/>
              ))}
            </div>
            <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--ink)', marginBottom: 32 }}>
              {colors.find(c=>c.hex===color)?.name}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, paddingTop: 24, borderTop: '1px solid var(--hairline)' }}>
              <div>
                <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 6 }}>FROM</div>
                <div className="font-display" style={{ fontSize: 32, fontWeight: 200 }}>$8,800<span style={{ fontSize: 14, color: 'var(--warm-grey)' }}>&nbsp;USD</span></div>
              </div>
              <div style={{ flex: 1 }}/>
              <button className="tracked-md" style={{
                background: 'var(--ink)', color: 'var(--ivory)', border: 0,
                padding: '16px 32px', fontSize: 10, cursor: 'pointer', borderRadius: 0,
                fontFamily: 'inherit',
              }}>RESERVE →</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="iw-rule"/>

      {/* SPECS — animated counters */}
      <section style={{ padding: '120px 60px', background: 'var(--ivory-2)' }}>
        <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 60 }}>III · MEASURED</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { v: 50,  s: 'KM/H', label: 'Top speed' },
            { v: 60,  s: 'KG',   label: 'Hull weight' },
            { v: 90,  s: 'MIN',  label: 'Run time' },
            { v: 12,  s: 'MO',   label: 'Warranty' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderLeft: i ? '1px solid var(--hairline)' : 0,
            }}>
              <div className="font-display" style={{ fontSize: 88, fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1 }}>
                <CountUp to={s.v}/>
              </div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginTop: 12 }}>
                {s.s} · {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section style={{ padding: '120px 60px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 24 }}>IV · COMPARE</div>
        <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 60px' }}>
          Two crafts. One ethos.
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--ink)' }}>
              <th style={{ textAlign: 'left', padding: '14px 0', fontWeight: 400 }} className="tracked-md"></th>
              <th style={{ textAlign: 'left', padding: '14px 0', fontWeight: 400 }} className="tracked-md">WAVEKART S</th>
              <th style={{ textAlign: 'left', padding: '14px 0', fontWeight: 400 }} className="tracked-md">WAVEKART X</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {[
              ['Hull length', '2.1 m', '2.6 m'],
              ['Weight', '60 kg', '92 kg'],
              ['Top speed', '50 km/h', '50 km/h'],
              ['Capacity', '1 rider', '1 rider'],
              ['Material', 'HDPE Composite', 'Marine-grade HDPE'],
              ['Best for', 'Solo adventurers', 'Resorts · Yachts'],
            ].map(([k, s, x]) => (
              <tr key={k} style={{ borderBottom: '1px solid var(--hairline)' }}>
                <td style={{ padding: '20px 0', color: 'var(--warm-grey)' }}>{k}</td>
                <td style={{ padding: '20px 0' }}>{s}</td>
                <td style={{ padding: '20px 0' }}>{x}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* LIFESTYLE GRID */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ padding: '0 60px', marginBottom: 60 }}>
          <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 24 }}>V · IN PRACTICE</div>
          <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: 0, maxWidth: 700 }}>
            Wherever the water finds you.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 1, background: 'var(--hairline)' }}>
          <div className="iw-placeholder" style={{ aspectRatio: '4/3' }}>
            <div className="iw-placeholder-label">YACHT TENDER · LIFESTYLE</div>
          </div>
          <div className="iw-placeholder" style={{ aspectRatio: '3/3' }}>
            <div className="iw-placeholder-label">DRIFT · ACTION</div>
          </div>
          <div className="iw-placeholder" style={{ aspectRatio: '3/3' }}>
            <div className="iw-placeholder-label">RESORT · GUEST</div>
          </div>
          <div className="iw-placeholder" style={{ aspectRatio: '4/3' }}>
            <div className="iw-placeholder-label">PACK INTO SUV</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: 'var(--ivory)' }}>
        <div className="tracked-lg" style={{ fontSize: 10, opacity: .55, marginBottom: 60 }}>VI · TESTIMONY</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          {[
            { name: 'ROBER S.', q: 'No gas smell. Reef-friendly. Charge and go. The ideal choice for an eco-conscious ride.' },
            { name: 'PHILIPP O.', q: 'Light enough to fit in my SUV. Speed and maneuverability that delivers a truly thrilling experience.' },
          ].map(t => (
            <div key={t.name}>
              <p className="font-display" style={{ fontSize: 28, fontWeight: 200, lineHeight: 1.45, letterSpacing: '-0.02em', margin: '0 0 32px', textWrap: 'pretty' }}>
                “{t.q}”
              </p>
              <div className="tracked-md" style={{ fontSize: 10, opacity: .7 }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* YALE ORIGIN */}
      <section style={{ padding: '160px 60px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div className="tracked-lg" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 32 }}>VII · ORIGIN</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 200, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 40px' }}>
          From a Yale<br/>laboratory<br/>to your shore.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: 540, margin: '0 auto' }}>
          IWAVE began as an engineering thesis — a question of whether the
          intimacy of a go-kart could exist on water without combustion,
          without compromise. Five years of iteration later, the answer
          is in your driveway.
        </p>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '100px 60px', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>STAY CONNECTED</div>
            <h3 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: 0 }}>Never miss a wave.</h3>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--ink)', paddingBottom: 12 }}>
            <input placeholder="Your email" style={{
              flex: 1, border: 0, background: 'transparent', outline: 0,
              fontFamily: 'inherit', fontSize: 14, padding: '8px 0',
            }}/>
            <button className="tracked-md" style={{ background: 'transparent', border: 0, fontSize: 10, fontFamily: 'inherit', cursor: 'pointer' }}>SUBSCRIBE →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 60px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60 }}>
        <div>
          <div className="font-display tracked-xl" style={{ fontSize: 14, marginBottom: 24 }}>IWAVE</div>
          <p style={{ fontSize: 12, color: 'var(--warm-grey)', maxWidth: 280, lineHeight: 1.7 }}>
            A Yale-born studio engineering the future of water craft.
          </p>
        </div>
        {[
          { h: 'WAVEKART', i: ['Wavekart S', 'Wavekart X', 'Compare', 'Reserve'] },
          { h: 'DISCOVER', i: ['About', 'Journal', 'FAQ', 'Press'] },
          { h: 'CONTACT',  i: ['Inquiry', 'Dealers', 'Affiliate', 'Support'] },
        ].map(col => (
          <div key={col.h}>
            <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 18 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
              {col.i.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ padding: '20px 60px', borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', fontSize: 10 }} className="tracked-sm">
        <span>© MMXXVI IWAVE</span>
        <span>NEW HAVEN · CT</span>
      </div>
    </div>
  );
}

window.IvorySite = IvorySite;
window.IvoryCountUp = CountUp;
