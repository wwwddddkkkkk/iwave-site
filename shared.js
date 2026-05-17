// iwave Wavekart — shared.js (vanilla JS, no React/Babel)
// Nav, footer, FAQ accordion, count-up, kart viewer.

const COLORS_S = [
  { name: 'BLUE',   hex: '#54AFC5', slug: 'blue'   },
  { name: 'YELLOW', hex: '#F8F31E', slug: 'yellow' },
  { name: 'RED',    hex: '#DC2626', slug: 'red'    },
  { name: 'GREEN',  hex: '#13C633', slug: 'green'  },
  { name: 'PINK',   hex: '#EC4899', slug: 'pink'   },
  { name: 'GREY',   hex: '#C9C8CE', slug: 'grey'   },
];

const COLORS_X = COLORS_S.map(c =>
  c.slug === 'blue' ? { ...c, hex: '#1AB6EF' } : c
);

function getColors(model) {
  return (model && model.toString().toUpperCase() === 'X') ? COLORS_X : COLORS_S;
}

const MAIL_BUY     = 'mailto:info@iwavekart.com?subject=Reserve%20a%20Wavekart';
const MAIL_INQ     = 'mailto:info@iwavekart.com?subject=Wavekart%20Inquiry';
const MAIL_SUPPORT = 'mailto:support@iwavekart.com?subject=Wavekart%20Support';

const IG_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/></svg>`;

function injectMobileStyles() {
  if (document.getElementById('iw-mobile-css')) return;
  const s = document.createElement('style');
  s.id = 'iw-mobile-css';
  s.textContent = `
    @media (max-width: 767px) {
      html,body{overflow-x:hidden;}
      .iw-header-inner{padding:10px 16px !important;}
      .iw-nav{display:none !important;}
      .iw-nav-ig{display:none !important;}
      .iw-nav-logo{height:24px !important;}
      .iw-hamburger{display:flex !important;}
      .iw-footer{grid-template-columns:1.8fr 1fr 1fr !important;gap:20px !important;padding:32px 20px 20px !important;}
      .iw-footer-contact-col{display:none !important;}
      .iw-footer-logo{height:16px !important;}
      .iw-footer-tagline{font-size:10px !important;max-width:none !important;margin-bottom:14px !important;}
      .iw-footer ul{font-size:11px !important;}
      .iw-footer-bottom{padding:12px 20px 28px !important;}
    }
  `;
  document.head.appendChild(s);
}

function renderHeader(active) {
  injectMobileStyles();
  const navLinks = [
    { href: 'wavekart-s.html', label: 'Wavekart S', key: 's' },
    { href: 'wavekart-x.html', label: 'Wavekart X', key: 'x' },
    { href: 'compare.html',    label: 'Compare',    key: 'compare' },
    { href: 'faq.html',        label: 'FAQ',        key: 'faq' },
    { href: 'news.html',       label: 'Journal',    key: 'journal' },
    { href: 'about.html',      label: 'About',      key: 'about' },
  ];

  const navHTML = navLinks.map(l => {
    const isActive = active === l.key;
    return `<a href="${l.href}" style="color:var(--ink);text-decoration:none;opacity:${isActive ? 1 : 0.65};border-bottom:${isActive ? '1px solid var(--ink)' : '1px solid transparent'};padding-bottom:2px;transition:opacity .2s;font-size:12px;">${l.label}</a>`;
  }).join('');

  const mobileNavHTML = navLinks.map(l => {
    const isActive = active === l.key;
    return `<a href="${l.href}" style="color:var(--ink);text-decoration:none;font-size:16px;padding:16px 0;border-bottom:1px solid var(--hairline);font-weight:${isActive ? 400 : 300};display:block;opacity:${isActive ? 1 : 0.8};">${l.label}</a>`;
  }).join('');

  const header = document.createElement('header');
  header.style.cssText = 'position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--hairline);';
  header.innerHTML = `
    <div class="iw-header-inner" style="display:flex;align-items:center;justify-content:space-between;padding:16px 36px;">
      <a href="index.html" aria-label="iwave home" style="display:inline-flex;align-items:center;">
        <img src="assets/logo.png" alt="IWAVE" class="iw-nav-logo" style="height:22px;width:auto;display:block;">
      </a>
      <nav class="iw-nav font-body" style="display:flex;gap:24px;">
        ${navHTML}
      </nav>
      <div style="display:flex;align-items:center;gap:12px;">
        <a href="https://www.instagram.com/iwave_watersports" target="_blank" rel="noopener" aria-label="Instagram" class="iw-nav-ig" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;color:var(--ink);text-decoration:none;">
          ${IG_SVG}
        </a>
        <a href="${MAIL_BUY}" class="font-body" style="font-size:12px;color:var(--ink);text-decoration:none;padding:8px 16px;border:1px solid var(--ink);border-radius:999px;white-space:nowrap;">Reserve</a>
        <button class="iw-hamburger" aria-label="Menu" style="display:none;flex-direction:column;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:5px 2px;width:32px;height:32px;">
          <span class="iw-ham-line" style="display:block;width:22px;height:1.5px;background:var(--ink);transition:transform .25s,opacity .25s;transform-origin:center;"></span>
          <span class="iw-ham-line" style="display:block;width:22px;height:1.5px;background:var(--ink);transition:transform .25s,opacity .25s;transform-origin:center;"></span>
          <span class="iw-ham-line" style="display:block;width:14px;height:1.5px;background:var(--ink);transition:transform .25s,opacity .25s;transform-origin:center;"></span>
        </button>
      </div>
    </div>
    <nav class="iw-mobile-nav font-body" style="display:none;flex-direction:column;padding:4px 20px 24px;background:rgba(255,255,255,0.97);">
      ${mobileNavHTML}
      <a href="${MAIL_BUY}" style="display:block;margin-top:20px;text-align:center;padding:14px 20px;background:var(--ink);color:#fff;border-radius:999px;font-size:13px;text-decoration:none;">Reserve</a>
    </nav>
  `;

  const hamburger = header.querySelector('.iw-hamburger');
  const mobileNav = header.querySelector('.iw-mobile-nav');
  const lines = header.querySelectorAll('.iw-ham-line');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.style.display === 'flex';
    mobileNav.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      lines[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      lines[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      lines[2].style.opacity = '0';
    } else {
      lines[0].style.transform = '';
      lines[1].style.transform = '';
      lines[2].style.opacity = '';
    }
  });

  document.body.prepend(header);
}

function renderFooter() {
  const footer = document.createElement('div');
  footer.innerHTML = `
    <footer class="iw-footer" style="padding:60px 60px 30px;border-top:1px solid var(--ink);display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:60px;background:#fff;">
      <div>
        <a href="index.html" style="display:inline-block;margin-bottom:20px;"><img src="assets/logo.png" alt="IWAVE" class="iw-footer-logo" style="height:26px;width:auto;display:block;"></a>
        <p class="iw-footer-tagline" style="font-size:12px;color:var(--warm-grey);max-width:180px;margin-bottom:24px;">Yale-born studio.<br>Engineering the future of water.</p>
        <a href="https://www.instagram.com/iwave_watersports" target="_blank" rel="noopener" aria-label="iwave on Instagram" style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:999px;border:1px solid var(--ink);color:var(--ink);text-decoration:none;">
          ${IG_SVG}
        </a>
      </div>
      <div>
        <div class="tracked-md" style="font-size:9px;color:var(--warm-grey);margin-bottom:16px;">WAVEKART</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;font-size:12px;">
          <li><a href="wavekart-s.html" style="color:inherit;text-decoration:none;">Wavekart S</a></li>
          <li><a href="wavekart-x.html" style="color:inherit;text-decoration:none;">Wavekart X</a></li>
          <li><a href="compare.html" style="color:inherit;text-decoration:none;">Compare</a></li>
          <li><a href="${MAIL_BUY}" style="color:inherit;text-decoration:none;">Reserve</a></li>
        </ul>
      </div>
      <div>
        <div class="tracked-md" style="font-size:9px;color:var(--warm-grey);margin-bottom:16px;">COMPANY</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;font-size:12px;">
          <li><a href="about.html" style="color:inherit;text-decoration:none;">About</a></li>
          <li><a href="news.html" style="color:inherit;text-decoration:none;">Journal</a></li>
          <li><a href="faq.html" style="color:inherit;text-decoration:none;">FAQ</a></li>
          <li><a href="${MAIL_INQ}" style="color:inherit;text-decoration:none;">Contact</a></li>
        </ul>
      </div>
      <div class="iw-footer-contact-col">
        <div class="tracked-md" style="font-size:9px;color:var(--warm-grey);margin-bottom:16px;">CONTACT</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;font-size:12px;">
          <li><a href="${MAIL_INQ}" style="color:inherit;text-decoration:none;">info@iwavekart.com</a></li>
          <li><a href="${MAIL_SUPPORT}" style="color:inherit;text-decoration:none;">support@iwavekart.com</a></li>
        </ul>
      </div>
    </footer>
    <div class="iw-footer-bottom tracked-sm" style="padding:20px 60px 40px;display:flex;justify-content:space-between;font-size:10px;color:var(--warm-grey);">
      <span>© 2026 IWAVE</span>
      <span>NEW HAVEN · CT</span>
    </div>
  `;
  document.body.appendChild(footer);
}

function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;
    const icon = item.querySelector('.faq-icon');
    // close by default
    ans.style.maxHeight = '0';
    ans.style.overflow = 'hidden';
    ans.style.transition = 'max-height .4s cubic-bezier(.2,.7,.3,1), opacity .3s, padding .4s';
    ans.style.opacity = '0';
    ans.style.paddingBottom = '0';
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('faq-open');
      // use a large fixed max-height so transition works (scrollHeight not reliable on first call)
      ans.style.maxHeight = open ? '1200px' : '0';
      ans.style.opacity   = open ? '1' : '0';
      ans.style.paddingBottom = open ? '28px' : '0';
      if (icon) icon.textContent = open ? '×' : '+';
    });
  });
}

function initCountUp() {
  const els = document.querySelectorAll('[data-countup]');
  els.forEach(el => {
    const to = parseFloat(el.dataset.to);
    const duration = 1400;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
  });
}

function initKartViewer({ containerId, model, defaultSlug }) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const colors = getColors(model);
  const img    = container.querySelector('img.kart-photo');
  const kart   = container.querySelector('.iw-kart');
  const label  = container.querySelector('.kart-label');

  let currentSlug = defaultSlug || colors[0].slug;

  function update(c) {
    currentSlug = c.slug;
    const src = `assets/wavekart/${model.toLowerCase()}-${c.slug}.png`;
    if (img) {
      img.style.opacity = '0';
      img.onload  = () => { img.style.opacity = '1'; };
      img.onerror = () => { img.style.opacity = '0'; };
      img.src = src;
    }
    if (kart)  kart.style.setProperty('--kart-color', c.hex);
    if (label) label.textContent = `MODEL · ${model} · ${c.name}`;
    container.querySelectorAll('.color-swatch').forEach(sw => {
      const active = sw.dataset.slug === c.slug;
      sw.style.border  = active ? '2px solid var(--ink)' : '1px solid var(--hairline)';
      sw.style.outline = active ? '1px solid var(--ink)' : '';
      sw.style.outlineOffset = '3px';
    });
    // update finish label outside container
    const finishLabel = document.getElementById(containerId + '-finish');
    if (finishLabel) finishLabel.textContent = 'FINISH · ' + c.name;
  }

  container.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      const c = colors.find(x => x.slug === sw.dataset.slug);
      if (c) update(c);
    });
  });

  // Init
  update(colors.find(c => c.slug === currentSlug) || colors[0]);
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  renderHeader(window.PAGE_ACTIVE || '');
  renderFooter();
  initFAQ();
  initCountUp();
});
