# Notes

## Addendum — Site restructure (services consolidation + new pages)

This addendum supersedes parts of the section below: `/about.html` has now
been built, so "reserved for future About page" content has shipped.

**New pages created:**
- `/about.html` — pulls in the full 5-point "Kenapa Anaqi Ventures" list
  (the 3 that stayed on the homepage during the earlier trim, plus the 2
  that had been folded into the homepage's "Maklumat Kontraktor" box —
  see the section below for exact wording), the Maklumat Kontraktor box,
  and the 4-step "Cara Kami Bekerja" process, with a short intro/story
  paragraph added on top (no invented founding year or experience-length
  claim, consistent with the earlier "don't state exact years" decision).
- `/qa.html` — consolidated FAQ from all 3 old service pages + tips.html's
  own FAQ block, grouped into 4 sections (Upgrade 3 Fasa, Meter Baru,
  Bekalan Sementara, Umum), de-duplicated to ~18 unique questions.
- `/servis.html` — the 3 service pages merged into one page, stacked
  sections (not tabs — better for SEO crawlability and mobile, no
  JS-hidden content). Each service trimmed to: what/who/requirement
  snapshot/CTA, linking out to Tips articles for full Prosedur/Dokumen
  and to `/qa.html` for FAQ instead of repeating them. Card design: the
  flagship (Upgrade 3 Fasa) is image-left with a full detail panel, Meter
  Baru mirrors it image-right, Bekalan Sementara uses a visually smaller
  "compact" variant (secondary service, genuine hierarchy instead of 3
  identical boxes).
- `/tips/bekalan-sementara-panduan.html` — new Tips article (didn't exist
  before); holds the Prosedur + Dokumen content for that service, since
  the other two services already had dedicated Tips articles
  (`tips/upgrade-meter-3phase.html`, `tips/meter-tnb-baru.html`) that
  already contained this content — those two just got `id="prosedur"` /
  `id="dokumen"` anchors added for deep-linking from `/servis.html`.

**Old service pages** (`servis/upgrade-meter.html`, `servis/meter-baru.html`,
`servis/bekalan-sementara.html`) — **not deleted**, per instruction (likely
already indexed by Google). `vercel.json` now 301-redirects each to the
matching `/servis.html#anchor` section, so the files sit inert in the repo.

**Links updated site-wide**: nav dropdown, mobile menu, footer, sidebar,
homepage service cards, and every cross-link inside Tips articles that
used to point at the 3 old service page URLs — all now point to
`/servis.html#anchor`. Nav gained "Soalan Lazim" and "Tentang Kami" (the
placeholder from the previous session's homepage cleanup is now live).

**Homepage service cards redesigned** (`.sov-*` classes in `style.css`):
added a real photo per card (previously icon-only, all 3 cards visually
identical), floating icon badge over the photo instead of inline, and the
flagship card gets a WhatsApp quick-action icon next to "Ketahui Lebih"
that the other two don't — a real intent-based CTA difference instead of
matching buttons everywhere.

**Cache-busting bumped to v=7** site-wide (style.css/components.js/main.js
all changed again).

## Content removed from homepage, reserved for future /about.html

As part of the homepage cleanup (merging duplicate services sections and
shortening the page), the following content was removed from `index.html`.
It was **not deleted from the codebase** — the markup still exists in git
history and the CSS classes it depends on are untouched, so it can be
dropped into a future `/about.html` page largely as-is.

### 1. "Kenapa Anaqi Ventures?" (Why Us)

Section heading: *"Bekerja Dengan Kontraktor Yang Telus & Berpengalaman"*

Three trust points:
- **Berpengalaman Mengurus Permohonan Meter TNB** — pengalaman luas upgrade
  3 fasa dan meter masuk baru untuk rumah/premis kedai, serta bekalan
  sementara untuk tapak projek di Lembah Klang.
- **Sebutharga Jelas Sebelum Kerja Bermula** — tiada hidden cost, sebutharga
  bertulis diberikan sebelum kerja bermula.
- **Fokus Kawasan Selangor & Kuala Lumpur** — beroperasi di seluruh Lembah
  Klang.

CSS classes: `.why-grid`, `.why-pts`, `.wp`, `.wp-ico`, `.wp-t`

### 2. "Maklumat Kontraktor" (contractor info box)

- SSM registration: **PG0506552-W**
- "Kerja elektrik dijalankan oleh pihak berkelayakan mengikut piawaian
  keselamatan."
- "Bayaran caj sambungan & deposit TNB terus kepada TNB — bukan melalui
  kami."

CSS classes: `.cov-box`, `.cert-box`, `.cert-lbl`, `.cov-extra`

(Note: the SSM number itself is still shown elsewhere — homepage trust bar
"Berdaftar SSM", footer, and the LocalBusiness JSON-LD schema. Only this
dedicated box was removed from the homepage.)

### 3. "Cara Kami Bekerja" (4-step process)

Section heading: *"Proses Mudah & Telus"*

1. **WhatsApp Kami** — cerita keperluan anda, percuma, tanpa komitmen.
2. **Site Visit & Sebutharga** — lawat lokasi, sebutharga bertulis.
3. **Kami Submit ke TNB** — urus dokumen, follow-up hingga diluluskan.
4. **Bayar → Pasang → Siap** — bayar ke TNB, kami pasang sepenuhnya.

CSS classes: `.steps`, `.step`, `.sn`

## Also removed (not reserved — permanent deletion)

- **"Kenapa 3 Fasa?" homepage section** (Solar ATAP / EV Charger
  comparison card) — full detail already lives on
  `/servis/upgrade-meter.html`, so this was not trimmed but fully removed,
  including its supporting CSS (`.hl-grid`, `.hl-card`, `.hl-list`,
  `.hl-sub`, `.hl-badge`, `.hl-cta`) and the two images it used
  (`upgrade-db-board-3-fasa-rumah-selangor.jpg`,
  `ev-charger-rumah-selangor-kl.jpg` — both still used elsewhere, not
  deleted).
- **Mid-page "7 Tahun + di Lembah Klang. 250+ Projek Completed." parallax
  banner** — removed entirely per the earlier decision not to state
  unverified numbers; not replaced with a similar claim. Its CSS
  (`.parallax-divider*`) and JS (`PARALLAX — DIVIDER BANNER` block in
  `index.html`) were removed as dead code.

## Site-wide image loading

- `loading="lazy"` added to below-the-fold images: footer logo (all
  pages, via `components.js`), and the two content images on
  `servis/upgrade-meter.html`. Portfolio card images and the Kawasan Liputan
  map iframe already had it.
- Hero photo and the nav logo were deliberately left eager (above-the-fold,
  no lazy-loading) — lazy-loading an LCP image would hurt perceived load
  speed.
- Responsive `srcset` added for the homepage hero photo only
  (`kontraktor-elektrik-selangor-kl-hero-800.jpg` / `-1200.jpg` / original
  at 1672w, generated locally with macOS `sips` — no build step needed).
  Portfolio images were left as single-source: they're already small
  (~486px source width) and used at thumbnail size, so the benefit of
  generating 3 variants × 12 photos didn't seem worth the added file count.
  Revisit if portfolio photos are swapped for larger originals later.
