/* ============================================================
   CENTRA CYBERSECURITY PARTNERSHIP PORTAL
   Main JavaScript
   ------------------------------------------------------------
   QUICK EDIT GUIDE:
   - Add/remove engineers in the "engineers" array.
   - Add/remove vendors inside each engineer's partnerships array.
   - Change image paths there if you rename your files.
   - The HTML cards are generated automatically.
   ============================================================ */

"use strict";

/* ============================================================
   1. PARTNERSHIP DATA
   ------------------------------------------------------------
   THIS IS THE MAIN PLACE YOU WILL EDIT IN THE FUTURE.
   ============================================================ */

const engineers = [
  {
    name: "Mohamed Abdelalim",
    role: "Cybersecurity Systems Engineer",
    photo: "assets/engineers/mohamed-abdelalim.jpg",

    partnerships: [
      {
        name: "F5",
        logo: "assets/vendors/f5.png"
      },
      {
        name: "Splunk",
        logo: "assets/vendors/splunk.png"
      },
      {
        name: "Tenable",
        logo: "assets/vendors/tenable.png"
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
        logo: "assets/vendors/fidelis-security.png"
      },
      {
        name: "Infoblox",
        logo: "assets/vendors/infoblox.png"
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
        logo: "assets/vendors/proofpoint.png"
      },
      {
        name: "Trellix",
        logo: "assets/vendors/trellix.png"
      },
      {
        name: "Fortinet",
        logo: "assets/vendors/fortinet.png"
      },
      {
        name: "A10",
        logo: "assets/vendors/a10.png"
      },
      {
        name: "Utimaco",
        logo: "assets/vendors/utimaco.png"
      },
      {
        name: "Thales",
        logo: "assets/vendors/thales.png"
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
        logo: "assets/vendors/cisco.png"
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
        logo: "assets/vendors/palo-alto-networks.png"
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
const modal = document.getElementById("engineerModal");
const modalContent = document.getElementById("modalContent");
const yearElement = document.getElementById("year");


/* ============================================================
   3. HELPER FUNCTIONS
   ============================================================ */

/**
 * Creates a safe initials string.
 * Example:
 * "Mohamed Abdelalim" -> "MA"
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
 * Creates a safe HTML-friendly class fragment.
 */
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Creates an image element with a fallback.
 */
function imageWithFallback(src, alt, className, fallbackText) {
  const wrapper = document.createElement("div");

  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.className = className;

  image.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "vendor-placeholder";
    fallback.textContent = fallbackText || getInitials(alt);

    image.replaceWith(fallback);
  });

  wrapper.appendChild(image);
  return wrapper;
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

    const initials = getInitials(engineer.name);

    const photoHTML = engineer.photo
      ? `
        <img
          class="engineer-photo"
          src="${engineer.photo}"
          alt="${engineer.name}"
          onerror="
            this.outerHTML =
            '<div class=&quot;photo-placeholder&quot;>Add photo:<br>${engineer.photo}</div>'
          "
        >
      `
      : `
        <div class="photo-placeholder">
          Add photo:<br>${engineer.name}
        </div>
      `;

    const vendorsHTML = engineer.partnerships.map(partner => `
      <div class="vendor-chip" title="${partner.name}">
        <img
          src="${partner.logo}"
          alt="${partner.name} logo"
          onerror="
            this.outerHTML =
            '<div class=&quot;vendor-placeholder&quot;>${getInitials(partner.name)}</div>'
          "
        >
        <span>${partner.name}</span>
      </div>
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

          <h3 class="engineer-name">${engineer.name}</h3>
          <p class="engineer-role">${engineer.role}</p>
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

function getAllPartners() {
  const partners = [];

  engineers.forEach((engineer, engineerIndex) => {
    engineer.partnerships.forEach(partner => {
      partners.push({
        ...partner,
        owner: engineer.name,
        ownerIndex: engineerIndex
      });
    });
  });

  return partners;
}

function renderPartnerFilters() {
  engineerFilters.innerHTML = `
    <button class="filter-btn active" data-filter="all">All</button>
  `;

  engineers.forEach((engineer, index) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.dataset.filter = String(index);
    button.textContent = engineer.name.split(" ")[0];

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
      `${partner.name} ${partner.owner}`.toLowerCase();

    const matchesSearch =
      !searchTerm || searchableText.includes(searchTerm);

    return matchesEngineer && matchesSearch;
  });

  partnerGrid.innerHTML = "";

  partners.forEach(partner => {
    const card = document.createElement("article");
    card.className = "partner-card reveal";

    card.innerHTML = `
      <div>
        <div class="partner-logo-wrap">
          <img
            src="${partner.logo}"
            alt="${partner.name} logo"
            onerror="
              this.outerHTML =
              '<span class=&quot;partner-logo-fallback&quot;>${getInitials(partner.name)}</span>'
            "
          >
        </div>

        <h3 class="partner-name">${partner.name}</h3>
      </div>

      <p class="partner-owner">
        Partnership Owner: <strong>${partner.owner}</strong>
      </p>
    `;

    partnerGrid.appendChild(card);
  });

  emptyState.hidden = partners.length !== 0;

  observeRevealElements();
}


/* ============================================================
   6. ENGINEER PROFILE MODAL
   ============================================================ */

function openEngineerModal(index) {
  const engineer = engineers[index];

  if (!engineer) {
    return;
  }

  const photoHTML = engineer.photo
    ? `
      <img
        src="${engineer.photo}"
        alt="${engineer.name}"
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
    <div class="modal-vendor">
      <img
        src="${partner.logo}"
        alt="${partner.name} logo"
        onerror="
          this.outerHTML =
          '<div class=&quot;vendor-placeholder&quot;>${getInitials(partner.name)}</div>'
        "
      >
      <span>${partner.name}</span>
    </div>
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
          ${engineer.name}
        </h2>

        <p class="modal-role">
          ${engineer.role}
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

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEngineerModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


/* ============================================================
   7. SEARCH + FILTER EVENTS
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
  const detailsButton = event.target.closest("[data-engineer-index]");

  if (detailsButton) {
    openEngineerModal(Number(detailsButton.dataset.engineerIndex));
  }

  if (event.target.closest("[data-close-modal]")) {
    closeEngineerModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeEngineerModal();
  }
});


/* ============================================================
   8. SCROLL REVEAL
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
   9. COUNTER ANIMATION
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
   10. BACKGROUND PARTICLES
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
   11. INITIALIZATION
   ============================================================ */

function init() {
  renderEngineers();
  renderPartnerFilters();
  renderPartners();
  createParticles();

  yearElement.textContent = new Date().getFullYear();

  // Start the number animation after the first render.
  setTimeout(animateCounters, 250);
}

init();
