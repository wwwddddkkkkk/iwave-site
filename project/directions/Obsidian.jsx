// ObsidianDirection.jsx — Direction 2: Apple/DJI ink-ground tech-luxury
// Deep ink, ivory type, crisp product hero, dense numerical detail.

const { useState: useStateO, useEffect: useEffectO, useRef: useRefO } = React;

function CountUpO({ to, duration = 1400, format = (n)=>n }) {
  const [val, setVal] = useStateO(0);
  const ref = useRefO();
  useEffectO(() => {
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
  return <span ref={ref}>{format(val)}</span>;
}

function ObsidianSite() {
  const [model, setModel] = useStateO('S');
  const [color, setColor] = useStateO('#d9d4c8');

  const colors = [
    { name: 'PORCELAIN', hex: '#d9d4c8' },
    { name: 'OBSIDIAN',  hex: '#1a1a17' },
    { name: 'TITAN',     hex: '#7a7770' },
    { name: 'AMBER',     hex: '#c89645' },
    { name: 'AZURE',     hex: '#3d6b85' },
  ];

  return (
    <div className="iw-frame font-body" style={{
      width: '100%', height: '100%', overflow: 'auto',
      background: 'var(--ink)', color: 'var(--ivory)',
      fontSize: 14, lineHeight: 1.55,
    }}>
      {/* NAV */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(14,14,12,0.74)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--hairline-light)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 36px' }}>
          <div className="font-display tracked-xl" style={{ fontSize: 13 }}>IWAVE</div>
          <nav className="font-body" style={{ display: 'flex', gap: 32, fontSize: 12, opacity: .85 }}>
            <a>Wavekart S</a><a>Wavekart X</a><a>Compare</a><a>Technology</a><a>Support</a>
          </nav>
          <div className="font-body" style={{ display: 'flex', gap: 20, fontSize: 12, opacity: .85 }}>
            <span>Account</span><span>Bag</span>
          </div>
        </div>
      </header>

      {/* HERO — full bleed, big product, oversized type */}
      <section style={{
        position: 'relative', minHeight: 760,
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(155,126,74,0.12), transparent 60%), var(--ink)',
        padding: '100px 0 60px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div className="tracked-xl" style={{ fontSize: 10, opacity: .55, marginBottom: 18 }}>IWAVE WAVEKART S · 2026</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(72px, 11vw, 180px)',
          lineHeight: 0.9, letterSpacing: '-0.05em', fontWeight: 200,
          margin: 0,
        }}>
          On water.<br/>
          <span style={{
            background: 'linear-gradient(180deg, #f4f1ec 0%, #8a857c 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>Reimagined.</span>
        </h1>
        <p style={{ fontSize: 16, opacity: .7, maxWidth: 540, margin: '32px auto 0', lineHeight: 1.6 }}>
          Electric. Silent. Instant. The first jet go-kart engineered
          for the water — not adapted to it.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 36 }}>
          <button style={{
            background: 'var(--ivory)', color: 'var(--ink)', border: 0,
            padding: '14px 28px', borderRadius: 999, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer', fontWeight: 500,
          }}>Buy Wavekart S</button>
          <button style={{
            background: 'transparent', color: 'var(--ivory)', border: '1px solid var(--hairline-light)',
            padding: '14px 28px', borderRadius: 999, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer',
          }}>Watch the film →</button>
        </div>

        {/* Hero kart */}
        <div style={{ marginTop: 60, display: 'flex', justifyContent: 'center' }}>
          <div className="iw-kart" style={{ '--kart-color': color, width: '70%', maxWidth: 720 }}>
            <div className="iw-kart-body" style={{ width: '70%', height: '46%' }}/>
          </div>
        </div>

        {/* spec strip */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '20px 36px', borderTop: '1px solid var(--hairline-light)',
          display: 'flex', justifyContent: 'space-between', fontSize: 11,
        }} className="font-mono tracked-sm">
          <span>50 KM/H</span><span>·</span>
          <span>60 KG HULL</span><span>·</span>
          <span>SILENT EV DRIVE</span><span>·</span>
          <span>QUICK-CHANGE BATTERY</span><span>·</span>
          <span>0 EMISSIONS</span>
        </div>
      </section>

      {/* MODEL TOGGLE — Apple-style segmented switch */}
      <section style={{ padding: '100px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 20 }}>CHOOSE YOUR CRAFT</div>
          <h2 className="font-display" style={{ fontSize: 64, fontWeight: 200, letterSpacing: '-0.03em', margin: 0 }}>
            Two models. One language.
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'flex', gap: 4, padding: 4,
            background: 'rgba(255,255,255,0.06)', borderRadius: 999,
            border: '1px solid var(--hairline-light)',
          }}>
            {['S','X'].map(m => (
              <button key={m} onClick={() => setModel(m)} className="tracked-md"
                style={{
                  padding: '10px 28px', borderRadius: 999, border: 0, cursor: 'pointer',
                  background: model === m ? 'var(--ivory)' : 'transparent',
                  color: model === m ? 'var(--ink)' : 'var(--ivory)',
                  fontSize: 11, transition: 'all .35s', fontFamily: 'inherit',
                }}>
                Wavekart {m}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(180deg, #1a1a17 0%, #0e0e0c 100%)',
          border: '1px solid var(--hairline-light)',
          borderRadius: 24,
          padding: '60px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 16 }}>
              {model === 'S' ? 'COMPACT · 60 KG' : 'GRAND · 92 KG'}
            </div>
            <h3 className="font-display" style={{ fontSize: 72, fontWeight: 200, letterSpacing: '-0.04em', margin: '0 0 24px', lineHeight: 1 }}>
              Wavekart {model}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, opacity: .8, marginBottom: 32 }}>
              {model === 'S'
                ? 'For the solo adventurer. Light, fast, transportable. Charge in your garage, drift by lunch.'
                : 'For the dock-bound. Larger hull, greater stability — designed for resorts, yachts, and shared shorelines.'}
            </p>

            <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 14 }}>FINISH · {colors.find(c=>c.hex===color)?.name}</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 36 }}>
              {colors.map(c => (
                <button key={c.hex} onClick={() => setColor(c.hex)}
                  style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: c.hex, cursor: 'pointer', padding: 0,
                    border: color === c.hex ? '2px solid var(--ivory)' : '1px solid var(--hairline-light)',
                  }}/>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button style={{
                background: 'var(--ivory)', color: 'var(--ink)', border: 0,
                padding: '12px 24px', borderRadius: 999, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
              }}>Buy · $8,800</button>
              <button style={{ background: 'transparent', color: 'var(--ivory)', border: 0, fontSize: 12, cursor: 'pointer' }}>
                Learn more →
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', aspectRatio: '4/3', background: 'radial-gradient(ellipse at center, rgba(155,126,74,0.12), transparent 70%)' }}>
            <div className="iw-kart" style={{ '--kart-color': color, position: 'absolute', inset: 0 }}>
              <div className="iw-kart-body" style={{
                width: model === 'X' ? '74%' : '60%',
                height: model === 'X' ? '44%' : '38%',
              }}/>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS — DJI-style */}
      <section style={{ padding: '120px 60px', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 16 }}>BY THE NUMBERS</div>
        <h2 className="font-display" style={{ fontSize: 64, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 80px', maxWidth: 700 }}>
          Every figure, considered.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {[
            { v: 50, u: 'km/h', l: 'TOP SPEED' },
            { v: 60, u: 'kg',   l: 'HULL WEIGHT' },
            { v: 90, u: 'min',  l: 'RUN TIME' },
            { v: 0,  u: 'g',    l: 'CO₂ EMITTED' },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--hairline-light)', paddingTop: 24 }}>
              <div className="font-display" style={{ fontSize: 80, fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <CountUpO to={s.v}/>
                <span style={{ fontSize: 18, opacity: .55, fontWeight: 300 }}>{s.u}</span>
              </div>
              <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginTop: 16 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section style={{ padding: '120px 60px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 16 }}>COMPARE</div>
        <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 60px' }}>
          S or X.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            { m: 'S', t: 'Wavekart S', d: 'For the solo adventurer.', specs: [['Length','2.1 m'],['Weight','60 kg'],['Best for','SUV transport']] },
            { m: 'X', t: 'Wavekart X', d: 'For shared shorelines.',   specs: [['Length','2.6 m'],['Weight','92 kg'],['Best for','Yacht & resort']] },
          ].map(c => (
            <div key={c.m} style={{
              border: '1px solid var(--hairline-light)', borderRadius: 16,
              padding: 36, background: 'rgba(255,255,255,0.02)',
            }}>
              <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 12 }}>MODEL · {c.m}</div>
              <h3 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: '0 0 8px' }}>{c.t}</h3>
              <p style={{ opacity: .7, marginBottom: 28, fontSize: 14 }}>{c.d}</p>
              <div className="iw-placeholder dark" style={{ aspectRatio: '4/3', borderRadius: 8, marginBottom: 28 }}>
                <div className="iw-placeholder-label">WAVEKART {c.m} · STUDIO</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {c.specs.map(([k,v]) => (
                  <li key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--hairline-light)', fontSize: 13 }}>
                    <span style={{ opacity: .6 }}>{k}</span><span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ padding: '0 60px', marginBottom: 60 }}>
          <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 16 }}>IN PRACTICE</div>
          <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: 0 }}>
            Built for the open coast.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hairline-light)' }}>
          {['YACHT TENDER','RESORT GUEST','RACE WITH FRIENDS'].map(l => (
            <div key={l} className="iw-placeholder dark" style={{ aspectRatio: '4/5' }}>
              <div className="iw-placeholder-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 60px', textAlign: 'center', borderTop: '1px solid var(--hairline-light)' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 40 }}>TESTIMONY</div>
        <p className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 200, letterSpacing: '-0.02em', lineHeight: 1.4, maxWidth: 1000, margin: '0 auto 32px', textWrap: 'balance' }}>
          “No gas smell. Reef-friendly. Charge and go.
          The ideal choice for an eco-conscious ride.”
        </p>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55 }}>— ROBER S. · WAVEKART OWNER</div>
      </section>

      {/* YALE ORIGIN */}
      <section style={{ padding: '120px 60px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--hairline-light)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 24 }}>ORIGIN · NEW HAVEN</div>
            <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 28px', lineHeight: 1.05 }}>
              Engineered<br/>at Yale.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, opacity: .75 }}>
              IWAVE was born inside a Yale engineering laboratory — a quiet
              question about whether watercraft could be both intimate and
              electric. Today, that thesis is in production.
            </p>
          </div>
          <div className="iw-placeholder dark" style={{ aspectRatio: '4/5', borderRadius: 8 }}>
            <div className="iw-placeholder-label">FOUNDER · STUDIO</div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER + FOOTER */}
      <section style={{ padding: '100px 60px', textAlign: 'center', borderTop: '1px solid var(--hairline-light)' }}>
        <h3 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 32px' }}>
          Never miss a wave.
        </h3>
        <div style={{ display: 'flex', maxWidth: 480, margin: '0 auto', gap: 8 }}>
          <input placeholder="your@email.com" style={{
            flex: 1, padding: '14px 20px', borderRadius: 999,
            background: 'rgba(255,255,255,0.06)', color: 'var(--ivory)',
            border: '1px solid var(--hairline-light)', outline: 0, fontFamily: 'inherit', fontSize: 13,
          }}/>
          <button style={{
            padding: '14px 24px', borderRadius: 999, border: 0,
            background: 'var(--ivory)', color: 'var(--ink)', fontFamily: 'inherit', fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>Subscribe</button>
        </div>
      </section>

      <footer style={{ padding: '60px 60px 30px', borderTop: '1px solid var(--hairline-light)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60 }}>
        <div>
          <div className="font-display tracked-xl" style={{ fontSize: 14, marginBottom: 20 }}>IWAVE</div>
          <p style={{ fontSize: 12, opacity: .55, maxWidth: 280 }}>Yale-born studio. Engineering the future of water.</p>
        </div>
        {[
          { h: 'WAVEKART', i: ['S','X','Compare','Reserve'] },
          { h: 'COMPANY',  i: ['About','Press','Journal','Careers'] },
          { h: 'SUPPORT',  i: ['Inquiry','Dealers','Affiliate','FAQ'] },
        ].map(c => (
          <div key={c.h}>
            <div className="tracked-md" style={{ fontSize: 9, opacity: .5, marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12, opacity: .8 }}>
              {c.i.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ padding: '20px 60px 40px', display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: .5 }} className="tracked-sm">
        <span>© 2026 IWAVE</span>
        <span>NEW HAVEN · CT</span>
      </div>
    </div>
  );
}

window.ObsidianSite = ObsidianSite;
