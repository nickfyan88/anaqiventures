/* ═══════════════════════════════
   ANAQI VENTURES — Components
   Call loadComponents(root) where
   root = '' (index) or '../' (subpages)
═══════════════════════════════ */

function loadComponents(root = '') {
  const WA = 'https://wa.me/60146388440?text=Salam%2C%20saya%20nak%20tanya%20pasal%20servis%20Anaqi%20Ventures.';

  /* ── TOPBAR ── */
  const topbar = document.getElementById('topbar');
  if (topbar) topbar.innerHTML = `
    ✅ Berdaftar Rasmi TNB &nbsp;·&nbsp; 📍 Klang Valley & Selangor &nbsp;·&nbsp;
    <a href="tel:+60146388440">📞 +60146388440</a>
  `;

  /* ── NAV ── */
  const navEl = document.getElementById('main-nav');
  if (navEl) navEl.innerHTML = `
    <div class="wrap nav-in">
      <a class="logo" href="${root}index.html">Anaqi<span>Ventures</span></a>
      <ul class="nmenu">
        <li id="n-home"><a href="${root}index.html">Utama</a></li>
        <li id="n-servis">
          <button>Servis <span class="caret">▾</span></button>
          <div class="drop">
            <a href="${root}servis/upgrade-meter.html" class="hi">
              <span class="di">⚡</span>
              <div><strong>Upgrade / Downgrade Meter</strong><span>1Phase ↔ 3Phase — servis utama kami</span></div>
            </a>
            <a href="${root}servis/solar-nem.html" class="hs">
              <span class="di">☀️</span>
              <div><strong>Solar PV & NEM</strong><span>Jimat bil, jual balik ke TNB</span></div>
            </a>
            <a href="${root}servis/meter-baru.html">
              <span class="di">🆕</span>
              <div><strong>Meter Baru (Newly Build)</strong><span>Premis tak pernah ada meter</span></div>
            </a>
            <a href="${root}servis/bekalan-sementara.html">
              <span class="di">🏗️</span>
              <div><strong>Bekalan Sementara</strong><span>Temporary supply tapak projek</span></div>
            </a>
            <a href="${root}servis/bekalan-berkumpulan.html">
              <span class="di">🏘️</span>
              <div><strong>Bekalan Berkumpulan</strong><span>Group supply taman / shoplot</span></div>
            </a>
          </div>
        </li>
        <li id="n-tips"><a href="${root}tips.html">Tips & Panduan</a></li>
        <li id="n-hubungi"><a href="${root}hubungi.html">Hubungi</a></li>
      </ul>
      <div class="nav-act">
        <a href="tel:+60146388440" class="btn btn-g btn-sm">📞 Call</a>
        <a href="${WA}" class="btn btn-w btn-sm" target="_blank">💬 WhatsApp</a>
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
      <a href="${root}servis/upgrade-meter.html">⚡ Upgrade / Downgrade Meter</a>
      <a href="${root}servis/solar-nem.html">☀️ Solar PV & NEM</a>
      <a href="${root}servis/meter-baru.html">🆕 Meter Baru (Newly Build)</a>
      <a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan Sementara</a>
      <a href="${root}servis/bekalan-berkumpulan.html">🏘️ Bekalan Berkumpulan</a>
    </div>
    <a class="mob-a" href="${root}tips.html">💡 Tips & Panduan</a>
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
        <li><a href="${root}servis/upgrade-meter.html">⚡ Upgrade / Downgrade Meter</a></li>
        <li><a href="${root}servis/solar-nem.html">☀️ Solar PV & NEM</a></li>
        <li><a href="${root}servis/meter-baru.html">🆕 Meter Baru (Newly Build)</a></li>
        <li><a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan Sementara</a></li>
        <li><a href="${root}servis/bekalan-berkumpulan.html">🏘️ Bekalan Berkumpulan</a></li>
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

  /* ── FOOTER ── */
  const ft = document.getElementById('main-footer');
  if (ft) ft.innerHTML = `
    <div class="wrap">
      <div class="fgrid">
        <div class="fbrand">
          <a class="logo" href="${root}index.html" style="font-size:22px">Anaqi<span style="color:var(--orange)">Ventures</span></a>
          <p>Kontraktor elektrik berdaftar TNB di Klang Valley & Selangor. Pakar upgrade meter 3phase, solar PV NEM, meter baru, bekalan sementara dan bekalan berkumpulan.</p>
          <div style="margin-top:16px">
            <div class="fci">📞 <a href="tel:+60146388440">+60146388440</a></div>
            <div class="fci">✉️ <a href="mailto:info@anaqiventures.com.my">info@anaqiventures.com.my</a></div>
            <div class="fci">📍 33 Jalan SP 10/13, Bandar Saujana Putra, 42610 Jenjarom, Selangor</div>
          </div>
        </div>
        <div class="fcol">
          <h5>Servis</h5>
          <ul>
            <li><a href="${root}servis/upgrade-meter.html">⚡ Upgrade / Downgrade Meter</a></li>
            <li><a href="${root}servis/solar-nem.html">☀️ Solar PV & NEM</a></li>
            <li><a href="${root}servis/meter-baru.html">🆕 Meter Baru</a></li>
            <li><a href="${root}servis/bekalan-sementara.html">🏗️ Bekalan Sementara</a></li>
            <li><a href="${root}servis/bekalan-berkumpulan.html">🏘️ Bekalan Berkumpulan</a></li>
          </ul>
        </div>
        <div class="fcol">
          <h5>Pautan</h5>
          <ul>
            <li><a href="${root}index.html">Utama</a></li>
            <li><a href="${root}tips.html">Tips & Panduan</a></li>
            <li><a href="${root}hubungi.html">Hubungi Kami</a></li>
            <li><a href="https://www.facebook.com/anaqiventure" target="_blank">Facebook</a></li>
            <li><a href="https://www.tiktok.com/@anaqi.ventureselektrik" target="_blank">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div class="fbot">
        <p>© 2026 Anaqi Ventures. Berdaftar TNB — Klang Valley & Selangor.</p>
        <p>Isnin – Sabtu: 8:00 pagi – 6:00 petang</p>
      </div>
    </div>
  `;

  /* ── HIGHLIGHT CURRENT NAV ITEM ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nmenu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const filename = href.split('/').pop();
    if (filename && path.endsWith(filename)) {
      a.closest('li')?.classList.add('act');
    }
  });

  /* ── MARK CURRENT SIDEBAR LINK ── */
  document.querySelectorAll('#sidebar a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const filename = href.split('/').pop();
    if (filename && path.endsWith(filename)) {
      a.classList.add('cur');
    }
  });
}
