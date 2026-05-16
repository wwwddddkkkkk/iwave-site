// shared/News.jsx — News index + article pages.
// ARTICLES is the source of truth. NewsIndex renders the listing.
// ArticlePage({ slug }) renders a single post.

const ARTICLES = [
  {
    slug: 'launch-wavekart-s',
    date: 'June 13, 2025',
    kind: 'ANNOUNCEMENT',
    title: 'IWAVE launches its first product — Wavekart S redefines luxury watersports.',
    excerpt: 'Today we announce the global launch of IWAVE\'s first product: the Wavekart S — the world\'s first electric water go-kart.',
    href: 'news-launch.html',
  },
  {
    slug: 'best-new-water-toy-2025',
    date: 'June 13, 2025',
    kind: 'FEATURE',
    title: 'The best new water toy of 2025? Meet the IWAVE Wavekart.',
    excerpt: 'Forget bulky boats and noisy jet skis. The Wavekart delivers the agility of a racing kart, the thrill of water drifting, and the freedom to explore — with zero emissions.',
    href: 'news-best-water-toy.html',
  },
  {
    slug: 'miami-boat-show',
    date: 'June 13, 2025',
    kind: 'EVENT',
    title: 'IWAVE at Miami International Boat Show — making waves with the world\'s first water go-kart.',
    excerpt: 'IWAVE made a splash at this year\'s Miami International Boat Show. Overwhelming excitement, smiles, and a steady stream of inquiries from resort operators, yacht owners, and watersports enthusiasts.',
    href: 'news-miami.html',
  },
];

// Small UI helpers
function ArticleMeta({ a }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }} className="tracked-md">
      <span style={{ fontSize: 10, color: 'var(--warm-grey)' }}>{a.kind}</span>
      <span style={{ fontSize: 10, color: 'var(--warm-grey)' }}>·</span>
      <span style={{ fontSize: 10, color: 'var(--warm-grey)' }}>{a.date}</span>
    </div>
  );
}

function ArticleCard({ a, large }) {
  const titleSize = large ? 'clamp(28px, 3.2vw, 44px)' : 22;
  return (
    <a href={a.href} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
      <article style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="iw-placeholder" style={{ aspectRatio: large ? '16/9' : '4/3', borderRadius: 8 }}>
          <div className="iw-placeholder-label">{a.kind} · IMAGE</div>
        </div>
        <div>
          <ArticleMeta a={a}/>
          <h2 className="font-display" style={{
            fontSize: titleSize, fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.15, margin: '0 0 16px', textWrap: 'balance',
          }}>{a.title}</h2>
          <p style={{ fontSize: large ? 16 : 14, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
            {a.excerpt}
          </p>
          <div className="tracked-md" style={{ fontSize: 10, marginTop: 20, borderBottom: '1px solid var(--ink)', paddingBottom: 6, display: 'inline-block' }}>
            READ ARTICLE →
          </div>
        </div>
      </article>
    </a>
  );
}

// ─────────────────────────────────────────────────────────
// News index page
// ─────────────────────────────────────────────────────────
function NewsIndex() {
  const [feature, ...rest] = ARTICLES;
  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active="journal"/>

      <section style={{ padding: '100px 60px 60px', maxWidth: 1300, margin: '0 auto' }}>
        <div className="tracked-xl" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 18 }}>JOURNAL</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 200, letterSpacing: '-0.04em',
          lineHeight: 0.98, margin: 0,
        }}>
          News & stories<br/>from the studio.
        </h1>
      </section>

      <section style={{ padding: '40px 60px 80px', maxWidth: 1300, margin: '0 auto' }}>
        <ArticleCard a={feature} large/>
      </section>

      <section style={{ padding: '60px 60px 140px', maxWidth: 1300, margin: '0 auto', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 60, paddingTop: 60 }}>
          {rest.map(a => <ArticleCard key={a.slug} a={a}/>)}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
window.NewsIndex = NewsIndex;

// ─────────────────────────────────────────────────────────
// Single article shell — pages call <Article slug="..."> with body content
// as children.
// ─────────────────────────────────────────────────────────
function Article({ slug, children }) {
  const a = ARTICLES.find(x => x.slug === slug);
  if (!a) return null;
  const others = ARTICLES.filter(x => x.slug !== slug);

  const share = (label, href) => (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener"
      className="tracked-md" style={{
        fontSize: 10, padding: '8px 16px', border: '1px solid var(--hairline)',
        borderRadius: 999, color: 'var(--ink)', textDecoration: 'none',
      }}>
      {label}
    </a>
  );

  const tweet  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title + ' — iwave Wavekart')}&url=${encodeURIComponent('https://iwavekart.com/' + a.href)}`;
  const lin    = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://iwavekart.com/' + a.href)}`;
  const mail   = `mailto:?subject=${encodeURIComponent(a.title)}&body=${encodeURIComponent('Thought you\'d like this: https://iwavekart.com/' + a.href)}`;

  return (
    <div className="font-body" style={{ background: '#fff', color: 'var(--ink)' }}>
      <Header active="journal"/>

      {/* Full-bleed cover banner — first thing on the page */}
      <section style={{ width: '100%', position: 'relative' }}>
        <div className="iw-placeholder" style={{ width: '100%', aspectRatio: '21/9', minHeight: 480 }}>
          <div className="iw-placeholder-label">{a.kind} · COVER IMAGE</div>
        </div>
      </section>

      {/* Article hero — title + meta below the banner */}
      <section style={{ padding: '60px 60px 40px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 18 }}>
          <a href="news.html" className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', textDecoration: 'none' }}>
            ← JOURNAL
          </a>
        </div>
        <ArticleMeta a={a}/>
        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 5.5vw, 80px)', fontWeight: 200, letterSpacing: '-0.03em',
          lineHeight: 1.05, margin: '0 0 32px', textWrap: 'balance',
        }}>{a.title}</h1>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginRight: 8 }}>SHARE</span>
          {share('Twitter', tweet)}
          {share('LinkedIn', lin)}
          {share('Email', mail)}
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: '40px 60px 120px' }}>
        <div className="iw-article" style={{ maxWidth: 720, margin: '0 auto', fontSize: 17, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          {children}
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '80px 60px', background: '#FAFAF8', borderTop: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="tracked-md" style={{ fontSize: 10, color: 'var(--warm-grey)', marginBottom: 16 }}>KEEP READING</div>
          <h2 className="font-display" style={{ fontSize: 36, fontWeight: 200, letterSpacing: '-0.02em', margin: '0 0 48px' }}>
            More from the Journal
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${others.length}, 1fr)`, gap: 40 }}>
            {others.map(o => <ArticleCard key={o.slug} a={o}/>)}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
window.Article = Article;
window.ARTICLES = ARTICLES;
