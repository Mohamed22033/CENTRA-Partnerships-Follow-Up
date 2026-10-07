/* ============================================================
   CENTRA CYBERSECURITY PARTNERSHIP PORTAL
   Main JavaScript

   QUICK EDIT GUIDE
   ------------------------------------------------------------
   1. Add/remove engineers inside the "engineers" array.
   2. Add/remove partners inside each engineer's partnerships array.
   3. Each partner has:
        - name  : Partner/company name
        - logo  : Path to partner logo
        - level : Partnership level shown in the Partner modal
   4. The owner is automatically taken from the engineer who owns
      that partnership.
   5. Entrust is currently placed under Mohamed Abdelalim as a
      TEMPORARY editable owner. Change it if needed.
   6. Partnership levels below are placeholders because the original
      project data did not contain actual partnership levels.
   ============================================================ */

"use strict";

/* ============================================================
   1. PARTNERSHIP DATA
   ------------------------------------------------------------
   THIS IS THE MAIN SECTION YOU WILL EDIT IN THE FUTURE.

   Example of adding a new partner:

   {
     name: "New Company",
     logo: "assets/vendors/new-company.png",
     level: "Strategic Partner",
        startDate: "",
        endDate: ""
   }

   The orbit, directory, search, filters, and modals will update
   automatically from this data.
   ============================================================ */

const engineers = [
  {
    name: "Mohamed Abdelalim",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/mohamed-abdelalim.jpg",

    partnerships: [
      {
        name: "F5",
        logo: "assets/vendors/f5.png",
        level: "Authorized Partner",
        startDate: "",
        endDate: ""
      },
      {
        name: "Splunk",
        logo: "assets/vendors/splunk.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      },
      {
        name: "Tenable",
        logo: "assets/vendors/tenable.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      }
    ] 
  },

  {
    name: "Anas Osama",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/anas-osama.jpg",

    partnerships: [
      {
        name: "Fidelis Security",
        logo: "assets/vendors/fidelis-security.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      },
      {
        name: "Infoblox",
        logo: "assets/vendors/infoblox.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      }
    ]
  },

  {
    name: "Mohab Hassan",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/mohab-hassan.jpg",

    partnerships: [
      {
        name: "Proofpoint",
        logo: "assets/vendors/proofpoint.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      },
      {
        name: "Trellix",
        logo: "assets/vendors/trellix.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      },
      {
        name: "Fortinet",
        logo: "assets/vendors/fortinet.png",
        level: "Advocate",
        startDate: "",
        endDate: ""
      },
      {
        name: "A10",
        logo: "assets/vendors/a10.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      },
      {
        name: "Utimaco",
        logo: "assets/vendors/utimaco.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      },
      {
        name: "Entrust",
        logo: "assets/vendors/entrust.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      },
      {
        name: "Thales",
        logo: "assets/vendors/thales.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      }
    ]
  },

  {
    name: "Mohamed Nabil",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/mohamed-nabil.jpg",

    partnerships: [
      {
        name: "Cisco",
        logo: "assets/vendors/cisco.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      }
    ]
  },

  {
    name: "Nada Amr",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/nada-amr.jpg",

    partnerships: [
      {
        name: "Palo Alto Networks",
        logo: "assets/vendors/palo-alto-networks.png",
        level: "UPDATE PARTNERSHIP LEVEL",
        startDate: "",
        endDate: ""
      }
    ]
  }
];


/* ============================================================
   2. DOM REFERENCES
   ============================================================ */

const engineerGrid = document.getElementById("engineerGrid");
const partnerGrid = document.getElementById("partnerGrid");
const emptyState = document.getElementById("emptyState");
const partnerSearch = document.getElementById("partnerSearch");
const engineerFilters = document.getElementById("engineerFilters");

const partnerOrbit = document.getElementById("partnerOrbit");
const orbitPartners = document.getElementById("orbitPartners");

const engineerModal = document.getElementById("engineerModal");
const modalContent = document.getElementById("modalContent");

const partnerModal = document.getElementById("partnerModal");
const partnerModalContent = document.getElementById("partnerModalContent");

const yearElement = document.getElementById("year");


/* ============================================================
   3. HELPER FUNCTIONS
   ============================================================ */

/**
 * Creates initials for fallback logos/photos.
 */
function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("");
}

/**
 * Formats an ISO date for executive-friendly display.
 * Empty values remain "Not set" until the partnership record is confirmed.
 */
function formatPartnershipDate(value) {
  if (!value) return "Not set";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "Not set";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function getPartnershipStatus(partner) {
  if (String(partner.level || "").toLowerCase().includes("in progress")) {
    return "In Progress";
  }

  if (partner.endDate) {
    const end = new Date(`${partner.endDate}T23:59:59`);
    if (!Number.isNaN(end.getTime()) && end < new Date()) return "Expired";
  }

  return "Active";
}

function getPartnershipTimeline(partner) {
  return `${formatPartnershipDate(partner.startDate)} → ${formatPartnershipDate(partner.endDate)}`;
}

/**
 * Escapes dynamic text before inserting it into HTML.
 */
function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Returns every partner with its responsible engineer attached.
 * This is used by the orbit, directory, search, and partner modal.
 */
function getAllPartners() {
  const partners = [];

  engineers.forEach((engineer, ownerIndex) => {
    engineer.partnerships.forEach((partner, partnershipIndex) => {
      partners.push({
        ...partner,
        owner: engineer.name,
        ownerIndex,
        partnershipIndex,
        ownerRole: engineer.role,
        ownerPhoto: engineer.photo
      });
    });
  });

  return partners;
}

/**
 * Find a partner by its name.
 */
function getPartnerByName(name) {
  return getAllPartners().find(partner => partner.name === name);
}


/* ============================================================
   4. ENGINEER CARDS
   ============================================================ */

function renderEngineers() {
  engineerGrid.innerHTML = "";

  engineers.forEach((engineer, index) => {
    const card = document.createElement("article");
    card.className = "engineer-card reveal";
    card.dataset.engineer = engineer.name;

    const photoHTML = engineer.photo
      ? `
        <img
          class="engineer-photo"
          src="${escapeHTML(engineer.photo)}"
          alt="${escapeHTML(engineer.name)}"
          onerror="
            this.outerHTML =
            '<div class=&quot;photo-placeholder&quot;>Add photo:<br>${escapeHTML(engineer.photo)}</div>'
          "
        >
      `
      : `
        <div class="photo-placeholder">
          Add photo:<br>${escapeHTML(engineer.name)}
        </div>
      `;

    const vendorsHTML = engineer.partnerships.map(partner => `
      <button
        class="vendor-chip vendor-chip-button"
        type="button"
        title="Open ${escapeHTML(partner.name)} partnership"
        data-partner-name="${escapeHTML(partner.name)}">
        <img
          src="${escapeHTML(partner.logo)}"
          alt="${escapeHTML(partner.name)} logo"
          onerror="
            this.outerHTML =
            '<span class=&quot;vendor-placeholder&quot;>${getInitials(partner.name)}</span>'
          "
        >
        <span>${escapeHTML(partner.name)}</span>
      </button>
    `).join("");

    card.innerHTML = `
      <div class="engineer-main">
        <div>
          ${photoHTML}
        </div>

        <div>
          <div class="engineer-number">
            ENGINEER ${String(index + 1).padStart(2, "0")}
          </div>

          <h3 class="engineer-name">${escapeHTML(engineer.name)}</h3>
          <p class="engineer-role">${escapeHTML(engineer.role)}</p>
        </div>
      </div>

      <div class="partnership-label">
        Responsible Partnerships
      </div>

      <div class="vendor-list">
        ${vendorsHTML}
      </div>

      <div class="engineer-footer">
        <span class="engineer-count">
          ${engineer.partnerships.length}
          ${engineer.partnerships.length === 1 ? "technology partner" : "technology partners"}
        </span>

        <button
          class="details-btn"
          type="button"
          data-engineer-index="${index}">
          View Profile →
        </button>
      </div>
    `;

    engineerGrid.appendChild(card);
  });

  observeRevealElements();
}


/* ============================================================
   5. PARTNER DIRECTORY
   ============================================================ */

function renderPartnerFilters() {
  engineerFilters.innerHTML = `
    <button class="filter-btn active" data-filter="all">All</button>
  `;

  engineers.forEach((engineer, index) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.dataset.filter = String(index);
    button.textContent = engineer.name;

    engineerFilters.appendChild(button);
  });
}

function renderPartners() {
  const activeFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";

  const searchTerm = partnerSearch.value.trim().toLowerCase();

  const partners = getAllPartners().filter(partner => {
    const matchesEngineer =
      activeFilter === "all" ||
      String(partner.ownerIndex) === activeFilter;

    const searchableText =
      `${partner.name} ${partner.owner} ${partner.level} ${getPartnershipStatus(partner)} ${partner.startDate} ${partner.endDate}`.toLowerCase();

    const matchesSearch =
      !searchTerm || searchableText.includes(searchTerm);

    return matchesEngineer && matchesSearch;
  });

  partnerGrid.innerHTML = "";

  partners.forEach(partner => {
    const card = document.createElement("button");
    card.className = "partner-card reveal partner-card-button";
    card.type = "button";
    card.dataset.partnerName = partner.name;

    card.innerHTML = `
      <div class="partner-card-main">
        <div class="partner-logo-wrap">
          <img
            src="${escapeHTML(partner.logo)}"
            alt="${escapeHTML(partner.name)} logo"
            onerror="
              this.outerHTML =
              '<span class=&quot;partner-logo-fallback&quot;>${getInitials(partner.name)}</span>'
            "
          >
        </div>

        <h3 class="partner-name">${escapeHTML(partner.name)}</h3>

        <div class="partner-badges">
          <span class="partner-level-mini">
            ${escapeHTML(partner.level)}
          </span>
          <span class="partner-status-badge status-${getPartnershipStatus(partner).toLowerCase().replace(/\s+/g, "-")}">
            ${escapeHTML(getPartnershipStatus(partner))}
          </span>
        </div>
      </div>

      <p class="partner-owner">
        Partnership Owner: <strong>${escapeHTML(partner.owner)}</strong>
      </p>

      <div class="partner-timeline-mini">
        <span>PARTNERSHIP LIFECYCLE</span>
        <strong>${escapeHTML(getPartnershipTimeline(partner))}</strong>
      </div>

      <span class="partner-open-hint">View partnership →</span>
    `;

    partnerGrid.appendChild(card);
  });

  emptyState.hidden = partners.length !== 0;

  observeRevealElements();
}


/* ============================================================
   6. PARTNER ORBIT
   ------------------------------------------------------------
   All partners are generated from the same data used by the
   directory. Nothing is hard-coded in index.html.

   The orbit uses three visual rings. Partners are distributed
   around those rings automatically. A single animation rotates
   the partner layer, while each node counter-rotates so the
   company name/logo remains readable.
   ============================================================ */

function renderPartnerOrbit() {
  orbitPartners.innerHTML = "";

  const partners = getAllPartners();

  // Three ring sizes. Values are percentages of the orbit container radius.
  const ringRatios = [0.27, 0.38, 0.49];

  partners.forEach((partner, index) => {
    // Spread all 14 partners around the complete 360-degree orbit.
    const angle = (360 / partners.length) * index;
    const ringIndex = index % ringRatios.length;

    const node = document.createElement("button");
    node.type = "button";
    node.className = "orbit-node";
    node.dataset.partnerName = partner.name;
    node.dataset.baseAngle = String(angle);
    node.dataset.ringRatio = String(ringRatios[ringIndex]);
    node.dataset.ringIndex = String(ringIndex);
    node.setAttribute("aria-label", `Open ${partner.name} partnership details`);
    node.title = `Open ${partner.name} partnership details`;

    node.innerHTML = `
      <span class="orbit-node-logo">
        <img
          src="${escapeHTML(partner.logo)}"
          alt="${escapeHTML(partner.name)} logo"
          onerror="
            this.outerHTML =
            '<span class=&quot;orbit-logo-fallback&quot;>${getInitials(partner.name)}</span>'
          "
        >
      </span>
      <span class="orbit-node-name">${escapeHTML(partner.name)}</span>
    `;

    orbitPartners.appendChild(node);
  });

  startPartnerOrbitAnimation();
}

/*
 * Animated orbit engine.
 *
 * Why JavaScript instead of pure CSS?
 * -----------------------------------
 * It lets the partner cards physically travel around the rings while
 * their text/logo stays upright and readable. It also makes it easy to
 * support any number of partners without creating 14 hard-coded CSS nodes.
 */
let orbitAnimationFrame = null;
let orbitAnimationStart = null;

function startPartnerOrbitAnimation() {
  if (orbitAnimationFrame) {
    cancelAnimationFrame(orbitAnimationFrame);
  }

  orbitAnimationStart = null;

  const animate = timestamp => {
    if (!orbitAnimationStart) {
      orbitAnimationStart = timestamp;
    }

    const elapsed = timestamp - orbitAnimationStart;
    const orbitSize = partnerOrbit.clientWidth;

    // Different ring speeds make the orbit feel more dynamic.
    const ringSpeeds = [0.012, -0.008, 0.006];

    orbitPartners.querySelectorAll(".orbit-node").forEach(node => {
      const baseAngle = Number(node.dataset.baseAngle || 0);
      const ringRatio = Number(node.dataset.ringRatio || 0.49);
      const ringIndex = Number(node.dataset.ringIndex || 0);

      const currentAngle = baseAngle + (elapsed * ringSpeeds[ringIndex]);
      const radians = (currentAngle * Math.PI) / 180;
      const radius = orbitSize * ringRatio;

      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;

      // The node moves around the orbit, but the actual card stays upright.
      node.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

    orbitAnimationFrame = requestAnimationFrame(animate);
  };

  orbitAnimationFrame = requestAnimationFrame(animate);
}


/* ============================================================
   7. ENGINEER PROFILE MODAL
   ============================================================ */

function openEngineerModal(index) {
  const engineer = engineers[index];

  if (!engineer) {
    return;
  }

  const photoHTML = engineer.photo
    ? `
      <img
        src="${escapeHTML(engineer.photo)}"
        alt="${escapeHTML(engineer.name)}"
        onerror="
          this.outerHTML =
          '<div class=&quot;modal-photo-placeholder&quot;>Engineer photo<br>not uploaded yet</div>'
        "
      >
    `
    : `
      <div class="modal-photo-placeholder">
        Engineer photo<br>not uploaded yet
      </div>
    `;

  const vendorHTML = engineer.partnerships.map(partner => `
    <button
      class="modal-vendor modal-vendor-button"
      type="button"
      data-partner-name="${escapeHTML(partner.name)}">
      <img
        src="${escapeHTML(partner.logo)}"
        alt="${escapeHTML(partner.name)} logo"
        onerror="
          this.outerHTML =
          '<span class=&quot;vendor-placeholder&quot;>${getInitials(partner.name)}</span>'
        "
      >
      <span>${escapeHTML(partner.name)}</span>
    </button>
  `).join("");

  modalContent.innerHTML = `
    <div class="modal-profile">
      <div>
        ${photoHTML}
      </div>

      <div>
        <div class="eyebrow">
          <span class="status-dot"></span>
          PARTNERSHIP OWNER
        </div>

        <h2 id="modalEngineerName" class="modal-name">
          ${escapeHTML(engineer.name)}
        </h2>

        <p class="modal-role">
          ${escapeHTML(engineer.role)}
        </p>
      </div>
    </div>

    <div class="modal-vendors">
      <h3>Managed Technology Partnerships</h3>

      <div class="modal-vendor-grid">
        ${vendorHTML}
      </div>
    </div>
  `;

  engineerModal.classList.add("open");
  engineerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEngineerModal() {
  engineerModal.classList.remove("open");
  engineerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


/* ============================================================
   8. PARTNER DETAILS MODAL
   ------------------------------------------------------------
   Clicking ANY partner opens this modal.
   It displays:
     - Partner logo
     - Partner name
     - Partnership level
     - Responsible engineer / owner
     - Engineer role
   ============================================================ */

function openPartnerModal(partnerName) {
  const partner = getPartnerByName(partnerName);

  if (!partner) {
    return;
  }

  partnerModalContent.innerHTML = `
    <div class="partner-detail-header">
      <div class="partner-detail-logo">
        <img
          src="${escapeHTML(partner.logo)}"
          alt="${escapeHTML(partner.name)} logo"
          onerror="
            this.outerHTML =
            '<span class=&quot;partner-detail-logo-fallback&quot;>${getInitials(partner.name)}</span>'
          "
        >
      </div>

      <div>
        <div class="eyebrow">
          <span class="status-dot"></span>
          TECHNOLOGY PARTNER
        </div>

        <h2 id="modalPartnerName" class="modal-name">
          ${escapeHTML(partner.name)}
        </h2>

        <p class="modal-role">
          CENTRA Cybersecurity Partnership
        </p>
      </div>
    </div>

    <div class="partner-detail-grid">
      <div class="partner-detail-card">
        <span class="detail-label">PARTNERSHIP LEVEL</span>
        <strong>${escapeHTML(partner.level)}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">STATUS</span>
        <strong class="status-value status-${getPartnershipStatus(partner).toLowerCase().replace(/\s+/g, "-")}">
          ${escapeHTML(getPartnershipStatus(partner))}
        </strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">START DATE</span>
        <strong>${escapeHTML(formatPartnershipDate(partner.startDate))}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">END / RENEWAL DATE</span>
        <strong>${escapeHTML(formatPartnershipDate(partner.endDate))}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">PARTNERSHIP OWNER</span>
        <strong>${escapeHTML(partner.owner)}</strong>
      </div>

      <div class="partner-detail-card partner-detail-card-wide">
        <span class="detail-label">OWNER ROLE</span>
        <strong>${escapeHTML(partner.ownerRole)}</strong>
      </div>
    </div>

    <div class="partner-detail-note">
      <span class="status-dot"></span>
      <span>
        Partnership dates are shown directly from the partner record. Update
        <code>startDate</code> and <code>endDate</code> in <code>app.js</code> only
        after the dates are confirmed.
      </span>
    </div>
  `;

  partnerModal.classList.add("open");
  partnerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePartnerModal() {
  partnerModal.classList.remove("open");
  partnerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


/* ============================================================
   9. SEARCH + FILTER + CLICK EVENTS
   ============================================================ */

partnerSearch.addEventListener("input", renderPartners);

engineerFilters.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");

  if (!button) {
    return;
  }

  document.querySelectorAll(".filter-btn").forEach(item => {
    item.classList.remove("active");
  });

  button.classList.add("active");
  renderPartners();
});

document.addEventListener("click", event => {
  /* Engineer profile button */
  const detailsButton = event.target.closest("[data-engineer-index]");

  if (detailsButton) {
    openEngineerModal(Number(detailsButton.dataset.engineerIndex));
    return;
  }

  /* Partner click - orbit, directory, chips, or modal vendor list */
  const partnerButton = event.target.closest("[data-partner-name]");

  if (partnerButton) {
    openPartnerModal(partnerButton.dataset.partnerName);
    return;
  }

  /* Close engineer modal */
  if (event.target.closest("[data-close-modal]")) {
    closeEngineerModal();
    return;
  }

  /* Close partner modal */
  if (event.target.closest("[data-close-partner-modal]")) {
    closePartnerModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") {
    return;
  }

  closeEngineerModal();
  closePartnerModal();
});


/* ============================================================
   10. SCROLL REVEAL
   ============================================================ */

let revealObserver;

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal:not(.is-observed)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => {
      element.classList.add("is-visible");
      element.classList.add("is-observed");
    });

    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.add("is-observed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );
  }

  elements.forEach(element => {
    element.classList.add("is-observed");
    revealObserver.observe(element);
  });
}


/* ============================================================
   11. COUNTER ANIMATION
   ============================================================ */

function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const duration = 1000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      counter.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}


/* ============================================================
   12. BACKGROUND PARTICLES
   ============================================================ */

function createParticles() {
  const container = document.getElementById("particles");
  const amount = 32;

  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${80 + Math.random() * 40}%`;
    particle.style.animationDuration = `${12 + Math.random() * 20}s`;
    particle.style.animationDelay = `${Math.random() * -20}s`;
    particle.style.opacity = `${0.12 + Math.random() * 0.32}`;

    container.appendChild(particle);
  }
}


/* ============================================================
   13. DYNAMIC STATISTICS
   ------------------------------------------------------------
   Keeps the partner counters synchronized with the actual data.
   ============================================================ */

function updateDynamicStats() {
  const partnerCount = getAllPartners().length;
  const partnerCounter = document.getElementById("partnerCountCounter");
  const profileCounter = document.getElementById("profileCountCounter");

  if (partnerCounter) {
    partnerCounter.dataset.target = String(partnerCount);
  }

  if (profileCounter) {
    profileCounter.dataset.target = String(partnerCount);
  }
}


/* ============================================================
   14. INITIALIZATION
   ============================================================ */

function init() {
  updateDynamicStats();

  renderEngineers();
  renderPartnerFilters();
  renderPartners();
  renderPartnerOrbit();
  createParticles();

  yearElement.textContent = new Date().getFullYear();

  // Start the number animation after the first render.
  setTimeout(animateCounters, 250);
}

init();
