/* ============================================================
   CENTRA CYBERSECURITY PARTNERSHIP PORTAL
   Main JavaScript

   QUICK EDIT GUIDE
   ------------------------------------------------------------
   1. Add/remove engineers inside the "engineers" array.
   2. Add/remove partners inside each engineer's partnerships array.
   3. Each partner has:
        - name      : Partner/company name
        - logo      : Path to partner logo
        - level     : Partnership level
        - startDate : Start of the partnership (see formats below)
        - endDate   : End / renewal date (optional)
   4. DATES - write them in ANY of these formats, they all work:
        "Oct 2026"        "October 2026"     "15 Oct 2026"
        "10/2026"         "2026-10"          "2026-10-15"
        "15/10/2026"      "15-10-2026"       "2026"
        "أكتوبر 2026"     "١٥/١٠/٢٠٢٦"       (Arabic text / digits)
      Leave "" when the date is not confirmed yet.
   5. Arabic versions of names / roles / levels live in DATA_AR
      (section 2). If a value is missing there, the English one
      is shown. Company names always stay in English.
   6. All other website text lives in I18N (section 3).
   ============================================================ */

"use strict";

/* ============================================================
   1. PARTNERSHIP DATA
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
        startDate: "Oct 2026",
        endDate: ""
      },
      {
        name: "Splunk",
        logo: "assets/vendors/splunk.png",
        level: "Associate Partner",
        startDate: "Oct 2026",
        endDate: ""
      },
      {
        name: "Tenable",
        logo: "assets/vendors/tenable.png",
        level: "Bronze Partner",
        startDate: "Oct 2026",
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
        level: "Select",
        startDate: "",
        endDate: ""
      },
      {
        name: "Trellix",
        logo: "assets/vendors/trellix.png",
        level: "Silver",
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
        level: "Member",
        startDate: "",
        endDate: ""
      },
      {
        name: "Utimaco",
        logo: "assets/vendors/utimaco.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      },
      {
        name: "Entrust",
        logo: "assets/vendors/entrust.png",
        level: "In Progress",
        startDate: "",
        endDate: ""
      },
      {
        name: "Thales",
        logo: "assets/vendors/thales.png",
        level: "In Progress",
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
        level: "In Progress",
        startDate: "",
        endDate: ""
      }
    ]
  }
];


/* ============================================================
   2. ARABIC VERSIONS OF THE DATA ABOVE
   ------------------------------------------------------------
   Key = the exact English value used in the data.
   ============================================================ */

const DATA_AR = {
  names: {
    "Mohamed Abdelalim": "محمد عبد العليم",
    "Anas Osama": "أنس أسامة",
    "Mohab Hassan": "مهاب حسن",
    "Mohamed Nabil": "محمد نبيل",
    "Nada Amr": "ندى عمرو"
  },
  roles: {
    "Cybersecurity Systems Engineer": "مهندس أنظمة الأمن السيبراني"
  },
  levels: {
    "Authorized Partner": "شريك معتمد",
    "Associate Partner": "شريك مشارك",
    "Bronze Partner": "شريك برونزي",
    "Silver": "فضي",
    "Select": "سيليكت",
    "Advocate": "مناصر",
    "Member": "عضو",
    "In Progress": "قيد التنفيذ",
    "UPDATE PARTNERSHIP LEVEL": "يلزم تحديث مستوى الشراكة"
  }
};


/* ============================================================
   3. TRANSLATIONS (UI TEXT)
   ============================================================ */

const I18N = {
  en: {
    "brand.subtitle": "Cybersecurity Partnership Portal",
    "nav.overview": "Overview",
    "nav.engineers": "Engineers",
    "nav.partnerships": "Partnerships",
    "nav.viewTeam": "View Team",

    "toggle.langLabel": "Switch language",
    "toggle.themeLabel": "Switch between dark and light theme",
    "toggle.light": "Light",
    "toggle.dark": "Dark",
    "toggle.langName": "العربية",

    "hero.eyebrow": "CENTRA TECHNOLOGIES",
    "hero.title1": "Cybersecurity",
    "hero.title2": "Partnership Portal",
    "hero.description": "A centralized executive view of CENTRA's cybersecurity vendor partnerships, ownership, responsible engineering team, and partnership lifecycle.",
    "hero.by": "By:",
    "hero.author": "Mohamed Abdelalim",
    "hero.explore": "Explore Partnerships",
    "hero.directory": "Partner Directory",
    "hero.meta1": "Strategic Vendor Management",
    "hero.meta2": "Cybersecurity Division",

    "core.security": "SECURITY",
    "core.partnerships": "PARTNERSHIPS",

    "stats.engineers": "Cybersecurity Engineers",
    "stats.partners": "Technology Partners",
    "stats.profiles": "Active Partnership Profiles",
    "stats.hundred": "100%",
    "stats.centralized": "Centralized Ownership View",

    "team.eyebrow": "PARTNERSHIP OWNERS",
    "team.title": "Cybersecurity Partnership Team",
    "team.desc": "Engineers responsible for managing and following up with CENTRA's strategic cybersecurity technology partnerships.",

    "dir.eyebrow": "TECHNOLOGY ECOSYSTEM",
    "dir.title": "Partner Directory",
    "dir.desc": "Search, filter, and open any cybersecurity technology partnership to review its level, lifecycle dates, status, and responsible engineer.",
    "dir.search": "Search partner or responsible engineer...",
    "dir.emptyTitle": "No matching partnership",
    "dir.emptyText": "Try another company name or engineer.",

    "mgmt.eyebrow": "MANAGEMENT VIEW",
    "mgmt.title": "One portal. One clear ownership view.",
    "mgmt.text": "Use this portal as a lightweight executive follow-up page for cybersecurity vendor partnerships and responsible engineers.",
    "mgmt.back": "Back to Top",

    "footer.note": "Internal partnership follow-up portal",

    "filter.all": "All",

    "eng.number": "ENGINEER",
    "eng.responsible": "Responsible Partnerships",
    "eng.viewProfile": "View Profile →",
    "eng.addPhoto": "Add photo:",
    "eng.count": n => `${n} ${n === 1 ? "technology partner" : "technology partners"}`,
    "eng.openPartner": name => `Open ${name} partnership`,

    "partner.owner": "Partnership Owner:",
    "partner.lifecycle": "PARTNERSHIP LIFECYCLE",
    "partner.view": "View partnership →",
    "orbit.open": name => `Open ${name} partnership details`,
    "orbit.label": "CENTRA technology partner orbit",

    "status.active": "Active",
    "status.in-progress": "In Progress",
    "status.expiring-soon": "Expiring Soon",
    "status.expired": "Expired",

    "date.notSet": "Not set",
    "date.arrow": "→",

    "modal.close": "Close",
    "modal.ownerEyebrow": "PARTNERSHIP OWNER",
    "modal.managed": "Managed Technology Partnerships",
    "modal.noPhoto1": "Engineer photo",
    "modal.noPhoto2": "not uploaded yet",
    "modal.techPartner": "TECHNOLOGY PARTNER",
    "modal.subtitle": "CENTRA Cybersecurity Partnership",
    "modal.level": "PARTNERSHIP LEVEL",
    "modal.status": "STATUS",
    "modal.start": "START DATE",
    "modal.end": "END / RENEWAL DATE",
    "modal.owner": "PARTNERSHIP OWNER",
    "modal.role": "OWNER ROLE",
    "modal.note": "Partnership dates are shown directly from the partner record. Update <code>startDate</code> and <code>endDate</code> in <code>app.js</code> only after the dates are confirmed.",

    "doc.title": "CENTRA | Cybersecurity Partnership Portal"
  },

  ar: {
    "brand.subtitle": "بوابة شراكات الأمن السيبراني",
    "nav.overview": "نظرة عامة",
    "nav.engineers": "المهندسون",
    "nav.partnerships": "الشراكات",
    "nav.viewTeam": "عرض الفريق",

    "toggle.langLabel": "تغيير اللغة",
    "toggle.themeLabel": "التبديل بين المظهر الداكن والفاتح",
    "toggle.light": "فاتح",
    "toggle.dark": "داكن",
    "toggle.langName": "English",

    "hero.eyebrow": "CENTRA للتكنولوجيا",
    "hero.title1": "الأمن السيبراني",
    "hero.title2": "بوابة الشراكات",
    "hero.description": "عرض تنفيذي مركزي لشراكات CENTRA مع موردي الأمن السيبراني، يشمل الملكية وفريق المهندسين المسؤول ودورة حياة كل شراكة.",
    "hero.by": "إعداد:",
    "hero.author": "محمد عبد العليم",
    "hero.explore": "استكشاف الشراكات",
    "hero.directory": "دليل الشركاء",
    "hero.meta1": "إدارة الموردين الاستراتيجية",
    "hero.meta2": "قطاع الأمن السيبراني",

    "core.security": "الأمان",
    "core.partnerships": "الشراكات",

    "stats.engineers": "مهندسو الأمن السيبراني",
    "stats.partners": "شركاء التكنولوجيا",
    "stats.profiles": "ملفات الشراكة النشطة",
    "stats.hundred": "100%",
    "stats.centralized": "رؤية مركزية للملكية",

    "team.eyebrow": "مالكو الشراكات",
    "team.title": "فريق شراكات الأمن السيبراني",
    "team.desc": "المهندسون المسؤولون عن إدارة ومتابعة شراكات CENTRA الاستراتيجية مع شركات تكنولوجيا الأمن السيبراني.",

    "dir.eyebrow": "المنظومة التقنية",
    "dir.title": "دليل الشركاء",
    "dir.desc": "ابحث وصفِّ وافتح أي شراكة تقنية في الأمن السيبراني لمراجعة مستواها وتواريخها وحالتها والمهندس المسؤول عنها.",
    "dir.search": "ابحث باسم الشريك أو المهندس المسؤول...",
    "dir.emptyTitle": "لا توجد شراكة مطابقة",
    "dir.emptyText": "جرّب اسم شركة أو مهندس آخر.",

    "mgmt.eyebrow": "رؤية الإدارة",
    "mgmt.title": "بوابة واحدة. رؤية واضحة للملكية.",
    "mgmt.text": "استخدم هذه البوابة كصفحة متابعة تنفيذية خفيفة لشراكات موردي الأمن السيبراني والمهندسين المسؤولين عنها.",
    "mgmt.back": "العودة للأعلى",

    "footer.note": "بوابة داخلية لمتابعة الشراكات",

    "filter.all": "الكل",

    "eng.number": "المهندس",
    "eng.responsible": "الشراكات المسؤول عنها",
    "eng.viewProfile": "عرض الملف ←",
    "eng.addPhoto": "أضف الصورة:",
    "eng.count": n => {
      if (n === 1) return "شريك تقني واحد";
      if (n === 2) return "شريكان تقنيان";
      if (n <= 10) return `${n} شركاء تقنيين`;
      return `${n} شريكًا تقنيًا`;
    },
    "eng.openPartner": name => `فتح شراكة ${name}`,

    "partner.owner": "مالك الشراكة:",
    "partner.lifecycle": "دورة حياة الشراكة",
    "partner.view": "عرض الشراكة ←",
    "orbit.open": name => `فتح تفاصيل شراكة ${name}`,
    "orbit.label": "مدار شركاء CENTRA التقنيين",

    "status.active": "نشطة",
    "status.in-progress": "قيد التنفيذ",
    "status.expiring-soon": "تنتهي قريبًا",
    "status.expired": "منتهية",

    "date.notSet": "غير محدد",
    "date.arrow": "←",

    "modal.close": "إغلاق",
    "modal.ownerEyebrow": "مالك الشراكة",
    "modal.managed": "شراكات التكنولوجيا المُدارة",
    "modal.noPhoto1": "صورة المهندس",
    "modal.noPhoto2": "لم تُرفع بعد",
    "modal.techPartner": "شريك تقني",
    "modal.subtitle": "شراكة CENTRA في الأمن السيبراني",
    "modal.level": "مستوى الشراكة",
    "modal.status": "الحالة",
    "modal.start": "تاريخ البداية",
    "modal.end": "تاريخ الانتهاء / التجديد",
    "modal.owner": "مالك الشراكة",
    "modal.role": "وظيفة المالك",
    "modal.note": "تُعرض تواريخ الشراكة مباشرة من سجل الشريك. حدِّث <code>startDate</code> و<code>endDate</code> في <code>app.js</code> بعد تأكيد التواريخ فقط.",

    "doc.title": "CENTRA | بوابة شراكات الأمن السيبراني"
  }
};


/* ============================================================
   4. LANGUAGE + THEME STATE
   ============================================================ */

const root = document.documentElement;

let currentLang = root.getAttribute("lang") === "ar" ? "ar" : "en";
let currentTheme = root.getAttribute("data-theme") === "light" ? "light" : "dark";

/** Translate a UI key (values may be strings or functions). */
function t(key, ...args) {
  const value = I18N[currentLang][key] ?? I18N.en[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
}

/** Localize a piece of data (name / role / level) using DATA_AR. */
function localize(group, value) {
  if (currentLang === "ar") {
    return DATA_AR[group][value] || value;
  }
  return value;
}

/** Safe localStorage helpers (storage can be blocked). */
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}


/* ============================================================
   5. DOM REFERENCES
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

const langToggle = document.getElementById("langToggle");
const langToggleText = document.getElementById("langToggleText");
const themeToggle = document.getElementById("themeToggle");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const themeToggleText = document.getElementById("themeToggleText");

// Which modal is currently open (so it can be re-rendered on language change)
let currentPartnerName = null;
let currentEngineerIndex = null;
let lastFocusedElement = null;


/* ============================================================
   6. DATE HANDLING
   ------------------------------------------------------------
   Accepts almost any way of writing a date (see top of file),
   in English or Arabic, text or numbers. If a value cannot be
   understood, it is shown exactly as it was typed instead of
   being hidden.
   ============================================================ */

const MONTHS_EN = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

const MONTHS_AR = {
  "يناير": 0, "فبراير": 1, "مارس": 2, "ابريل": 3, "مايو": 4, "يونيو": 5,
  "يونيه": 5, "يوليو": 6, "يوليه": 6, "اغسطس": 7, "سبتمبر": 8,
  "اكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11
};

/** Converts Arabic-Indic / Persian digits to 0-9. */
function normalizeDigits(text) {
  return text
    .replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, d => String(d.charCodeAt(0) - 0x06f0));
}

function isValidParts(year, month, day) {
  if (year < 1900 || year > 2200) return false;
  if (month !== null && (month < 0 || month > 11)) return false;
  if (day !== null) {
    if (month === null) return false;
    const test = new Date(year, month, day);
    if (test.getMonth() !== month || test.getDate() !== day) return false;
  }
  return true;
}

/**
 * Returns { year, month (0-11 | null), day (1-31 | null) } or null.
 */
function parsePartnershipDate(value) {
  if (value === null || value === undefined) return null;

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return { year: value.getFullYear(), month: value.getMonth(), day: value.getDate() };
  }

  if (typeof value === "number") {
    return value >= 1900 && value <= 2200
      ? { year: Math.trunc(value), month: null, day: null }
      : null;
  }

  let s = normalizeDigits(String(value)).trim().toLowerCase();
  if (!s) return null;

  s = s.replace(/[أإآ]/g, "ا").replace(/[،,]/g, " ").replace(/\s+/g, " ");

  let m;

  // 2026
  if ((m = s.match(/^(\d{4})$/))) {
    const year = Number(m[1]);
    return isValidParts(year, null, null) ? { year, month: null, day: null } : null;
  }

  // 2026-10 | 2026/10 | 2026.10
  if ((m = s.match(/^(\d{4})\s*[-\/.]\s*(\d{1,2})$/))) {
    const year = Number(m[1]);
    const month = Number(m[2]) - 1;
    return isValidParts(year, month, null) ? { year, month, day: null } : null;
  }

  // 2026-10-15 | 2026/10/15
  if ((m = s.match(/^(\d{4})\s*[-\/.]\s*(\d{1,2})\s*[-\/.]\s*(\d{1,2})$/))) {
    const year = Number(m[1]);
    const month = Number(m[2]) - 1;
    const day = Number(m[3]);
    return isValidParts(year, month, day) ? { year, month, day } : null;
  }

  // 10/2026 | 10-2026
  if ((m = s.match(/^(\d{1,2})\s*[-\/.]\s*(\d{4})$/))) {
    const month = Number(m[1]) - 1;
    const year = Number(m[2]);
    return isValidParts(year, month, null) ? { year, month, day: null } : null;
  }

  // 15/10/2026 | 15-10-2026 | 15.10.2026  (day first)
  if ((m = s.match(/^(\d{1,2})\s*[-\/.]\s*(\d{1,2})\s*[-\/.]\s*(\d{4})$/))) {
    const day = Number(m[1]);
    const month = Number(m[2]) - 1;
    const year = Number(m[3]);
    return isValidParts(year, month, day) ? { year, month, day } : null;
  }

  // Text months: "Oct 2026", "15 October 2026", "Oct 15, 2026", "أكتوبر 2026"
  const words = s.match(/[a-z؀-ۿ]+/g) || [];
  let month = null;

  for (const word of words) {
    if (MONTHS_AR[word] !== undefined) {
      month = MONTHS_AR[word];
      break;
    }

    if (/^[a-z]{3,9}$/.test(word)) {
      const index = MONTHS_EN.findIndex(name => name.startsWith(word));
      if (index !== -1) {
        month = index;
        break;
      }
    }
  }

  if (month !== null) {
    const numbers = s.match(/\d+/g) || [];
    const yearText = numbers.find(n => n.length === 4);
    const dayText = numbers.find(n => n.length <= 2);

    if (yearText) {
      const year = Number(yearText);
      const day = dayText ? Number(dayText) : null;
      return isValidParts(year, month, day) ? { year, month, day } : null;
    }
  }

  return null;
}

function getDateLocale() {
  return currentLang === "ar" ? "ar-EG-u-nu-latn" : "en-GB";
}

/** Formats a date for display in the current language. */
function formatPartnershipDate(value) {
  const isEmpty = value === null || value === undefined || String(value).trim() === "";
  if (isEmpty) return t("date.notSet");

  const parts = parsePartnershipDate(value);

  // Unknown format: show what the user typed instead of hiding it.
  if (!parts) return String(value).trim();

  const date = new Date(Date.UTC(parts.year, parts.month ?? 0, parts.day ?? 1, 12));
  const options = { timeZone: "UTC", year: "numeric" };

  if (parts.month !== null) options.month = "short";
  if (parts.day !== null) options.day = "2-digit";

  return new Intl.DateTimeFormat(getDateLocale(), options).format(date);
}

/** Last moment covered by the written date (used for expiry checks). */
function getPeriodEnd(parts) {
  if (!parts) return null;
  if (parts.month === null) return new Date(parts.year, 11, 31, 23, 59, 59);
  if (parts.day === null) return new Date(parts.year, parts.month + 1, 0, 23, 59, 59);
  return new Date(parts.year, parts.month, parts.day, 23, 59, 59);
}

const EXPIRING_SOON_DAYS = 90;

/** Returns: "in-progress" | "expired" | "expiring-soon" | "active" */
function getPartnershipStatusKey(partner) {
  const level = String(partner.level || "").toLowerCase();

  if (level.includes("in progress")) return "in-progress";

  const end = getPeriodEnd(parsePartnershipDate(partner.endDate));

  if (end) {
    const now = new Date();
    if (end < now) return "expired";

    const daysLeft = (end - now) / 86400000;
    if (daysLeft <= EXPIRING_SOON_DAYS) return "expiring-soon";
  }

  return "active";
}

function getPartnershipStatus(partner) {
  return t(`status.${getPartnershipStatusKey(partner)}`);
}

function getPartnershipTimeline(partner) {
  return `${formatPartnershipDate(partner.startDate)} ${t("date.arrow")} ${formatPartnershipDate(partner.endDate)}`;
}


/* ============================================================
   7. HELPER FUNCTIONS
   ============================================================ */

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("");
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

function getPartnerByName(name) {
  return getAllPartners().find(partner => partner.name === name);
}

/** Builds an <img> that swaps itself for a text fallback if it fails to load. */
function imageWithFallback({ src, alt, kind, text, className = "" }) {
  return `<img ${className ? `class="${className}"` : ""}
    src="${escapeHTML(src)}"
    alt="${escapeHTML(alt)}"
    data-fallback="${kind}"
    data-fallback-text="${escapeHTML(text)}">`;
}

/** Creates the element that replaces a broken image. */
function buildFallback(img) {
  const kind = img.dataset.fallback;
  const text = img.dataset.fallbackText || "";
  let element;

  switch (kind) {
    case "engineer":
      element = document.createElement("div");
      element.className = "photo-placeholder";
      element.append(t("eng.addPhoto"), document.createElement("br"), text);
      return element;

    case "modal-engineer":
      element = document.createElement("div");
      element.className = "modal-photo-placeholder";
      element.append(t("modal.noPhoto1"), document.createElement("br"), t("modal.noPhoto2"));
      return element;

    default: {
      const classes = {
        vendor: "vendor-placeholder",
        partner: "partner-logo-fallback",
        orbit: "orbit-logo-fallback",
        detail: "partner-detail-logo-fallback"
      };

      element = document.createElement("span");
      element.className = classes[kind] || "vendor-placeholder";
      element.textContent = text;
      return element;
    }
  }
}

// Image "error" events do not bubble, so they are caught in the capture phase.
document.addEventListener("error", event => {
  const img = event.target;

  if (!(img instanceof HTMLImageElement) || !img.dataset.fallback) {
    return;
  }

  img.replaceWith(buildFallback(img));
}, true);


/* ============================================================
   8. ENGINEER CARDS
   ============================================================ */

function renderEngineers() {
  engineerGrid.innerHTML = "";

  engineers.forEach((engineer, index) => {
    const card = document.createElement("article");
    card.className = "engineer-card reveal";
    card.dataset.engineer = engineer.name;

    const displayName = localize("names", engineer.name);
    const displayRole = localize("roles", engineer.role);

    const photoHTML = engineer.photo
      ? imageWithFallback({
          src: engineer.photo,
          alt: displayName,
          kind: "engineer",
          text: engineer.photo,
          className: "engineer-photo"
        })
      : `<div class="photo-placeholder">${t("eng.addPhoto")}<br>${escapeHTML(displayName)}</div>`;

    const vendorsHTML = engineer.partnerships.map(partner => `
      <button
        class="vendor-chip vendor-chip-button"
        type="button"
        title="${escapeHTML(t("eng.openPartner", partner.name))}"
        data-partner-name="${escapeHTML(partner.name)}">
        ${imageWithFallback({
          src: partner.logo,
          alt: `${partner.name} logo`,
          kind: "vendor",
          text: getInitials(partner.name)
        })}
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
            ${t("eng.number")} ${String(index + 1).padStart(2, "0")}
          </div>

          <h3 class="engineer-name">${escapeHTML(displayName)}</h3>
          <p class="engineer-role">${escapeHTML(displayRole)}</p>
        </div>
      </div>

      <div class="partnership-label">
        ${t("eng.responsible")}
      </div>

      <div class="vendor-list">
        ${vendorsHTML}
      </div>

      <div class="engineer-footer">
        <span class="engineer-count">
          ${escapeHTML(t("eng.count", engineer.partnerships.length))}
        </span>

        <button
          class="details-btn"
          type="button"
          data-engineer-index="${index}">
          ${t("eng.viewProfile")}
        </button>
      </div>
    `;

    engineerGrid.appendChild(card);
  });

  observeRevealElements();
}


/* ============================================================
   9. PARTNER DIRECTORY
   ============================================================ */

function renderPartnerFilters(activeValue = "all") {
  engineerFilters.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.className = "filter-btn";
  allButton.dataset.filter = "all";
  allButton.textContent = t("filter.all");
  engineerFilters.appendChild(allButton);

  engineers.forEach((engineer, index) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.dataset.filter = String(index);
    button.textContent = localize("names", engineer.name);
    engineerFilters.appendChild(button);
  });

  const target =
    engineerFilters.querySelector(`[data-filter="${activeValue}"]`) || allButton;

  target.classList.add("active");
}

function getSearchableText(partner) {
  const statusKey = getPartnershipStatusKey(partner);

  return [
    partner.name,
    partner.owner,
    DATA_AR.names[partner.owner],
    partner.level,
    DATA_AR.levels[partner.level],
    I18N.en[`status.${statusKey}`],
    I18N.ar[`status.${statusKey}`],
    partner.startDate,
    partner.endDate,
    formatPartnershipDate(partner.startDate),
    formatPartnershipDate(partner.endDate)
  ].join(" ").toLowerCase();
}

function renderPartners() {
  const activeFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";

  const searchTerm = partnerSearch.value.trim().toLowerCase();

  const partners = getAllPartners().filter(partner => {
    const matchesEngineer =
      activeFilter === "all" ||
      String(partner.ownerIndex) === activeFilter;

    const matchesSearch =
      !searchTerm || getSearchableText(partner).includes(searchTerm);

    return matchesEngineer && matchesSearch;
  });

  partnerGrid.innerHTML = "";

  partners.forEach(partner => {
    const statusKey = getPartnershipStatusKey(partner);

    const card = document.createElement("button");
    card.className = "partner-card reveal partner-card-button";
    card.type = "button";
    card.dataset.partnerName = partner.name;

    card.innerHTML = `
      <div class="partner-card-main">
        <div class="partner-logo-wrap">
          ${imageWithFallback({
            src: partner.logo,
            alt: `${partner.name} logo`,
            kind: "partner",
            text: getInitials(partner.name)
          })}
        </div>

        <h3 class="partner-name">${escapeHTML(partner.name)}</h3>

        <div class="partner-badges">
          <span class="partner-level-mini">
            ${escapeHTML(localize("levels", partner.level))}
          </span>
          <span class="partner-status-badge status-${statusKey}">
            ${escapeHTML(t(`status.${statusKey}`))}
          </span>
        </div>
      </div>

      <p class="partner-owner">
        ${t("partner.owner")} <strong>${escapeHTML(localize("names", partner.owner))}</strong>
      </p>

      <div class="partner-timeline-mini">
        <span>${t("partner.lifecycle")}</span>
        <strong>${escapeHTML(getPartnershipTimeline(partner))}</strong>
      </div>

      <span class="partner-open-hint">${t("partner.view")}</span>
    `;

    partnerGrid.appendChild(card);
  });

  emptyState.hidden = partners.length !== 0;

  observeRevealElements();
}


/* ============================================================
   10. PARTNER ORBIT
   ------------------------------------------------------------
   Improvements:
   - The orbit pauses while the mouse is over it (easier to click).
   - It stays still for people who prefer reduced motion.
   ============================================================ */

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let orbitAnimationFrame = null;
let orbitLastTimestamp = null;
let orbitElapsed = 0;
let orbitPaused = false;

const ORBIT_RING_RATIOS = [0.27, 0.38, 0.49];
const ORBIT_RING_SPEEDS = [0.012, -0.008, 0.006];

function renderPartnerOrbit() {
  orbitPartners.innerHTML = "";

  const partners = getAllPartners();

  partners.forEach((partner, index) => {
    const angle = (360 / partners.length) * index;
    const ringIndex = index % ORBIT_RING_RATIOS.length;

    const node = document.createElement("button");
    node.type = "button";
    node.className = "orbit-node";
    node.dataset.partnerName = partner.name;
    node.dataset.baseAngle = String(angle);
    node.dataset.ringRatio = String(ORBIT_RING_RATIOS[ringIndex]);
    node.dataset.ringIndex = String(ringIndex);

    node.innerHTML = `
      <span class="orbit-node-logo">
        ${imageWithFallback({
          src: partner.logo,
          alt: `${partner.name} logo`,
          kind: "orbit",
          text: getInitials(partner.name)
        })}
      </span>
      <span class="orbit-node-name">${escapeHTML(partner.name)}</span>
    `;

    orbitPartners.appendChild(node);
  });

  updateOrbitLabels();
  startPartnerOrbitAnimation();
}

/** Updates the translated labels without restarting the animation. */
function updateOrbitLabels() {
  partnerOrbit.setAttribute("aria-label", t("orbit.label"));

  orbitPartners.querySelectorAll(".orbit-node").forEach(node => {
    const label = t("orbit.open", node.dataset.partnerName);
    node.setAttribute("aria-label", label);
    node.title = label;
  });
}

function positionOrbitNodes() {
  const orbitSize = partnerOrbit.clientWidth;

  orbitPartners.querySelectorAll(".orbit-node").forEach(node => {
    const baseAngle = Number(node.dataset.baseAngle || 0);
    const ringRatio = Number(node.dataset.ringRatio || 0.49);
    const ringIndex = Number(node.dataset.ringIndex || 0);

    const currentAngle = baseAngle + orbitElapsed * ORBIT_RING_SPEEDS[ringIndex];
    const radians = (currentAngle * Math.PI) / 180;
    const radius = orbitSize * ringRatio;

    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    node.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

function startPartnerOrbitAnimation() {
  if (orbitAnimationFrame) {
    cancelAnimationFrame(orbitAnimationFrame);
    orbitAnimationFrame = null;
  }

  orbitLastTimestamp = null;
  positionOrbitNodes();

  if (reducedMotionQuery.matches) {
    return;
  }

  const animate = timestamp => {
    if (orbitLastTimestamp === null) {
      orbitLastTimestamp = timestamp;
    }

    if (!orbitPaused) {
      orbitElapsed += timestamp - orbitLastTimestamp;
    }

    orbitLastTimestamp = timestamp;
    positionOrbitNodes();

    orbitAnimationFrame = requestAnimationFrame(animate);
  };

  orbitAnimationFrame = requestAnimationFrame(animate);
}

partnerOrbit.addEventListener("pointerenter", () => { orbitPaused = true; });
partnerOrbit.addEventListener("pointerleave", () => { orbitPaused = false; });
partnerOrbit.addEventListener("focusin", () => { orbitPaused = true; });
partnerOrbit.addEventListener("focusout", () => { orbitPaused = false; });

window.addEventListener("resize", positionOrbitNodes);


/* ============================================================
   11. MODALS
   ============================================================ */

function showModal(modal, focusSelector) {
  lastFocusedElement = document.activeElement;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(focusSelector);
  if (closeButton) closeButton.focus({ preventScroll: true });
}

function hideModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  const anyOpen = document.querySelector(".modal.open");
  if (!anyOpen) document.body.classList.remove("modal-open");
}

/* ---------- Engineer profile ---------- */

function renderEngineerModalContent(index) {
  const engineer = engineers[index];
  if (!engineer) return;

  const displayName = localize("names", engineer.name);
  const displayRole = localize("roles", engineer.role);

  const photoHTML = engineer.photo
    ? imageWithFallback({
        src: engineer.photo,
        alt: displayName,
        kind: "modal-engineer",
        text: ""
      })
    : `<div class="modal-photo-placeholder">${t("modal.noPhoto1")}<br>${t("modal.noPhoto2")}</div>`;

  const vendorHTML = engineer.partnerships.map(partner => `
    <button
      class="modal-vendor modal-vendor-button"
      type="button"
      data-partner-name="${escapeHTML(partner.name)}">
      ${imageWithFallback({
        src: partner.logo,
        alt: `${partner.name} logo`,
        kind: "vendor",
        text: getInitials(partner.name)
      })}
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
          ${t("modal.ownerEyebrow")}
        </div>

        <h2 id="modalEngineerName" class="modal-name">
          ${escapeHTML(displayName)}
        </h2>

        <p class="modal-role">
          ${escapeHTML(displayRole)}
        </p>
      </div>
    </div>

    <div class="modal-vendors">
      <h3>${t("modal.managed")}</h3>

      <div class="modal-vendor-grid">
        ${vendorHTML}
      </div>
    </div>
  `;
}

function openEngineerModal(index) {
  if (!engineers[index]) return;

  currentEngineerIndex = index;
  renderEngineerModalContent(index);
  showModal(engineerModal, ".modal-close");
}

function closeEngineerModal() {
  if (!engineerModal.classList.contains("open")) return;

  currentEngineerIndex = null;
  hideModal(engineerModal);
  restoreFocus();
}

/* ---------- Partner details ---------- */

function renderPartnerModalContent(partnerName) {
  const partner = getPartnerByName(partnerName);
  if (!partner) return;

  const statusKey = getPartnershipStatusKey(partner);

  partnerModalContent.innerHTML = `
    <div class="partner-detail-header">
      <div class="partner-detail-logo">
        ${imageWithFallback({
          src: partner.logo,
          alt: `${partner.name} logo`,
          kind: "detail",
          text: getInitials(partner.name)
        })}
      </div>

      <div>
        <div class="eyebrow">
          <span class="status-dot"></span>
          ${t("modal.techPartner")}
        </div>

        <h2 id="modalPartnerName" class="modal-name">
          ${escapeHTML(partner.name)}
        </h2>

        <p class="modal-role">
          ${t("modal.subtitle")}
        </p>
      </div>
    </div>

    <div class="partner-detail-grid">
      <div class="partner-detail-card">
        <span class="detail-label">${t("modal.level")}</span>
        <strong>${escapeHTML(localize("levels", partner.level))}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">${t("modal.status")}</span>
        <strong class="status-value status-${statusKey}">
          ${escapeHTML(t(`status.${statusKey}`))}
        </strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">${t("modal.start")}</span>
        <strong>${escapeHTML(formatPartnershipDate(partner.startDate))}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">${t("modal.end")}</span>
        <strong>${escapeHTML(formatPartnershipDate(partner.endDate))}</strong>
      </div>

      <div class="partner-detail-card">
        <span class="detail-label">${t("modal.owner")}</span>
        <strong>${escapeHTML(localize("names", partner.owner))}</strong>
      </div>

      <div class="partner-detail-card partner-detail-card-wide">
        <span class="detail-label">${t("modal.role")}</span>
        <strong>${escapeHTML(localize("roles", partner.ownerRole))}</strong>
      </div>
    </div>

    <div class="partner-detail-note">
      <span class="status-dot"></span>
      <span>${t("modal.note")}</span>
    </div>
  `;
}

function openPartnerModal(partnerName) {
  if (!getPartnerByName(partnerName)) return;

  currentPartnerName = partnerName;
  renderPartnerModalContent(partnerName);
  showModal(partnerModal, ".modal-close");
}

function closePartnerModal() {
  if (!partnerModal.classList.contains("open")) return;

  currentPartnerName = null;
  hideModal(partnerModal);
  restoreFocus();
}

function restoreFocus() {
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
}


/* ============================================================
   12. SEARCH + FILTER + CLICK EVENTS
   ============================================================ */

partnerSearch.addEventListener("input", renderPartners);

engineerFilters.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  engineerFilters.querySelectorAll(".filter-btn").forEach(item => {
    item.classList.remove("active");
  });

  button.classList.add("active");
  renderPartners();
});

document.addEventListener("click", event => {
  const detailsButton = event.target.closest("[data-engineer-index]");

  if (detailsButton) {
    openEngineerModal(Number(detailsButton.dataset.engineerIndex));
    return;
  }

  const partnerButton = event.target.closest("[data-partner-name]");

  if (partnerButton) {
    // Opening a partner from inside the engineer modal: close that one first.
    if (engineerModal.classList.contains("open")) {
      currentEngineerIndex = null;
      hideModal(engineerModal);
    }

    openPartnerModal(partnerButton.dataset.partnerName);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeEngineerModal();
    return;
  }

  if (event.target.closest("[data-close-partner-modal]")) {
    closePartnerModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  closeEngineerModal();
  closePartnerModal();
});


/* ============================================================
   13. THEME TOGGLE (DARK / LIGHT)
   ============================================================ */

function updateThemeToggle() {
  const isDark = currentTheme === "dark";

  // The button shows the theme you will switch TO.
  themeToggleIcon.textContent = isDark ? "☀" : "☾";
  themeToggleText.textContent = isDark ? t("toggle.light") : t("toggle.dark");
  themeToggle.setAttribute("aria-label", t("toggle.themeLabel"));
  themeToggle.setAttribute("aria-pressed", String(!isDark));
}

function applyTheme(theme, animate = true) {
  currentTheme = theme === "light" ? "light" : "dark";

  if (animate && !reducedMotionQuery.matches) {
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 450);
  }

  root.setAttribute("data-theme", currentTheme);
  saveSetting("centra-theme", currentTheme);
  updateThemeToggle();
}

themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});


/* ============================================================
   14. LANGUAGE TOGGLE (ENGLISH / ARABIC)
   ============================================================ */

/** Fills every [data-i18n] / [data-i18n-attr] element in the static HTML. */
function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(element => {
    element.dataset.i18nAttr.split(";").forEach(pair => {
      const [attribute, key] = pair.split(":");
      if (attribute && key) element.setAttribute(attribute.trim(), t(key.trim()));
    });
  });

  document.title = t("doc.title");

  langToggleText.textContent = t("toggle.langName");

  document.querySelectorAll("[data-close-modal], [data-close-partner-modal]").forEach(el => {
    if (el.classList.contains("modal-close")) {
      el.setAttribute("aria-label", t("modal.close"));
    }
  });
}

function applyLanguage(lang, { rerender = true } = {}) {
  currentLang = lang === "ar" ? "ar" : "en";

  root.setAttribute("lang", currentLang);
  root.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
  saveSetting("centra-lang", currentLang);

  applyStaticTranslations();
  updateThemeToggle();

  if (!rerender) return;

  // Re-render everything that is generated by JavaScript.
  const activeFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";

  renderEngineers();
  renderPartnerFilters(activeFilter);
  renderPartners();
  updateOrbitLabels();

  if (currentPartnerName) renderPartnerModalContent(currentPartnerName);
  if (currentEngineerIndex !== null) renderEngineerModalContent(currentEngineerIndex);
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});


/* ============================================================
   15. SCROLL REVEAL
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
      { threshold: 0.12 }
    );
  }

  elements.forEach(element => {
    element.classList.add("is-observed");
    revealObserver.observe(element);
  });
}


/* ============================================================
   16. COUNTER ANIMATION
   ============================================================ */

function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);

    if (reducedMotionQuery.matches) {
      counter.textContent = target;
      return;
    }

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
   17. BACKGROUND PARTICLES
   ============================================================ */

function createParticles() {
  if (reducedMotionQuery.matches) return;

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
   18. DYNAMIC STATISTICS
   ------------------------------------------------------------
   All counters now follow the real data automatically.
   ============================================================ */

function updateDynamicStats() {
  const partnerCount = getAllPartners().length;

  const engineerCounter = document.getElementById("engineerCountCounter");
  const partnerCounter = document.getElementById("partnerCountCounter");
  const profileCounter = document.getElementById("profileCountCounter");

  if (engineerCounter) engineerCounter.dataset.target = String(engineers.length);
  if (partnerCounter) partnerCounter.dataset.target = String(partnerCount);
  if (profileCounter) profileCounter.dataset.target = String(partnerCount);
}


/* ============================================================
   19. INITIALIZATION
   ============================================================ */

function init() {
  updateDynamicStats();

  // Translate the static HTML first, then build the dynamic parts.
  applyLanguage(currentLang, { rerender: false });
  applyTheme(currentTheme, false);

  renderEngineers();
  renderPartnerFilters();
  renderPartners();
  renderPartnerOrbit();
  createParticles();

  yearElement.textContent = new Date().getFullYear();

  setTimeout(animateCounters, 250);
}

init();
