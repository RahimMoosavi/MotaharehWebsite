// shared.jsx — chrome and primitives shared across every page.
// Exported to window so each <script type="text/babel"> page file can use them.

const { useState, useEffect } = React;

// ---------- Site-wide constants ----------

const BOOKING_URL = "https://client.mepro.ai/book/3b921ebc";
const CONTACT_EMAIL = "therapy@motahareh.ca";

const PAGES = [
  { key: "about",         label: "About",          href: "about.html" },
  { key: "psychotherapy", label: "Psychotherapy",  href: "psychotherapy.html" },
  { key: "the-return",    label: "The Return",     href: "the-return.html" },
];

// The one portrait of Motahareh, in two art-directed crops of the same photo.
// `tight` is an editorial head crop for large slots; `roomy` keeps more headroom
// and shawl so the face still reads when the photo is rendered small. Both are
// square and graded to the sand background. Every page draws from here so the
// crops, the sources, and the alt text cannot drift apart.
const PORTRAIT = {
  alt: "Motahareh, Registered Psychotherapist (Qualifying), in a deep red hijab and woven shawl",
  tight: {
    src: "assets/motahareh-in-practice.jpg",
    srcSet: "assets/motahareh-in-practice@600.jpg 600w, assets/motahareh-in-practice.jpg 1200w",
    size: 1200,
  },
  roomy: {
    src: "assets/motahareh-in-practice-mobile.jpg",
    size: 480,
  },
};

// ---------- Primitives ----------

function MonoLabel({ children, className = "", as = "span" }) {
  const Tag = as;
  return <Tag className={`mono-label text-ink-mute ${className}`}>{children}</Tag>;
}

function SectionHeader({ index, kicker, title, lede, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="flex items-baseline gap-4">
        <MonoLabel>§ {index}</MonoLabel>
        <span className="h-px flex-1 bg-ink/15 max-w-[120px]"></span>
        <MonoLabel>{kicker}</MonoLabel>
      </div>
      {title && (
        <h2 className="font-display text-[32px] leading-[1.08] sm:text-[40px] sm:leading-[1.05] md:text-[56px] md:leading-[1.02] mt-5 text-ink">
          {title}
        </h2>
      )}
      {lede && <p className="mt-5 text-[17px] leading-[1.6] text-ink-soft max-w-2xl">{lede}</p>}
    </div>
  );
}

function ArrowIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" className={className}>
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookCTA({ variant = "primary", className = "", children = "Book", size = "md", href = BOOKING_URL }) {
  const base = "inline-flex items-center gap-2.5 font-medium rounded-full transition-all duration-200 group whitespace-nowrap";
  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-5 py-2.5 text-[14px]",
    lg: "px-7 py-3.5 text-[15px]",
  };
  const variants = {
    primary: "bg-terra-500 text-sand-50 hover:bg-terra-600 shadow-[0_1px_0_rgba(0,0,0,0.05),0_8px_24px_-12px_rgba(184,98,58,0.55)]",
    forest:  "bg-forest-800 text-sand-50 hover:bg-forest-900",
    ghost:   "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
    light:   "bg-sand-50 text-forest-800 hover:bg-sand-100",
  };
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

// A quieter text link with an arrow — used in place of a second button.
function TextLink({ href, children, className = "" }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 text-[15px] text-ink hover:text-terra-600 transition-colors group ${className}`}>
      <span className="underline decoration-ink/30 underline-offset-4 group-hover:decoration-terra-500">{children}</span>
      <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

// ---------- Navigation ----------

// The pages render client-side, so a #hash in the URL lands before its target exists.
// Nav is on every page, so it is the natural place to re-run the jump once mounted.
function useHashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;
    requestAnimationFrame(() => {
      try {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView();
      } catch (e) { /* not a valid selector — ignore */ }
    });
  }, []);
}

function Nav({ current = "", darkHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = darkHero && !scrolled;
  useHashScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-sand-50/90 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="index.html" className="flex items-baseline gap-2.5">
          <span className={`font-display text-[26px] leading-none ${onDark ? "text-sand-50" : "text-ink"}`}>Motahareh</span>
          <span className={`mono-label hidden md:inline ${onDark ? "!text-sand-200/60" : ""}`}>Psychotherapy · Embodiment · Psychospiritual</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {PAGES.map((p) => (
            <a
              key={p.key}
              href={p.href}
              className={`text-[14px] transition-colors relative group ${
                onDark
                  ? "text-sand-100 hover:text-sand-50"
                  : current === p.key ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {p.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-terra-500 transition-all duration-300 ${
                  current === p.key ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`hidden md:inline text-[14px] transition-colors ${onDark ? "text-sand-100 hover:text-sand-50" : "text-ink-soft hover:text-ink"}`}
          >
            Contact
          </a>
          <BookCTA size="sm" variant="primary">Book</BookCTA>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-9 h-9 rounded-full border flex items-center justify-center ${onDark ? "border-sand-200/30 text-sand-50" : "border-ink/15"}`}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="16" height="10" viewBox="0 0 16 10"><path d="M0 1h16M0 9h12" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-sand-50">
          <div className="px-6 py-4 flex flex-col">
            {PAGES.map((p) => (
              <a
                key={p.key}
                href={p.href}
                onClick={() => setOpen(false)}
                className="text-[16px] text-ink py-2.5 border-b border-ink/8"
              >
                {p.label}
              </a>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[16px] text-ink py-2.5">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- Credential strip ----------

function TrustBanner() {
  const items = [
    "Virtual sessions",
    "Registered Psychotherapist (Qualifying) · CRPO",
    "Insurance eligible in Ontario",
    "Trauma-informed · Culturally grounded",
  ];
  return (
    <div className="border-y border-ink/10 bg-sand-100/60 py-4">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
        {items.map((it, i) => (
          <div key={it} className="flex items-center gap-8">
            <MonoLabel className="!text-ink-soft">{it}</MonoLabel>
            {i < items.length - 1 && <span className="hidden md:block w-1 h-1 rounded-full bg-terra-500/60"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Closing call to action ----------

function ClosingCTA({
  kicker = "Getting started",
  title = "Start with a free 15-minute consult.",
  copy = "A short, no-pressure conversation to see whether we are a good fit. If I am not the right person for you, I will help you find someone who is.",
}) {
  return (
    <section id="book" data-screen-label="Closing CTA" className="bg-forest-900 text-sand-100 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl">
          <MonoLabel className="!text-terra-400">{kicker}</MonoLabel>
          <h2 className="font-display text-[34px] sm:text-[44px] md:text-[68px] leading-[1.05] md:leading-[1.02] text-sand-50 mt-5">{title}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-sand-200/80 max-w-xl">{copy}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <BookCTA size="lg" variant="primary">Book a free consult</BookCTA>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[15px] text-sand-100 underline decoration-sand-200/40 underline-offset-4 hover:decoration-terra-400"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Cross-links between service pages ----------

function ServiceCrossLink({ exclude }) {
  const all = [
    {
      key: "psychotherapy",
      label: "Psychotherapy",
      copy: "One-on-one therapy, delivered securely online.",
      href: "psychotherapy.html",
      tag: "Virtual · Insurance eligible",
    },
    {
      key: "the-return",
      label: "The Return",
      copy: "A 6-week mind–body–spirit integration program.",
      href: "the-return.html",
      tag: "⌖ Signature program",
    },
  ];
  const items = all.filter((s) => s.key !== exclude);

  return (
    <section className="py-20 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-baseline gap-4">
          <MonoLabel>Elsewhere in the practice</MonoLabel>
          <span className="h-px flex-1 bg-ink/15"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {items.map((it) => (
            <a
              key={it.key}
              href={it.href}
              className={`group block p-8 lg:p-10 rounded-sm ring-soft transition-colors ${items.length === 1 ? "md:col-span-2" : ""} ${
                it.key === "the-return" ? "bg-forest-900 text-sand-100 hover:bg-forest-800" : "bg-sand-50 hover:bg-sand-100"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <MonoLabel className={it.key === "the-return" ? "!text-terra-400" : ""}>{it.tag}</MonoLabel>
                <ArrowIcon className={`${it.key === "the-return" ? "text-sand-200" : "text-ink-mute"} group-hover:translate-x-1 transition-transform`} />
              </div>
              <h3 className={`font-display text-[30px] sm:text-[36px] md:text-[44px] leading-[1.05] mt-8 ${it.key === "the-return" ? "text-sand-50" : "text-ink"}`}>
                {it.label}
              </h3>
              <p className={`mt-4 text-[15px] leading-[1.6] max-w-md ${it.key === "the-return" ? "text-sand-200/80" : "text-ink-soft"}`}>
                {it.copy}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer className="bg-sand-50 border-t border-ink/10" data-screen-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-[36px] leading-none text-ink">Motahareh.</div>
            <p className="mt-4 text-[14px] text-ink-soft max-w-sm leading-relaxed">
              Integrative psychotherapy, embodied practice, and spiritually grounded care.
              Virtual sessions.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <MonoLabel>Pages</MonoLabel>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
              {PAGES.map((p) => (
                <li key={p.key}><a href={p.href} className="hover:text-ink">{p.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <MonoLabel>Get in touch</MonoLabel>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">{CONTACT_EMAIL}</a></li>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Book via MePro</a></li>
            </ul>
            <p className="mt-4 text-[13px] text-ink-mute leading-relaxed">
              If you are in crisis, call or text 988 (Suicide Crisis Helpline) or call 911.
              This website is not a crisis service.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink/10 text-[12px] text-ink-mute">
          © 2026 Motahareh. Registered Psychotherapist (Qualifying), CRPO.
        </div>
      </div>
    </footer>
  );
}

// ---------- export ----------

Object.assign(window, {
  MonoLabel, SectionHeader, ArrowIcon, BookCTA, TextLink,
  Nav, Footer, TrustBanner, ClosingCTA, ServiceCrossLink,
  BOOKING_URL, CONTACT_EMAIL, PAGES, PORTRAIT,
});
