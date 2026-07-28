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
    <svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> Lembah Klang (KL, Putrajaya, Cyberjaya & Selangor) &nbsp;·&nbsp;
    <a href="tel:+60146388440"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> +60146388440</a>
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
            <a href="${root}servis.html#upgrade-3-fasa" class="hi">
              <span class="di"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span>
              <div><strong>Upgrade Meter 3 Fasa</strong><span>Servis utama untuk rumah & premis perniagaan</span></div>
            </a>
            <a href="${root}servis.html#meter-baru">
              <span class="di"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg></span>
              <div><strong>Meter TNB Masuk Baru</strong><span>Rumah kediaman & premis kedai</span></div>
            </a>
            <a href="${root}servis.html#bekalan-sementara">
              <span class="di"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg></span>
              <div><strong>Bekalan / Meter Sementara</strong><span>Tapak pembinaan & premis tidak kekal</span></div>
            </a>
            <a href="${root}qa.html" class="drop-faq">
              <span class="di"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></span>
              <div><strong>Soalan Lazim</strong><span>Semua FAQ tentang servis kami</span></div>
            </a>
          </div>
        </li>
        <li id="n-portfolio"><a href="${root}portfolio.html">Projek Kami</a></li>
        <li id="n-tips"><a href="${root}tips.html">Tips</a></li>
      </ul>
      <div class="nav-act">
        <a href="${WA}" class="btn btn-w btn-sm" target="_blank"><svg class="icn icn-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp</a>
        <a href="tel:+60146388440" class="btn btn-g btn-sm"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> Hubungi Pakar</a>
      </div>
      <button type="button" class="ham" onclick="toggleMob()" aria-label="Buka menu" aria-expanded="false" aria-controls="mmenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  /* ── MOBILE MENU ── */
  const mob = document.getElementById('mmenu');
  if (mob) mob.innerHTML = `
    <a class="mob-a" href="${root}index.html"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Utama</a>
          <a class="mob-a" href="${root}about.html"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>Tentang Kami</a>
    <button type="button" class="mob-a" onclick="toggleSub('ms1')" aria-expanded="false" aria-controls="ms1"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Servis ▾</button>
    <div class="mob-sub" id="ms1">
      <a href="${root}servis.html#upgrade-3-fasa"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa</a>
      <a href="${root}servis.html#meter-baru"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Meter TNB Masuk Baru</a>
      <a href="${root}servis.html#bekalan-sementara"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg> Bekalan / Meter Sementara</a>
      
    </div>
    <a class="mob-a" href="${root}portfolio.html"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg> Projek Kami</a>
    <a class="mob-a" href="${root}tips.html"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Tips</a>
    <a class="mob-a" href="${root}qa.html"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>Soalan Lazim (FAQ)</a>
          <div class="mob-cta">
      <span class="mob-cta-lbl">Hubungi Kami Segera</span>
      <a href="${WA}" class="btn btn-w btn-bl" target="_blank"><svg class="icn icn-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Kami</a>
      <a href="tel:+60146388440" class="btn btn-g btn-bl"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> Hubungi Pakar</a>
    </div>
  `;

  /* ── SIDEBAR ── */
  const sb = document.getElementById('sidebar');
  if (sb) sb.innerHTML = `
    <div class="sb-box">
      <h5>Servis Kami</h5>
      <ul>
        <li><a href="${root}servis.html#upgrade-3-fasa"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa</a></li>
        <li><a href="${root}servis.html#meter-baru"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Meter TNB Masuk Baru</a></li>
        <li><a href="${root}servis.html#bekalan-sementara"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg> Bekalan / Meter Sementara</a></li>
      </ul>
    </div>
    <div class="sb-wa">
      <div style="font-size:28px;margin-bottom:8px"><svg class="icn icn-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></div>
      <h5>Sebutharga Percuma</h5>
      <p>Harga telus, tiada hidden cost. Respond dalam masa 1 jam.</p>
      <a href="${WA}" class="btn btn-w btn-bl btn-sm" target="_blank"><svg class="icn icn-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Kami</a>
      <a href="tel:+60146388440" class="btn btn-g btn-bl btn-sm" style="margin-top:8px"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> +60146388440</a>
    </div>
  `;

  /* ── PORTFOLIO DATA (shared: homepage preview + portfolio.html) ── */
  const portfolioPhotos = [
    { img: `${BASE}Porfolio/pemasangan-kabel-underground-3-fasa-jenjarom-selangor.jpeg`,   badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Kabel Underground 3 Fasa — Jenjarom, Selangor' },
    { img: `${BASE}Porfolio/penyambungan-panel-meter-komersial-bangunan-selangor.jpeg`,     badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Panel Meter — Bangunan Komersial, Selangor', featured: true },
    { img: `${BASE}Porfolio/pemasangan-db-board-pvc-45way-upgrade-3-fasa-selangor.jpeg`,    badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'DB Board PVC 45-Way — Upgrade 3 Fasa, Selangor' },
    { img: `${BASE}Porfolio/pegawai-tnb-site-visit-upgrade-3-fasa-rumah-selangor.jpeg`,     badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Site Visit Pegawai TNB — Rumah Kediaman' },
    { img: `${BASE}Porfolio/penyambungan-busbar-cutout-lot-kedai-komersial-selangor.jpeg`,  badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Busbar ke Cutout — Lot Kedai Komersial, Selangor' },
    { img: `${BASE}Porfolio/pemasangan-cutout-board-upgrade-3-fasa-banglo-subang-jaya.jpeg`, badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Pemasangan Cutout Board — Banglo, Subang Jaya', featured: true },
    { img: `${BASE}Porfolio/upgrade-meter-3-fasa-rumah-teres-sepang-selangor.jpeg`,        badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Upgrade Meter 3 Fasa — Rumah Teres, Sepang' },
    { img: `${BASE}Porfolio/siap-pendawaian-unit-kondominium-kuala-lumpur.jpeg`,           badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa', caption: 'Siap Pendawaian & Lampu — Unit Kondominium, KL' },
    { img: `${BASE}Porfolio/permohonan-meter-baharu-banglo-rumah-2-selangor.jpeg`,          badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Meter Baru',              caption: 'Permohonan Meter Baharu — Banglo Rumah, Selangor', featured: true },
    { img: `${BASE}Porfolio/pemasangan-meter-baharu-banglo-close-up-selangor.jpeg`,         badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Meter Baru',              caption: 'Pemasangan Meter Baharu — Close-Up, Selangor' },
    { img: `${BASE}Porfolio/pemasangan-box-meter-sementara-bangi-selangor-2.jpeg`,          badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg> Bekalan Sementara',       caption: 'Pemasangan Box Meter Sementara — Bangi, Selangor', featured: true },
    { img: `${BASE}Porfolio/pemasangan-box-meter-3-fasa-tiang-tnb-selangor-3.jpeg`,         badge: '<svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg> Bekalan Sementara',       caption: 'Box Meter Sementara 3 Fasa — Siap Dipasang' },
  ];
  const portCard = p => `
    <div class="port-card">
      <div class="port-img-wrap">
        <img src="${p.img}" alt="${p.caption}" loading="lazy" onerror="this.parentElement.style.background='var(--bg-subtle)'">
        <span class="port-badge">${p.badge}</span>
      </div>
      <div class="port-info">
        <p>${p.caption}</p>
      </div>
    </div>
  `;
  const pfItem = p => `
    <a href="${root}portfolio.html" class="pf-item">
      <img src="${p.img}" alt="${p.caption}" loading="lazy">
      <span class="pf-cap">${p.caption}</span>
    </a>
  `;

  /* ── PORTFOLIO FILMSTRIP (homepage preview, nested in the services section) ── */
  const portfolio = document.getElementById('section-portfolio');
  if (portfolio) {
    const featured = portfolioPhotos.filter(p => p.featured);
    portfolio.innerHTML = `
      <div class="pf-head reveal">
        <span class="pf-eyebrow">Bukti Kerja Sebenar</span>
        <a href="${root}portfolio.html" class="hlink-ink">Lihat Semua Projek →</a>
      </div>
      <div class="pf-strip reveal-group">
        ${featured.map(pfItem).join('')}
      </div>
    `;
  }

  /* ── PORTFOLIO SECTION (dedicated page — remaining projects) ── */
  const portfolioAll = document.getElementById('section-portfolio-all');
  if (portfolioAll) {
    const rest = portfolioPhotos.filter(p => !p.featured);
    portfolioAll.innerHTML = `
      <div class="wrap">
        <div class="port-grid port-grid-4 reveal-group">
          ${rest.map(portCard).join('')}
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

  /* ── FOOTER ── */
  const ft = document.getElementById('main-footer');
  if (ft) ft.innerHTML = `
    <div class="wrap">
      <div class="fgrid">
        <div class="fbrand">
          <a class="logo-img" href="${root}index.html" style="display:inline-block;margin-bottom:4px">
            <img src="${BASE}anaqi-ventures-logo.png" alt="Anaqi Ventures" height="52" style="display:block" loading="lazy">
          </a>
          <p>Kontraktor elektrik di Lembah Klang. Fokus utama pada upgrade meter TNB ke 3 fasa untuk rumah kediaman dan premis perniagaan. Turut urus meter masuk baru dan bekalan sementara tapak projek.</p>
          <p style="font-size:12px;color:rgba(255,255,255,.55);margin-top:8px">No. Pendaftaran Perniagaan (SSM): PG0506552-W</p>
        </div>
        <div class="fcol">
          <h5>Servis</h5>
          <ul>
            <li><a href="${root}servis.html#upgrade-3-fasa"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> Upgrade Meter 3 Fasa</a></li>
            <li><a href="${root}servis.html#meter-baru"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg> Meter TNB Masuk Baru</a></li>
            <li><a href="${root}servis.html#bekalan-sementara"><svg class="icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg> Bekalan / Meter Sementara</a></li>
          </ul>
        </div>
        <div class="fcol">
          <h5>Pautan</h5>
          <ul>
            <li><a href="${root}index.html">Utama</a></li>
            <li><a href="${root}about.html">Tentang Kami</a></li>
            <li><a href="${root}tips.html">Tips & Panduan</a></li>
            <li><a href="${root}portfolio.html">Portfolio Projek</a></li>
            <li><a href="${root}qa.html">Soalan Lazim (Q&A)</a></li>
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
            <input type="email" placeholder="Email anda" aria-label="Email anda" required>
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
