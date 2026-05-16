// shared/Layout.jsx — Header + Footer + common product data
// Used by every page. Brand-consistent nav, mailto CTAs, ink-accent footer.

// Wavekart S — 6 standard finishes. Default palette.
const COLORS_S = [
  { name: 'BLUE',   hex: '#54AFC5', slug: 'blue'   },
  { name: 'YELLOW', hex: '#F8F31E', slug: 'yellow' },
  { name: 'RED',    hex: '#DC2626', slug: 'red'    },
  { name: 'GREEN',  hex: '#13C633', slug: 'green'  },
  { name: 'PINK',   hex: '#EC4899', slug: 'pink'   },
  { name: 'GREY',   hex: '#C9C8CE', slug: 'grey'   },
];

// Wavekart X — same six, but blue runs brighter (cyan).
const COLORS_X = COLORS_S.map(c =>
  c.slug === 'blue' ? { ...c, hex: '#1AB6EF' } : c
);

function getColors(model) {
  return (model && model.toString().toUpperCase() === 'X') ? COLORS_X : COLORS_S;
}

// Back-compat — anything that imported COLORS keeps working (S palette).
const COLORS = COLORS_S;

const MAIL_BUY = 'mailto:info@iwavekart.com?subject=Reserve%20a%20Wavekart';
const MAIL_INQ = 'mailto:info@iwavekart.com?subject=Wavekart%20Inquiry';
const MAIL_SUPPORT = 'mailto:support@iwavekart.com?subject=Wavekart%20Support';

function NavLink({ href, label, active }) {
  return (
    <a href={href} style={{
      color: 'var(--ink)', textDecoration: 'none',
      opacity: active ? 1 : 0.65,
      borderBottom: active ? '1px solid var(--ink)' : '1px solid transparent',
      paddingBottom: 2, transition: 'opacity .2s',
    }}>{label}</a>
  );
}

function Header({ active }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 36px' }}>
        <a href="index.html" aria-label="iwave home" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="assets/logo.png" alt="IWAVE" style={{ height: 22, width: 'auto', display: 'block' }}/>
        </a>
        <nav className="font-body" style={{ display: 'flex', gap: 24, fontSize: 12 }}>
          <NavLink href="wavekart-s.html" label="Wavekart S" active={active === 's'}/>
          <NavLink href="wavekart-x.html" label="Wavekart X" active={active === 'x'}/>
          <NavLink href="compare.html"    label="Compare"    active={active === 'compare'}/>
          <NavLink href="faq.html"        label="FAQ"        active={active === 'faq'}/>
          <NavLink href="news.html"       label="Journal"    active={active === 'journal'}/>
          <NavLink href="about.html"      label="About"      active={active === 'about'}/>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="https://www.instagram.com/iwave_watersports" target="_blank" rel="noopener" aria-label="Instagram" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, color: 'var(--ink)', textDecoration: 'none',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href={MAIL_BUY} className="font-body" style={{
            fontSize: 12, color: 'var(--ink)', textDecoration: 'none',
            padding: '8px 16px', border: '1px solid var(--ink)', borderRadius: 999,
          }}>Reserve</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <React.Fragment>
      <footer style={{ padding: '60px 60px 30px', borderTop: '1px solid var(--ink)', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, background: '#fff' }}>
        <div>
          <img src="assets/logo.png" alt="IWAVE" style={{ height: 26, width: 'auto', display: 'block', marginBottom: 20 }}/>
          <p style={{ fontSize: 12, color: 'var(--warm-grey)', maxWidth: 280, marginBottom: 24 }}>Yale-born studio. Engineering the future of water.</p>
          <a href="https://www.instagram.com/iwave_watersports" target="_blank" rel="noopener" aria-label="iwave on Instagram" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: 999, border: '1px solid var(--ink)',
            color: 'var(--ink)', textDecoration: 'none', transition: 'all .2s',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
        <div>
          <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 16 }}>WAVEKART</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
            <li><a href="wavekart-s.html" style={{ color: 'inherit', textDecoration: 'none' }}>Wavekart S</a></li>
            <li><a href="wavekart-x.html" style={{ color: 'inherit', textDecoration: 'none' }}>Wavekart X</a></li>
            <li><a href="compare.html"    style={{ color: 'inherit', textDecoration: 'none' }}>Compare</a></li>
            <li><a href={MAIL_BUY}        style={{ color: 'inherit', textDecoration: 'none' }}>Reserve</a></li>
          </ul>
        </div>
        <div>
          <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 16 }}>COMPANY</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
            <li><a href="about.html"  style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
            <li><a href="news.html"   style={{ color: 'inherit', textDecoration: 'none' }}>Journal</a></li>
            <li><a href="faq.html"    style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
            <li><a href={MAIL_INQ}    style={{ color: 'inherit', textDecoration: 'none' }}>Press</a></li>
            <li><a href={MAIL_INQ}    style={{ color: 'inherit', textDecoration: 'none' }}>Partnerships</a></li>
          </ul>
        </div>
        <div>
          <div className="tracked-md" style={{ fontSize: 9, color: 'var(--warm-grey)', marginBottom: 16 }}>CONTACT</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
            <li><a href={MAIL_INQ}     style={{ color: 'inherit', textDecoration: 'none' }}>info@iwavekart.com</a></li>
            <li><a href={MAIL_SUPPORT} style={{ color: 'inherit', textDecoration: 'none' }}>support@iwavekart.com</a></li>
          </ul>
        </div>
      </footer>
      <div style={{ padding: '20px 60px 40px', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--warm-grey)' }} className="tracked-sm">
        <span>© 2026 IWAVE</span>
        <span>NEW HAVEN · CT</span>
      </div>
    </React.Fragment>
  );
}

// Buy CTA — used on product/compare pages
function BuyCTA({ model, variant = 'primary' }) {
  const href = `mailto:info@iwavekart.com?subject=Reserve%20Wavekart%20${model}&body=I'm%20interested%20in%20reserving%20a%20Wavekart%20${model}.%0A%0AName:%0ALocation:%0APreferred%20finish:`;
  const base = {
    display: 'inline-block', padding: '14px 28px', borderRadius: 999,
    fontSize: 13, fontFamily: 'inherit', cursor: 'pointer', fontWeight: 500,
    textDecoration: 'none', transition: 'all .2s',
  };
  const styles = variant === 'primary'
    ? { ...base, background: 'var(--ink)', color: '#fff', border: 0 }
    : { ...base, background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' };
  return <a href={href} style={styles}>Reserve Wavekart {model} →</a>;
}

// Animated count-up for spec numbers
function CountUp({ to, duration = 1200 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef();
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
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
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}</span>;
}

// Accordion FAQ item — used on FAQ page and product pages
function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: '1px solid var(--hairline)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '24px 0', background: 'transparent',
        border: 0, cursor: 'pointer', fontFamily: 'inherit', color: 'var(--ink)',
        textAlign: 'left',
      }}>
        <span className="font-display" style={{ fontSize: 20, fontWeight: 300, letterSpacing: '-0.01em', paddingRight: 24 }}>
          {q}
        </span>
        <span style={{
          width: 28, height: 28, flex: '0 0 28px', position: 'relative',
          transition: 'transform .3s', transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <span style={{ position: 'absolute', left: 6, right: 6, top: '50%', height: 1, background: 'var(--ink)' }}/>
          <span style={{ position: 'absolute', top: 6, bottom: 6, left: '50%', width: 1, background: 'var(--ink)' }}/>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 1200 : 0, overflow: 'hidden',
        transition: 'max-height .4s cubic-bezier(.2,.7,.3,1), padding .4s, opacity .3s',
        opacity: open ? 1 : 0,
        paddingBottom: open ? 28 : 0,
      }}>
        <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 760 }}>
          {a}
        </div>
      </div>
    </div>
  );
}

// Kart image with crossfade + CSS fallback (used everywhere a kart appears).
// `color` may be a hex string from either palette (S or X); we look up the slug
// against the model's correct palette so X's blue still resolves to s-/x-blue.png.
function KartImage({ model, color, size = 'medium' }) {
  const list = getColors(model);
  const match = list.find(c => c.hex === color) || list[0];
  const slug = match.slug;
  const src = `assets/wavekart/${model.toLowerCase()}-${slug}.png`;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="iw-kart" style={{ '--kart-color': color, position: 'absolute', inset: 0 }}>
        <div className="iw-kart-body" style={{
          width: model === 'X' ? '70%' : '58%',
          height: model === 'X' ? '42%' : '36%',
        }}/>
      </div>
      <img key={src} src={src}
        alt={`Wavekart ${model}`}
        onError={(e) => { e.currentTarget.style.opacity = 0; }}
        onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'contain', opacity: 0,
          transition: 'opacity .5s cubic-bezier(.2,.7,.3,1)',
        }}/>
    </div>
  );
}

Object.assign(window, { COLORS, COLORS_S, COLORS_X, getColors, MAIL_BUY, MAIL_INQ, MAIL_SUPPORT, Header, Footer, BuyCTA, CountUp, KartImage, FAQItem });
