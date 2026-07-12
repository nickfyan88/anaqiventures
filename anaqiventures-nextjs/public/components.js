/* ═══════════════════════════════
   ANAQI VENTURES — Components
   root = '' (index) or '../' (subpages)
═══════════════════════════════ */

function loadComponents(root = '') {
  const WA = 'https://wa.me/60146388440?text=Salam%2C%20saya%20nak%20tanya%20pasal%20servis%20Anaqi%20Ventures.';
  /* Use root-relative path for live server; prepend root for local file testing */
  const BASE = root === '' ? './' : '../';

  /* ── TOPBAR ── */
  const topbar = document.getElementById('topbar');
  if (topbar) topbar.innerHTML = `
    📍 Lembah Klang (KL, Putrajaya, Cyberjaya & Selangor) &nbsp;·&nbsp;
    <a href="tel:+60146388440">📞 +60146388440</a>
  `;

  /* ── NAV ── */
  const navEl = document.getElementById('main-nav');
  if (navEl) navEl.innerHTML = `
    <div class="wrap nav-in">
      <a class="logo-img" href="${root}index.html">
        <img src="${BASE}anaqi-ventures-logo.png" alt="Anaqi Ventures" height="38">
      </a>
      <ul class="nmenu">
        <li id="n-home"><a href="${root}index.html">Utama</a></li>
        <li id="n-servis">
          <button>Servis <span class="caret">▾</span></button>
          <div class="drop">
            <a href="${root}servis/upgrade-meter.html" class="hi">
              <span class="di">⚡</span>
              <div><strong>Upgrade Meter 3 Fasa</strong><span>Servis utama untuk rumah & premis perniagaan</span></div>
            </a>
            <a href="${root}servis/meter-baru.html">
              <span class="di">🆕</span>
              <div><strong>Meter TNB Masuk Baru</strong><span>Rumah kediaman & premis kedai</span></div>
            </a>
            <a href="${root}servis/bekalan-sementara.html">
              <span class="di">🏗️</span>
              <div><strong>Bekalan / Meter Sementara</strong><span>Tapak pembinaan & premis tidak kekal</span></div>
            </a>
          </div>
        </li>
        <li id="n-tips"><a href="${root}tips.html">Tips & Panduan</a></li>
        <li id="n-portfolio"><a href="${root}index.html#portfolio">Portfolio</a></li>
        <li id="n-hubungi"><a href="${root}hubungi.html">Hubungi</a></li>
      </ul>
      <div class="nav-act">
        <a href="tel:+60146388440" class="btn btn-g btn-sm">📞 Call</a>
      </div>
      <div class="ham" onclick="toggleMob()">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;

  /* ── MOBILE MENU ── */
  const mob = document.getElementById('mmenu');
  if (mob) mob.innerHTML = `
    <a class="mob-a" href="${root}index.html">🏠 Utama</a>
    <span class="mob-a" onclick="toggleSub('ms1')">⚡ Servis ▾</span>
    <div class="mob-sub" id="ms1">
      <a href="${root}servis/upgrade-meter.html">⚡ Upgrade Meter 3 Fasa</a>
      <a href="${root}servis/meter-baru.html">🆕 Meter TNB Masuk Baru</a>
      <a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan / Meter Sementara</a>
    </div>
    <a class="mob-a" href="${root}tips.html">💡 Tips & Panduan</a>
    <a class="mob-a" href="${root}index.html#portfolio">📸 Portfolio</a>
    <a class="mob-a" href="${root}hubungi.html">📞 Hubungi Kami</a>
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px">
      <a href="${WA}" class="btn btn-w btn-bl" target="_blank">💬 WhatsApp Kami</a>
      <a href="tel:+60146388440" class="btn btn-g btn-bl">📞 +60146388440</a>
    </div>
  `;

  /* ── SIDEBAR ── */
  const sb = document.getElementById('sidebar');
  if (sb) sb.innerHTML = `
    <div class="sb-box">
      <h5>Servis Kami</h5>
      <ul>
        <li><a href="${root}servis/upgrade-meter.html">⚡ Upgrade Meter 3 Fasa</a></li>
        <li><a href="${root}servis/meter-baru.html">🆕 Meter TNB Masuk Baru</a></li>
        <li><a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan / Meter Sementara</a></li>
      </ul>
    </div>
    <div class="sb-wa">
      <div style="font-size:28px;margin-bottom:8px">💬</div>
      <h5>Sebutharga Percuma</h5>
      <p>Harga telus, tiada hidden cost. Respond dalam masa 1 jam.</p>
      <a href="${WA}" class="btn btn-w btn-bl btn-sm" target="_blank">💬 WhatsApp Kami</a>
      <a href="tel:+60146388440" class="btn btn-g btn-bl btn-sm" style="margin-top:8px">📞 +60146388440</a>
    </div>
  `;

  /* ── PORTFOLIO SECTION ── */
  const portfolio = document.getElementById('section-portfolio');
  if (portfolio) {
    const photos = [
      { img: `${BASE}Porfolio/pemasangan-kabel-underground-3-fasa-jenjarom-selangor.jpeg`,   badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Pemasangan Kabel Underground 3 Fasa — Jenjarom, Selangor' },
      { img: `${BASE}Porfolio/pemasangan-panel-meter-3-fasa-rumah-kediaman-selangor.jpeg`,   badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Pemasangan Panel Meter 3 Fasa — Rumah Kediaman, Selangor' },
      { img: `${BASE}Porfolio/pemasangan-db-board-pvc-45way-upgrade-3-fasa-selangor.jpeg`,   badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Pemasangan DB Board PVC 45-Way — Selangor' },
      { img: `${BASE}Porfolio/pemasangan-papan-meter-3-fasa-lobi-rumah-selangor.jpeg`,       badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Pemasangan Papan Meter 3 Fasa — Rumah, Selangor' },
      { img: `${BASE}Porfolio/penyambungan-busbar-cutout-lot-kedai-komersial-selangor.jpeg`, badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Penyambungan Busbar ke Cutout — Lot Kedai Komersial' },
      { img: `${BASE}Porfolio/pemasangan-cutout-board-upgrade-3-fasa-banglo-subang-jaya.jpeg`, badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Pemasangan Cutout Board — Banglo, Subang Jaya' },
      { img: `${BASE}Porfolio/upgrade-meter-3-fasa-rumah-teres-sepang-selangor.jpeg`,        badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Upgrade Meter 3 Fasa — Rumah Teres, Sepang' },
      { img: `${BASE}Porfolio/siap-pendawaian-unit-kondominium-kuala-lumpur.jpeg`,           badge: '⚡ Upgrade Meter 3 Fasa', caption: 'Siap Pendawaian & Lampu — Unit Kondominium, KL' },
      { img: `${BASE}Porfolio/permohonan-meter-baharu-banglo-rumah-2-selangor.jpeg`,          badge: '🆕 Meter Baru',              caption: 'Permohonan Meter Baharu — Banglo Rumah Baru' },
      { img: `${BASE}Porfolio/pemasangan-meter-baharu-banglo-close-up-selangor.jpeg`,         badge: '🆕 Meter Baru',              caption: 'Pemasangan Meter Baharu — Close-Up' },
      { img: `${BASE}Porfolio/pemasangan-box-meter-sementara-bangi-selangor.jpeg`,            badge: '🏗️ Bekalan Sementara',       caption: 'Pemasangan Box Meter Sementara — Bangi, Selangor' },
      { img: `${BASE}Porfolio/pemasangan-box-meter-3-fasa-tiang-tnb-selangor-3.jpeg`,         badge: '🏗️ Bekalan Sementara',       caption: 'Box Meter Sementara 3 Fasa — Siap Dipasang' },
    ];

    portfolio.innerHTML = `
      <div class="wrap">
        <span class="eye reveal">Portfolio Projek Kami</span>
        <h2 class="h2 reveal">Projek Yang Telah Kami Siapkan</h2>
        <p class="sub reveal">Sebahagian daripada projek elektrik yang telah kami laksanakan dengan jayanya di seluruh Selangor dan Kuala Lumpur — kemas, selamat dan profesional.</p>
        <div class="port-grid reveal-group">
          ${photos.map(p => `
            <div class="port-card">
              <div class="port-img-wrap">
                <img src="${p.img}" alt="${p.caption}" loading="lazy" onerror="this.parentElement.style.background='var(--bg-subtle)'">
                <span class="port-badge">${p.badge}</span>
              </div>
              <div class="port-info">
                <p>${p.caption}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ── KAWASAN SECTION ── */
  const kawasan = document.getElementById('section-kawasan');
  if (kawasan) {
    const areas = [
      'Shah Alam','Subang Jaya','Petaling Jaya','Klang','Puchong',
      'Sepang','Jenjarom','Rawang','Gombak','Ampang',
      'Cheras','Kuala Lumpur','Putrajaya','Cyberjaya','Kajang','Semenyih'
    ];
    kawasan.innerHTML = `
      <div class="wrap">
        <span class="eye reveal">Kawasan Liputan</span>
        <h2 class="h2 reveal">Kawasan Yang Kami Servis</h2>
        <p class="sub reveal">Anaqi Ventures beroperasi merangkumi seluruh <strong>Lembah Klang</strong> — termasuk Kuala Lumpur, Putrajaya, Cyberjaya dan Selangor. Melayani pemilik rumah kediaman, kedai-lot dan premis perniagaan. Belum jumpa kawasan anda? Hubungi kami — kami akan cuba bantu!</p>
        <div class="kaw-grid reveal-group">
          <div class="kaw-tags">
            ${areas.map(a => `<span class="kaw-tag">${a}</span>`).join('')}
          </div>
          <div class="kaw-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.7170714762!2d101.20929!3d3.07380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b03ffffffff%3A0x800000000000000!2sSelangor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
              width="100%" height="340" style="border:0;border-radius:var(--r);filter:brightness(.85) saturate(.9)" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    `;
  }

  /* ── TIPS PREVIEW (homepage only) ── */
  const tipsPreview = document.getElementById('section-tips-preview');
  if (tipsPreview) {
    const tips = [
      {
        icon: '⚡',
        tag: 'Panduan Upgrade',
        title: 'Cara Upgrade Meter 1 Fasa ke 3 Fasa Untuk Rumah & Premis',
        excerpt: 'Panduan naik taraf meter TNB untuk rumah kediaman dan premis perniagaan, termasuk persediaan solar atau EV charger.',
        href: `${root}tips/upgrade-meter-3phase.html`,
        badge: 'upgrade'
      },
      {
        icon: '🆕',
        tag: 'Panduan Meter Baru',
        title: 'Cara Mohon Meter TNB Masuk Baru Untuk Rumah & Kedai',
        excerpt: 'Dokumen dan proses permohonan meter TNB masuk baru untuk rumah kediaman, kedai atau premis perniagaan.',
        href: `${root}tips/meter-tnb-baru.html`,
        badge: 'baru'
      },
      {
        icon: '🏗️',
        tag: 'Meter Sementara',
        title: 'Bila Perlu Mohon Bekalan Sementara TNB?',
        excerpt: 'Untuk tapak pembinaan atau premis tidak kekal yang perlukan bekalan elektrik sementara.',
        href: `${root}servis/bekalan-sementara.html`,
        badge: 'sementara'
      }
    ];

    tipsPreview.innerHTML = `
      <div class="wrap">
        <div class="tips-header reveal">
          <div>
            <span class="eye">Tips & Panduan</span>
            <h2 class="h2">Panduan Berguna Untuk Anda</h2>
            <p class="sub">Panduan utama tentang upgrade meter TNB ke 3 fasa, bersama panduan ringkas meter masuk baru dan bekalan sementara tapak projek.</p>
          </div>
          <a href="${root}tips.html" class="btn btn-p" style="align-self:flex-start;flex-shrink:0">Lihat Semua Panduan →</a>
        </div>
        <div class="tips-grid reveal-group">
          ${tips.map(t => `
            <a href="${t.href}" class="tip-card-home tip-${t.badge}">
              <span class="tip-ico-home">${t.icon}</span>
              <span class="tip-tag-home">${t.tag}</span>
              <h3>${t.title}</h3>
              <p>${t.excerpt}</p>
              <span class="tip-read">Baca Selanjutnya →</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ── FOOTER ── */
  const ft = document.getElementById('main-footer');
  if (ft) ft.innerHTML = `
    <div class="wrap">
      <div class="fgrid">
        <div class="fbrand">
          <a class="logo-img" href="${root}index.html" style="display:inline-block;margin-bottom:4px">
            <img src="${BASE}anaqi-ventures-logo.png" alt="Anaqi Ventures" height="52" style="display:block">
          </a>
          <p>Kontraktor elektrik di Lembah Klang. Fokus utama pada upgrade meter TNB ke 3 fasa untuk rumah kediaman dan premis perniagaan. Turut urus meter masuk baru dan bekalan sementara tapak projek.</p>
          <p style="font-size:12px;color:rgba(255,255,255,.55);margin-top:8px">No. Pendaftaran Perniagaan (SSM): PG0506552-W</p>
        </div>
        <div class="fcol">
          <h5>Servis</h5>
          <ul>
            <li><a href="${root}servis/upgrade-meter.html">⚡ Upgrade Meter 3 Fasa</a></li>
            <li><a href="${root}servis/meter-baru.html">🆕 Meter TNB Masuk Baru</a></li>
            <li><a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan / Meter Sementara</a></li>
          </ul>
        </div>
        <div class="fcol">
          <h5>Pautan</h5>
          <ul>
            <li><a href="${root}index.html">Utama</a></li>
            <li><a href="${root}tips.html">Tips & Panduan</a></li>
            <li><a href="${root}index.html#portfolio">Portfolio Projek</a></li>
            <li><a href="${root}servis/upgrade-meter.html#faq">Soalan Lazim (FAQ)</a></li>
            <li><a href="${root}hubungi.html">Hubungi Kami</a></li>
          </ul>
        </div>
        <div class="fcol">
          <h5>Ikuti Kami</h5>
          <ul class="fsocial">
            <li><a href="https://www.facebook.com/anaqiventure" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" style="width:18px;height:18px;flex-shrink:0"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94"/></svg>
              Facebook
            </a></li>
            <li><a href="https://www.tiktok.com/@anaqiventuresupgrademete" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" style="width:18px;height:18px;flex-shrink:0"><path d="M16.6 5.82a4.28 4.28 0 0 1-3.05-2.05c-.2-.34-.35-.71-.43-1.1h-3.13v13.34a2.36 2.36 0 0 1-4.2 1.5 2.36 2.36 0 0 1 1.66-4 2.4 2.4 0 0 1 .7.1V10.4a5.5 5.5 0 0 0-.7-.05A5.53 5.53 0 0 0 2 15.88a5.53 5.53 0 0 0 9.42 3.92 5.5 5.5 0 0 0 1.6-3.92V9.34a7.27 7.27 0 0 0 4.24 1.36V7.5a4.28 4.28 0 0 1-.66-1.68"/></svg>
              TikTok
            </a></li>
          </ul>
        </div>
        <div class="fcol">
          <h5>Subscribe Newsletter</h5>
          <p style="font-size:13px;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:14px">Dapatkan tips & promosi terkini terus ke email anda.</p>
          <form class="fnews-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent='✓ Terima Kasih'; this.querySelector('input').value='';">
            <input type="email" placeholder="Email anda" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="fbot">
        <p>© 2026 Anaqi Ventures. Hak Cipta Terpelihara.</p>
      </div>
    </div>
  `;

  /* ── HIGHLIGHT CURRENT NAV ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nmenu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const fn = href.split('/').pop().split('#')[0];
    if (fn && path.endsWith(fn)) a.closest('li')?.classList.add('act');
  });
  document.querySelectorAll('#sidebar a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const fn = href.split('/').pop();
    if (fn && path.endsWith(fn)) a.classList.add('cur');
  });
}
