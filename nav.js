/* ── STORE LINKS ── */
const GP  = 'https://play.google.com/store/apps/details?id=com.pathao.user';
const AS  = 'https://apps.apple.com/np/app/pathao/id1227524933';
const GPD = 'https://play.google.com/store/apps/details?id=com.pathao.driver';

/* ── ICONS ── */
const gpIcon  = `<svg viewBox="0 0 512 512" fill="currentColor" width="14" height="14"><path d="M48 59.49v393a4.33 4.33 0 007.35 3.06l288-196.5a4.33 4.33 0 000-7.12L55.35 56.43A4.33 4.33 0 0048 59.49z"/><path d="M400 256L152.11 420.76 93.23 461.14 308 256 93.23 50.86l58.88 40.38z"/></svg>`;
const asIcon  = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;
const pinIcon = `<svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;

/* Helper: wrap icon in dropdown-icon box */
const icon = cls => `<div class="dropdown-icon"><i class="ph-fill ${cls}"></i></div>`;
const phi  = (cls, style = '') => `<i class="ph-fill ${cls}"${style ? ` style="${style}"` : ''}></i>`;

const storeBadges = (includeAS = true) => `
  <a href="${GP}" target="_blank" rel="noopener" class="store-badge">${gpIcon} Google Play</a>
  ${includeAS ? `<a href="${AS}" target="_blank" rel="noopener" class="store-badge">${asIcon} App Store</a>` : ''}`;

/* ── NAV ── */
function renderNav(activePage) {
  const a = p => activePage === p ? 'active' : '';
  return `
  <nav class="nav">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">${pinIcon}</div>pathao
    </a>
    <ul class="nav-links" id="navLinks">

      <li class="nav-item">
        <span class="nav-link ${a('services')}">Services <span class="dot"></span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </span>
        <div class="nav-dropdown">
          <a href="bike.html"   class="dropdown-item">${icon('ph-motorcycle')} <div class="dropdown-text"><strong>Bike</strong><span>Beat the Traffic, Save Time</span></div></a>
          <a href="car.html"    class="dropdown-item">${icon('ph-car')} <div class="dropdown-text"><strong>Car</strong><span>Travel in Comfort, at Your Convenience</span></div></a>
          <a href="food.html"   class="dropdown-item">${icon('ph-hamburger')} <div class="dropdown-text"><strong>Food</strong><span>Fastest Food Delivery in Nepal</span></div></a>
          <a href="parcel.html" class="dropdown-item">${icon('ph-package')} <div class="dropdown-text"><strong>Parcel</strong><span>Fast &amp; Reliable Delivery</span></div><span class="dropdown-badge">NEW</span></a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-store-row">${storeBadges()}</div>
        </div>
      </li>

      <li class="nav-item">
        <span class="nav-link ${a('earn')}">Earn With Pathao
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </span>
        <div class="nav-dropdown">
          <a href="earn-tuktuk.html" class="dropdown-item">${icon('ph-taxi')} <div class="dropdown-text"><strong>Earn With Tuktuk</strong></div></a>
          <a href="earn-bike.html"   class="dropdown-item">${icon('ph-motorcycle')} <div class="dropdown-text"><strong>Earn With Bike</strong><span>Become a Rider</span></div></a>
          <a href="earn-car.html"    class="dropdown-item">${icon('ph-car')} <div class="dropdown-text"><strong>Earn With Car</strong><span>Become a Captain</span></div></a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-store-row"><a href="${GPD}" target="_blank" rel="noopener" class="store-badge">${gpIcon} Download Drive App</a></div>
        </div>
      </li>

      <li class="nav-item"><a href="help.html" class="nav-link ${a('help')}">Help</a></li>
      <li class="nav-item"><a href="blog.html" class="nav-link ${a('blog')}">Blog</a></li>

      <li class="nav-item">
        <span class="nav-link ${a('more')}">More
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </span>
        <div class="nav-dropdown" style="right:0;left:auto;">
          <a href="about.html" class="dropdown-item">${icon('ph-info')} <div class="dropdown-text"><strong>About Us</strong><span>Our story, mission &amp; team</span></div></a>
          <a href="help.html"  class="dropdown-item">${icon('ph-newspaper')} <div class="dropdown-text"><strong>Press &amp; Media</strong><span>Press releases &amp; press kit</span></div></a>
          <a href="help.html"  class="dropdown-item">${icon('ph-envelope')} <div class="dropdown-text"><strong>Contact</strong><span>Get in touch with us</span></div></a>
        </div>
      </li>

    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle Menu"><span></span><span></span><span></span></button>
  </nav>`;
}

/* ── FOOTER ── */
function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-top">
      <a href="index.html" class="footer-logo"><div class="footer-logo-icon">${pinIcon}</div>pathao</a>
      <div class="footer-nav">
        <a href="${GP}" target="_blank" rel="noopener">Download App</a>
        <a href="about.html">About Us</a>
        <a href="blog.html">Blog</a>
        <a href="help.html">Press Kit</a>
        <a href="help.html">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-apps">
        <span class="footer-app-label">User App</span>
        <div class="footer-store-badges">
          <a href="${GP}"  target="_blank" rel="noopener" class="footer-store-badge">${gpIcon} Google Play</a>
          <a href="${AS}"  target="_blank" rel="noopener" class="footer-store-badge">${asIcon} App Store</a>
        </div>
        <span class="footer-app-label" style="margin-left:16px">Drive App</span>
        <div class="footer-store-badges">
          <a href="${GPD}" target="_blank" rel="noopener" class="footer-store-badge">${gpIcon} Google Play</a>
        </div>
      </div>
      <div class="footer-right"><div class="footer-region">${phi('ph-globe')} NP (EN)</div></div>
    </div>
    <p class="footer-copy">© 2015-2026 Pathao All rights reserved.</p>
  </footer>`;
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  document.getElementById('hamburger')?.addEventListener('click', () =>
    document.getElementById('navLinks').classList.toggle('open')
  );

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q =>
    q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'))
  );

  // FAQ tabs
  document.querySelectorAll('.faq-tab').forEach(tab =>
    tab.addEventListener('click', () => {
      document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.faq-panel').forEach(p =>
        p.classList.toggle('hidden', p.id !== tab.dataset.target)
      );
    })
  );

  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = `${phi('ph-check-circle')} Message Sent!`;
    btn.style.background = '#22c55e';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3000);
  });

  // Register form
  document.getElementById('registerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-primary');
    const orig = btn.innerHTML;
    btn.innerHTML = `${phi('ph-check-circle')} Submitted! We'll contact you soon.`;
    btn.style.background = '#22c55e';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 4000);
  });

  document.body.classList.add('page-fade');
});