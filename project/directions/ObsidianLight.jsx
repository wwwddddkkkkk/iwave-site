// ObsidianLight.jsx — Refined v2: light ground, black as accent, ocean video hero
// Apple/DJI structure, but inverted: ivory ground for 90% of the page, ink only as
// hairlines, type, buttons, and one signature dark stripe.

const { useState, useEffect, useRef } = React;

function CountUp({ to, duration = 1400 }) {
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
  return <span ref={ref}>{val}</span>;
}

function ObsidianLightSite() {
  const [model, setModel] = useState('S');
  const [color, setColor] = useState('#d9d4c8');

  // Each color has a `slug` that maps to an image filename:
  //   assets/wavekart/{model}-{slug}.png
  // e.g. assets/wavekart/s-porcelain.png, assets/wavekart/x-amber.png
  const colors = [
    { name: 'PORCELAIN', hex: '#d9d4c8', slug: 'porcelain' },
    { name: 'OBSIDIAN',  hex: '#1a1a17', slug: 'obsidian'  },
    { name: 'TITAN',     hex: '#7a7770', slug: 'titan'     },
    { name: 'AMBER',     hex: '#c89645', slug: 'amber'     },
    { name: 'AZURE',     hex: '#3d6b85', slug: 'azure'     },
  ];
  const activeColor = colors.find(c => c.hex === color);
  const kartSrc = `assets/wavekart/${model.toLowerCase()}-${activeColor.slug}.png`;

  return (
    <div className="iw-frame font-body" style={{
      width: '100%', height: '100%', overflow: 'auto',
      background: '#FFFFFF', color: 'var(--ink)',
      fontSize: 14, lineHeight: 1.55,
    }}>
      {/* NAV */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--hairline)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 36px' }}>
          <div className="font-display tracked-xl" style={{ fontSize: 13 }}>IWAVE</div>
          <nav className="font-body" style={{ display: 'flex', gap: 32, fontSize: 12 }}>
            <a>Wavekart S</a><a>Wavekart X</a><a>Compare</a><a>Technology</a><a>Support</a>
          </nav>
          <div className="font-body" style={{ display: 'flex', gap: 20, fontSize: 12 }}>
            <span>Account</span><span>Bag</span>
          </div>
        </div>
      </header>

      {/* HERO — full-bleed ocean video */}
      <section style={{ position: 'relative', height: 760, overflow: 'hidden', color: '#fff' }}>
        {/* The ocean video slot — user drops their own video/poster here */}
        <div className="iw-water" style={{ position: 'absolute', inset: 0 }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)',
        }}/>
        {/* Video placeholder corner label so the user knows this is where their footage goes */}
        <div className="font-mono tracked-sm" style={{
          position: 'absolute', top: 24, right: 32, fontSize: 9,
          opacity: .55, padding: '6px 10px', border: '1px solid rgba(255,255,255,.3)', borderRadius: 2,
        }}>
          ◉ OCEAN FOOTAGE
        </div>

        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 60px 80px' }}>
          <div className="tracked-xl" style={{ fontSize: 10, opacity: .85, marginBottom: 24 }}>
            IWAVE WAVEKART · 2026
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(72px, 10vw, 156px)',
            lineHeight: 0.92, letterSpacing: '-0.04em', fontWeight: 200,
            margin: 0, maxWidth: 1100,
          }}>
            On water.<br/>Reimagined.
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 36 }}>
            <p style={{ fontSize: 14, opacity: .85, maxWidth: 380, lineHeight: 1.7, margin: 0 }}>
              Electric. Silent. Instant. The first jet go-kart engineered
              for the water — not adapted to it.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button style={{
                background: '#fff', color: 'var(--ink)', border: 0,
                padding: '14px 28px', borderRadius: 999, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer', fontWeight: 500,
              }}>Reserve</button>
              <button style={{
                background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)',
                padding: '14px 28px', borderRadius: 999, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer',
              }}>Watch the film →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SPEC STRIP — black accent band right under the hero */}
      <div style={{ background: 'var(--ink)', color: '#fff', padding: '20px 36px', display: 'flex', justifyContent: 'space-between', fontSize: 11 }} className="font-mono tracked-sm">
        <span>50 KM/H</span><span>·</span>
        <span>60 KG HULL</span><span>·</span>
        <span>SILENT EV DRIVE</span><span>·</span>
        <span>QUICK-CHANGE BATTERY</span><span>·</span>
        <span>0 EMISSIONS</span>
      </div>

      {/* INTRO */}
      <section style={{ padding: '140px 60px', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 32 }}>INTRODUCTION</div>
        <p className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.3, fontWeight: 200, letterSpacing: '-0.02em', margin: 0, textWrap: 'balance' }}>
          Hop in. Push the throttle. The water responds —
          quietly, precisely, without compromise.
        </p>
      </section>

      {/* MODEL TOGGLE — light surface, ink accents */}
      <section style={{ padding: '40px 60px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>CHOOSE YOUR CRAFT</div>
          <h2 className="font-display" style={{ fontSize: 64, fontWeight: 200, letterSpacing: '-0.03em', margin: 0 }}>
            Two models. One language.
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'flex', gap: 4, padding: 4,
            background: '#F2F1ED', borderRadius: 999,
          }}>
            {['S','X'].map(m => (
              <button key={m} onClick={() => setModel(m)} className="tracked-md"
                style={{
                  padding: '10px 28px', borderRadius: 999, border: 0, cursor: 'pointer',
                  background: model === m ? 'var(--ink)' : 'transparent',
                  color: model === m ? '#fff' : 'var(--ink)',
                  fontSize: 11, transition: 'all .35s', fontFamily: 'inherit',
                }}>
                Wavekart {m}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid var(--hairline)',
          borderRadius: 24,
          padding: '60px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
          boxShadow: '0 30px 80px -40px rgba(14,14,12,.18)',
        }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>
              {model === 'S' ? 'COMPACT · 60 KG' : 'GRAND · 92 KG'}
            </div>
            <h3 className="font-display" style={{ fontSize: 72, fontWeight: 200, letterSpacing: '-0.04em', margin: '0 0 24px', lineHeight: 1 }}>
              Wavekart {model}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 32 }}>
              {model === 'S'
                ? 'For the solo adventurer. Light, fast, transportable. Charge in your garage, drift by lunch.'
                : 'For the dock-bound. Larger hull, greater stability — designed for resorts, yachts, and shared shorelines.'}
            </p>

            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 14 }}>FINISH · {colors.find(c=>c.hex===color)?.name}</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 36 }}>
              {colors.map(c => (
                <button key={c.hex} onClick={() => setColor(c.hex)}
                  style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: c.hex, cursor: 'pointer', padding: 0,
                    border: color === c.hex ? '2px solid var(--ink)' : '1px solid var(--hairline)',
                  }}/>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button style={{
                background: 'var(--ink)', color: '#fff', border: 0,
                padding: '12px 24px', borderRadius: 999, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
              }}>Buy · $8,800</button>
              <button style={{ background: 'transparent', color: 'var(--ink)', border: 0, fontSize: 12, cursor: 'pointer' }}>
                Learn more →
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', aspectRatio: '4/3', background: '#FAFAF8', borderRadius: 12, overflow: 'hidden' }}>
            {/* Photo of the kart — swaps on model + color change with a smooth fade.
                If the file is missing the CSS-drawn fallback below shows through. */}
            <div className="iw-kart" style={{ '--kart-color': color, position: 'absolute', inset: 0, transition: 'all .6s cubic-bezier(.2,.7,.3,1)' }}>
              <div className="iw-kart-body" style={{
                width: model === 'X' ? '74%' : '60%',
                height: model === 'X' ? '44%' : '38%',
              }}/>
            </div>
            <img
              key={kartSrc}
              src={kartSrc}
              alt={`Wavekart ${model} in ${activeColor.name}`}
              onError={(e) => { e.currentTarget.style.opacity = 0; }}
              onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'contain', opacity: 0,
                transition: 'opacity .5s cubic-bezier(.2,.7,.3,1)',
              }}
            />
            <div className="font-mono tracked-sm" style={{ position: 'absolute', top: 16, left: 16, fontSize: 9, color: 'var(--warm-grey)', zIndex: 2 }}>
              MODEL · {model}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS — animated counters, light ground */}
      <section style={{ padding: '120px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>BY THE NUMBERS</div>
        <h2 className="font-display" style={{ fontSize: 64, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 80px', maxWidth: 700 }}>
          Every figure, considered.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { v: 50, u: 'km/h', l: 'TOP SPEED' },
            { v: 60, u: 'kg',   l: 'HULL WEIGHT' },
            { v: 90, u: 'min',  l: 'RUN TIME' },
            { v: 0,  u: 'g',    l: 'CO₂ EMITTED' },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 24, paddingRight: 32, borderLeft: i ? '1px solid var(--hairline)' : 0, paddingLeft: i ? 32 : 0 }}>
              <div className="font-display" style={{ fontSize: 80, fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <CountUp to={s.v}/>
                <span style={{ fontSize: 18, color: 'var(--warm-grey)', fontWeight: 300 }}>{s.u}</span>
              </div>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginTop: 16 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE — light cards */}
      <section style={{ padding: '120px 60px', borderTop: '1px solid var(--hairline)' }}>
        <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>COMPARE</div>
        <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 60px' }}>
          S or X.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            { m: 'S', t: 'Wavekart S', d: 'For the solo adventurer.', specs: [['Length','2.1 m'],['Weight','60 kg'],['Best for','SUV transport']] },
            { m: 'X', t: 'Wavekart X', d: 'For shared shorelines.',   specs: [['Length','2.6 m'],['Weight','92 kg'],['Best for','Yacht & resort']] },
          ].map(c => (
            <div key={c.m} style={{
              border: '1px solid var(--hairline)', borderRadius: 16,
              padding: 36, background: '#fff',
            }}>
              <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 12 }}>MODEL · {c.m}</div>
              <h3 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: '0 0 8px' }}>{c.t}</h3>
              <p style={{ color: 'var(--ink-2)', marginBottom: 28, fontSize: 14 }}>{c.d}</p>
              <div className="iw-placeholder" style={{ aspectRatio: '4/3', borderRadius: 8, marginBottom: 28 }}>
                <div className="iw-placeholder-label">WAVEKART {c.m} · STUDIO</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {c.specs.map(([k,v]) => (
                  <li key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--hairline)', fontSize: 13 }}>
                    <span style={{ color: 'var(--warm-grey)' }}>{k}</span><span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* LIFESTYLE GRID */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ padding: '0 60px', marginBottom: 60 }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>IN PRACTICE</div>
          <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: 0 }}>
            Built for the open coast.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hairline)' }}>
          {['YACHT TENDER','RESORT GUEST','RACE WITH FRIENDS'].map(l => (
            <div key={l} className="iw-placeholder" style={{ aspectRatio: '4/5' }}>
              <div className="iw-placeholder-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL — single dark accent block */}
      <section style={{ padding: '120px 60px', background: 'var(--ink)', color: '#fff', textAlign: 'center' }}>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55, marginBottom: 40 }}>TESTIMONY</div>
        <p className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 200, letterSpacing: '-0.02em', lineHeight: 1.4, maxWidth: 1000, margin: '0 auto 32px', textWrap: 'balance' }}>
          “No gas smell. Reef-friendly. Charge and go.
          The ideal choice for an eco-conscious ride.”
        </p>
        <div className="tracked-md" style={{ fontSize: 10, opacity: .55 }}>— ROBER S. · WAVEKART OWNER</div>
      </section>

      {/* YALE ORIGIN — light */}
      <section style={{ padding: '120px 60px', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 24 }}>ORIGIN · NEW HAVEN</div>
            <h2 className="font-display" style={{ fontSize: 56, fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 28px', lineHeight: 1.05 }}>
              Engineered<br/>at Yale.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)' }}>
              IWAVE was born inside a Yale engineering laboratory — a quiet
              question about whether watercraft could be both intimate and
              electric. Today, that thesis is in production.
            </p>
          </div>
          <div className="iw-placeholder" style={{ aspectRatio: '4/5', borderRadius: 8 }}>
            <div className="iw-placeholder-label">FOUNDER · STUDIO</div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '100px 60px', textAlign: 'center' }}>
        <h3 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 200, letterSpacing: '-0.03em', margin: '0 0 32px' }}>
          Never miss a wave.
        </h3>
        <div style={{ display: 'flex', maxWidth: 480, margin: '0 auto', gap: 8 }}>
          <input placeholder="your@email.com" style={{
            flex: 1, padding: '14px 20px', borderRadius: 999,
            background: '#fff', color: 'var(--ink)',
            border: '1px solid var(--hairline)', outline: 0, fontFamily: 'inherit', fontSize: 13,
          }}/>
          <button style={{
            padding: '14px 24px', borderRadius: 999, border: 0,
            background: 'var(--ink)', color: '#fff', fontFamily: 'inherit', fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>Subscribe</button>
        </div>
      </section>

      <footer style={{ padding: '60px 60px 30px', borderTop: '1px solid var(--ink)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60 }}>
        <div>
          <div className="font-display tracked-xl" style={{ fontSize: 14, marginBottom: 20 }}>IWAVE</div>
          <p style={{ fontSize: 12, color: 'var(--warm-grey)', maxWidth: 280 }}>Yale-born studio. Engineering the future of water.</p>
        </div>
        {[
          { h: 'WAVEKART', i: ['S','X','Compare','Reserve'] },
          { h: 'COMPANY',  i: ['About','Press','Journal','Careers'] },
          { h: 'SUPPORT',  i: ['Inquiry','Dealers','Affiliate','FAQ'] },
        ].map(c => (
          <div key={c.h}>
            <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
              {c.i.map(x => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </footer>
      <div style={{ padding: '20px 60px 40px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--warm-grey)' }} className="tracked-sm">
        <span>© 2026 IWAVE</span>
        <span>NEW HAVEN · CT</span>
      </div>
    </div>
  );
}

window.ObsidianLightSite = ObsidianLightSite;
