// =========================
// FILE: app.js
// =========================

console.log("✅ app.js loaded");

// Helper: create element from HTML string
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function sharePage(customTitle) {
  if (navigator.share) {
    navigator.share({
      title: customTitle || document.title,
      text: 'Check out Annabelle Fasuba’s official website',
      url: window.location.href
    }).catch(err => console.log('Share cancelled', err));
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  }
}

// =========================
// DATA
// =========================

// Achievements (grouped by year)
const achievements = [
  {
    year: '2024',
    records: [
      { title: 'English Schools U15 100m Champion 🥇', detail: '12.03s • Birmingham • 13 Jul' },
      { title: 'England Athletics U15 Open 100m Finalist 🥉', detail: '12.15s (3rd) • Birmingham • 27 Jul' },
      { title: 'South West Schools 200m Champion (Record) 🥇', detail: '24.74s • Exeter • 15 Jun' },
      { title: 'Devon County 200m Champion (Record) 🥇', detail: '25.03s • Exeter • 12 May' },
      { title: 'Devon County Schools 100m Champion (Record) 🥇', detail: '12.13s • Exeter • 8 Jun' },
      { title: 'Indoor 60m Wins (Heats + Final) 🥇', detail: '7.61s & 7.65s • Eltham • 29 Dec' },
      { title: 'South West Athletics League Wins', detail: '100m & 200m • Apr–Sep' },
      { title: 'City of Plymouth AC Spring Warm Up Winner 🥇', detail: '100m & 200m • Plymouth • 7 Apr' }
    ]
  },
  {
    year: '2025',
    records: [
      { title: "60m Indoor – England Athletics U15/U17/U20 Indoor Championships", detail: "🥇 1st Place – 7.53s – Sheffield – 8 Feb 2025" },
      { title: "60m Indoor – SEAA Indoor U13/U15/U17 Championships", detail: "🥇 1st Place – 7.58s – Lee Valley – 11 Jan 2025" },
      { title: "60m Indoor – Welsh Athletics Junior Open Day 2", detail: "🥇 1st Place – 7.77s – Cardiff – 5 Jan 2025" },
      { title: "60m Indoor – England Athletics U15/U17/U20 Heats & Semis", detail: "🥇 1st Place – 7.73s & 7.76s – Sheffield – 8 Feb 2025" },
      { title: "60m Indoor – Sutclif Indoor", detail: "🥇 1st Place – 7.54s – Eltham – 28 Dec 2025" },
      { title: "100m – Be Fit Today Track Academy", detail: "🥇 1st Place – 11.51s – Lee Valley – 30 Aug 2025" },
      { title: "100m – Yeovil Spring Open", detail: "🥇 1st Place – 11.60s – Yeovil – 21 Apr 2025" },
      { title: "100m – South West Athletics League", detail: "🥇 1st Place – 11.72s – Exeter – 7 Sep 2025" },
      { title: "100m – England Athletics Age Group Championships", detail: "🥇 1st Place – 11.73s – Birmingham – 9 Aug 2025" },
      { title: "100m – Devon County Championships", detail: "🥇 1st Place – 11.79s – Exeter – 11 May 2025" },
      { title: "100m – South West Schools Championships", detail: "🥇 1st Place – 11.79s – Exeter – 21 Jun 2025" },
      { title: "100m – City of Plymouth AC Warm Up", detail: "🥇 1st Place – 11.91s – Plymouth – 6 Apr 2025" },
      { title: "200m – English Schools Championships", detail: "🥇 1st Place – 23.72s – Birmingham – 12 Jul 2025" },
      { title: "200m – South West Athletics League", detail: "🥇 1st Place – 23.79s – Exeter – 7 Sep 2025" },
      { title: "200m – South West Schools Championships", detail: "🥇 1st Place – 23.90s – Exeter – 21 Jun 2025" },
      { title: "200m – Yeovil Spring Open", detail: "🥇 1st Place – 24.02s – Yeovil – 21 Apr 2025" },
      { title: "200m – England Athletics Age Group Championships", detail: "🥇 1st Place – 24.05s – Birmingham – 10 Aug 2025" },
      { title: "200m – Devon County Championships", detail: "🥇 1st Place – 24.41s – Exeter – 11 May 2025" },
      { title: "300m – City of Plymouth AC Spring Warm Up", detail: "🥇 1st Place – 40.88s – Plymouth" },
      { title: "National U15 60m Champion", detail: "🏆 7.53s – England Athletics Indoors – 2025" },
      { title: "National U15 100m Champion", detail: "🏆 11.72s – Championship Record – 2025" },
      { title: "English Schools 200m Champion", detail: "🏆 23.72s – Equals UK National Record – 2025" },
      { title: "UK #1 U15 (100m & 200m)", detail: "🏅 Ranked #1 in 2025 Season" },
      { title: "4x100m Mixed Relay – National Record", detail: "👥 Member of 1st Place Team – 45.98s – 2025" }
    ]
  },
{
    year: '2026',
    records: [
      { title: "60m Indoor – SEAA Indoor U13/U15/U17 Championships", detail: "🥇 1st Place – 7.51s – Lee Valley – 11 Jan 2026" },
      { title: "60m Indoor – London Indoor Games age group 2026", detail: "🥇 1st Place – 7.37s – Lee Valley – 24 Jan 2026" },
    ]
  }
];

// Personal Bests
const pbs = [
  { event: '60m (Indoor)', time: '7.37', note: 'Lee Valley • London Age Group Indoor games • 24 Jan 2026' },
  { event: '100m', time: '11.51', note: 'Lee Valley • Be Fit Today Track Academy • 30 Aug 2025' },
  { event: '200m', time: '23.72', note: 'Birmingham • ESAA English Schools Championships • 12 Jul 2025' }
];

// Records
const records = [
  {
    category: 'Club Records (2025)',
    items: [
      { title: '60m (Indoor)', detail: '7.53s • U15 • 2025' },
      { title: '60m (Indoor)', detail: '7.37s • U17, U20 • 2026' },
      { title: '100m', detail: '11.51s • U15, U17, U20 • 2025' },
      { title: '200m', detail: '23.72s • U15, U17, U20 • 2025' },
      { title: '300m', detail: '40.88s • U15 • 2025' },
      { title: '4x300m Relay', detail: '3:06.18 • Member of U15 team • 2025' },
      { title: '4x100m Mixed Relay', detail: '45.98s • Member of relay team • 2025' }
    ]
  },
  {
    category: 'National / Championship Records (2025)',
    items: [
      { title: 'English Schools 200m Record', detail: '23.72s • Equals UK National Record • 2025' },
      { title: 'National U15 100m Champion', detail: '11.72s • Championship Record • 2025' },
      { title: 'National U15 60m Champion', detail: '7.53s • 2025' },
      { title: 'U15 National Record Holder – 100m', detail: '11.51s • 2025' }
    ]
  },
  {
    category: 'Other Rankings & Achievements (2025)',
    items: [
      { title: 'Ranked UK #1 U15 – 100m & 200m', detail: '2025 Season' },
      { title: 'Multiple Club Records Across Age Groups', detail: 'U15–U20 • 2025' }
    ]
  }
];

// Schedule
const schedule = [
  { date: '28 Dec 2025', name: "Sutcliffe Indoor 60's", venue: 'Eltham' },
  { date: '10 Jan 2026', name: 'SEAA Championships 60m', venue: 'Lee Valley' },
  { date: '24 Jan 2026', name: 'London Indoor Games Age Groups 2026', venue: 'Lee Valley, Edmonton' },
  { date: '07 Feb 2026', name: 'England Athletics U15/U17/U20 Indoor Championships', venue: 'Sheffield' }
];


// Media
const media = [
   {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/lp2PjZSBUw4',
    title: '🏁 Annabelle’s First Ever 60m Race',
    meta: '7.61s & 7.65s • Eltham • Dec 2023 • First Indoor Win (U23 Category)'
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/PR2q5x-xVF4',
    title: '🏆 National Record – 100m',
    meta: '11.51s • BFTTA • Lee Valley • 30 Aug 2025',
    featured: true
  },
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/Hu5PfnNB5k4',
    title: '🏆 English Schools Junior 200m Record',
    meta: '23.72s • Birmingham • English Schools Championships • 12 Jul 2025 • Equals U15 All-Time Record',
    featured: true
  },
  {
  type: 'youtube',
  src: 'https://www.youtube.com/embed/KUoBxXxPH5s',
  title: '🏆 National U15 100m Champion',
  meta: '11.72s • Birmingham • 9 Aug 2025 • Championship Record',
  featured: true
},
  {
    type: 'youtube',
    src: 'https://www.youtube.com/embed/VHFKR3NoPo4',
    title: 'Race Highlights – 60m',
    meta: 'England Athletics • Sheffield • 8 Feb 2025'
  }
];

// =========================
// RENDER FUNCTIONS
// =========================

function renderAchievements() {
  const root = document.getElementById('achievementsGrid');
  if (!root) return;

  achievements.forEach(section => {
    const block = el(`
      <div class="card-item">
        <div class="card-body">
          <div class="card-title" style="font-size:1.2rem;font-weight:800;margin-bottom:10px;">
            Achievements ${section.year}
          </div>
        </div>
      </div>
    `);

    section.records.forEach(record => {
      block.querySelector('.card-body').appendChild(el(`
        <div style="margin-bottom:10px;">
          <div class="muted" style="font-size:.85rem;">${record.title}</div>
          <div class="card-meta">${record.detail}</div>
        </div>
      `));
    });

    root.appendChild(block);
  });
}

function renderPBs() {
  const root = document.getElementById('pbsGrid');
  if (!root) return;

  pbs.forEach(pb => {
    root.appendChild(el(`
      <article class="card-item">
        <div class="card-body">
          <div class="card-title">${pb.event}</div>
          <div class="card-meta">${pb.time}s</div>
          <div class="muted" style="font-size:.85rem;">${pb.note}</div>
        </div>
      </article>
    `));
  });
}

function renderRecords() {
  const root = document.getElementById('recordsGrid');
  if (!root) return;

  records.forEach(cat => {
    const block = el(`
      <div class="card-item">
        <div class="card-body">
          <div class="card-title" style="font-size:1.2rem;font-weight:800;margin-bottom:10px;">
            ${cat.category}
          </div>
        </div>
      </div>
    `);

    cat.items.forEach(r => {
      block.querySelector('.card-body').appendChild(el(`
        <div style="margin-bottom:10px;">
          <div class="muted" style="font-size:.85rem;">${r.title}</div>
          <div class="card-meta">${r.detail}</div>
        </div>
      `));
    });

    root.appendChild(block);
  });
}

function renderSchedule() {
  const root = document.getElementById('scheduleGrid');
  if (!root) return;

  schedule.forEach(e => {
    root.appendChild(el(`
      <article class="card-item">
        <div class="card-body">
          <div class="muted" style="text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;">${e.date}</div>
          <div class="card-title mt">${e.name}</div>
          <div class="card-meta">${e.venue}</div>

          <button
           class="btn btn-sm mt-sm btn-share"
           data-title="${e.name} – ${e.date}"
           onclick="sharePage(this.dataset.title)">
           🔗 Share
          </button>

        </div>
      </article>
    `));
  });
}

function renderMedia() {
  const root = document.getElementById('mediaGrid');
  if (!root) return;

  // Detect if we are on the homepage (works locally and when deployed)
  const path = window.location.pathname.toLowerCase();
  const isIndexPage =
    path.endsWith('index.html') ||
    path === '/' ||
    path === '/home' ||
    path.includes('annabellefasuba.co.uk') && (path === '/' || path.endsWith('index.html'));

  // Sort so featured videos appear first
  let sorted = [...media].sort((a, b) => (b.featured === true) - (a.featured === true));

  // On the homepage: show a random subset (up to 3 total, always include featured)
  if (isIndexPage) {
    const featured = sorted.filter(m => m.featured);
    const others = sorted.filter(m => !m.featured);

    // Shuffle the others
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }

    // Limit homepage to 3 total videos
    const randomOthers = others.slice(0, 3 - featured.length);
    sorted = [...featured, ...randomOthers];
  }

  // Render each selected video
  sorted.forEach(m => {
    const badge = m.featured ? `<div class="media-badge">National Record</div>` : '';
    let frameHtml;

    if (m.type === 'youtube') {
      let embedUrl = m.src;
      if (m.src.includes('youtu.be/')) {
        embedUrl = 'https://www.youtube-nocookie.com/embed/' + m.src.split('youtu.be/')[1];
      } else if (m.src.includes('watch?v=')) {
        embedUrl = 'https://www.youtube-nocookie.com/embed/' + m.src.split('watch?v=')[1];
      }

      frameHtml = `
        <div class="media-frame fade-in">
          ${badge}
          <iframe
            width="560"
            height="315"
            src="${embedUrl}"
            title="${m.title}"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            onerror="this.parentNode.innerHTML = '<div class=\\'fallback\\'><p><strong>${m.title}</strong></p><p>${m.meta}</p><a href=${embedUrl.replace('embed/', 'watch?v=')} target=_blank class=\\'btn btn-primary\\'>Watch on YouTube</a></div>';">
          </iframe>
        </div>`;
    } else {
      frameHtml = `
        <div class="media-frame fade-in">
          ${badge}
          <video controls preload="metadata" src="${m.src}" loading="lazy"></video>
        </div>`;
    }

    root.appendChild(el(`
      <article class="card-item">
        ${frameHtml}
        <div class="card-body">
          <div class="card-title">${m.title}</div>
          <div class="card-meta">${m.meta || ''}</div>
          <button class="btn btn-sm mt-sm btn-share"
           onclick="sharePage('${m.title}')">
            🔗 Share
            </button>
        </div>
      </article>`));
  });

  // Add "View Full Gallery" button on homepage only
  if (isIndexPage) {
    const btn = el(`
      <div class="center" style="margin-top: 20px;">
        <a href="media.html" class="btn btn-primary">🎥 View Full Gallery</a>
      </div>
    `);
    root.parentNode.appendChild(btn);
  }
}

// =========================
// NAV + INIT
// =========================

function setupNav() {
  const navToggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  if (!navToggle || !drawer) return;

  navToggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

function boot() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const dob = new Date('2011-06-28');
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

  document.querySelectorAll('#age, #age-facts').forEach(el => el.textContent = age);

  setupNav();

  if (document.getElementById('achievementsGrid')) renderAchievements();
  if (document.getElementById('pbsGrid')) renderPBs();
  if (document.getElementById('recordsGrid')) renderRecords();
  if (document.getElementById('scheduleGrid')) renderSchedule();
  if (document.getElementById('mediaGrid')) renderMedia();
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', boot)
  : boot();
