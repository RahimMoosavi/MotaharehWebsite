// shared.jsx — common chrome and primitives across all pages.
// Exports to window at the end so other <script type="text/babel"> blocks can use them.

const { useState, useEffect, useRef } = React;

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
      <h2 className="font-display text-[44px] leading-[1.05] md:text-[64px] md:leading-[1.02] mt-5 text-ink">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-[17px] leading-[1.6] text-ink-soft max-w-2xl">{lede}</p>
      )}
    </div>
  );
}

function JaneCTA({ variant = "primary", className = "", children = "Book via JaneApp", size = "md", href = "#book" }) {
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
  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform group-hover:translate-x-0.5">
        <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function ArrowIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" className={className}>
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ---------- Navigation ----------

function Nav({ current = "", darkHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = darkHero && !scrolled;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    { label: "Psychotherapy", href: "psychotherapy.html", key: "psychotherapy", note: "Virtual · Ontario" },
    { label: "Yoga & Somatic",  href: "yoga.html", key: "yoga",                 note: "Private · group" },
    { label: "The Return", href: "the-return.html", key: "the-return",     note: "Signature · 6 weeks",  flag: true },
  ];

  const links = [
    ["Writing", "index.html#writing", "writing"],
    ["Events",  "index.html#events",  "events"],
  ];

  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (svcRef.current && !svcRef.current.contains(e.target)) setSvcOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-sand-50/85 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="index.html" className="flex items-baseline gap-2.5 group">
          <span className={`font-display text-[26px] leading-none ${onDark ? "text-sand-50" : "text-ink"}`}>Motahareh</span>
          <span className={`mono-label hidden md:inline ${onDark ? "!text-sand-200/60" : ""}`}>Psychotherapy · Yoga · Psychospiritual</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative" ref={svcRef}>
            <button
              onClick={() => setSvcOpen(!svcOpen)}
              className={`text-[14px] transition-colors flex items-center gap-1.5 relative group ${
                onDark
                  ? "text-sand-100 hover:text-sand-50"
                  : ["psychotherapy","yoga","the-return"].includes(current) ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              Services
              <svg width="9" height="6" viewBox="0 0 9 6" className={`transition-transform ${svcOpen ? "rotate-180" : ""}`}>
                <path d="M1 1l3.5 3.5L8 1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {["psychotherapy","yoga","the-return"].includes(current) && (
                <span className="absolute -bottom-1 left-0 right-4 h-px bg-terra-500"></span>
              )}
            </button>
            {svcOpen && (
              <div className="absolute top-full right-0 mt-3 w-[340px] bg-sand-50 border border-ink/10 rounded-sm shadow-xl shadow-ink/10 overflow-hidden">
                {services.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    className={`flex items-baseline justify-between gap-4 px-5 py-4 hover:bg-sand-100 transition-colors border-b border-ink/8 last:border-b-0 group ${
                      current === s.key ? "bg-sand-100" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-display text-[20px] text-ink leading-none flex items-center gap-2">
                        {s.label}
                        {s.flag && (
                          <span className="mono-label !text-terra-600 !text-[9px]">⌖ Flagship</span>
                        )}
                      </div>
                      <div className="mono-label mt-1.5 !text-ink-mute">{s.note}</div>
                    </div>
                    <ArrowIcon className="text-ink-mute group-hover:text-terra-600 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {links.map(([label, href, key]) => (
            <a
              key={key}
              href={href}
              className={`text-[14px] transition-colors relative group ${
                onDark
                  ? "text-sand-100 hover:text-sand-50"
                  : current === key ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-px bg-terra-500 transition-all duration-300 ${
                current === key ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="mailto:hello@motahareh.ca" className={`hidden md:inline text-[14px] transition-colors ${onDark ? "text-sand-100 hover:text-sand-50" : "text-ink-soft hover:text-ink"}`}>Contact</a>
          <JaneCTA size="sm" variant="primary">Book via JaneApp</JaneCTA>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-9 h-9 rounded-full border flex items-center justify-center ${onDark ? "border-sand-200/30 text-sand-50" : "border-ink/15"}`}
            aria-label="Menu"
          >
            <svg width="16" height="10" viewBox="0 0 16 10"><path d="M0 1h16M0 9h12" stroke="currentColor" strokeWidth="1.5"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-sand-50">
          <div className="px-6 py-4 flex flex-col gap-3">
            <MonoLabel className="mt-1">Services</MonoLabel>
            {services.map((s) => (
              <a key={s.key} href={s.href} className="text-[16px] text-ink py-1 flex items-center gap-2">
                {s.label} {s.flag && <span className="mono-label !text-terra-600">⌖</span>}
              </a>
            ))}
            <div className="h-px bg-ink/10 my-2"></div>
            {links.map(([label, href, key]) => (
              <a key={key} href={href} onClick={() => setOpen(false)} className="text-[15px] text-ink py-1">{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- Trust banner ----------

function TrustBanner() {
  const items = [
    "Virtual therapy across Ontario",
    "Covered by eligible insurance plans",
    "Registered Psychotherapist (Qualifying)",
    "CRPO · Ontario",
    "Trauma-informed · Culturally grounded",
  ];
  return (
    <div className="border-y border-ink/10 bg-sand-100/60 py-4 overflow-hidden">
      <div className="flex items-center gap-10 whitespace-nowrap" style={{animation: "scrollX 45s linear infinite"}}>
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="mono-label !text-ink-soft">{it}</span>
            <span className="w-1 h-1 rounded-full bg-terra-500/60"></span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scrollX { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer className="bg-sand-50 border-t border-ink/10" data-screen-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-[40px] leading-none text-ink">Motahareh.</div>
            <p className="mt-4 text-[14px] text-ink-soft max-w-sm leading-relaxed">
              Integrated psychotherapy, yoga and Islamic psychospiritual care.<br />
              Virtual across Ontario. Booking through JaneApp.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["IG", "SS", "YT"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center text-[11px] mono-label hover:bg-ink hover:text-sand-50 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-2">
            <MonoLabel>Services</MonoLabel>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
              <li><a href="psychotherapy.html" className="hover:text-ink">Psychotherapy</a></li>
              <li><a href="yoga.html" className="hover:text-ink">Yoga &amp; Somatic</a></li>
              <li><a href="the-return.html" className="hover:text-ink">The Return</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <MonoLabel>Practice</MonoLabel>
            <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
              <li><a href="index.html#writing" className="hover:text-ink">Writing</a></li>
              <li><a href="index.html#events" className="hover:text-ink">Past events</a></li>
              <li><a href="mailto:hello@motahareh.ca" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <MonoLabel>Newsletter</MonoLabel>
            <p className="mt-3 text-[13px] text-ink-soft">Quiet, infrequent. Practice notes and program announcements.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input className="flex-1 bg-transparent border border-ink/20 rounded-full px-4 py-2 text-[13px] focus:border-ink outline-none" placeholder="you@email.com" />
              <button className="px-4 py-2 rounded-full bg-ink text-sand-50 text-[13px]">↗</button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[12px] text-ink-mute">© 2026 Motahareh. All rights reserved. CRPO (Qualifying).</div>
          <div className="flex items-center gap-5 text-[12px] text-ink-mute">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Service page shared bits ----------

function ServicePageHero({ kicker, title, italicLast, lede, tags, secondaryHref, secondaryLabel, imageNote, imageLabel }) {
  return (
    <section data-screen-label="Service — Hero" className="relative pt-[112px] pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <a href="index.html" className="inline-flex items-center gap-2 text-[12px] text-ink-mute hover:text-ink mono-label">
              <span>←</span> Back to all services
            </a>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-2 h-2 rounded-full bg-terra-500"></span>
              <MonoLabel>{kicker}</MonoLabel>
            </div>
            <h1 className="font-display text-[52px] leading-[1.0] md:text-[96px] md:leading-[0.95] tracking-[-0.02em] text-ink mt-6">
              {title} {italicLast && <em className="text-terra-600">{italicLast}</em>}
            </h1>
            <p className="mt-7 text-[18px] md:text-[20px] leading-[1.55] text-ink-soft max-w-2xl">
              {lede}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <JaneCTA size="lg">Book via JaneApp</JaneCTA>
              {secondaryHref && (
                <a href={secondaryHref} className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-terra-600 group">
                  <span className="underline decoration-ink/30 underline-offset-4 group-hover:decoration-terra-500">{secondaryLabel}</span>
                  <ArrowIcon />
                </a>
              )}
            </div>
            {tags && (
              <div className="mt-10 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[12px] px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{t}</span>
                ))}
              </div>
            )}
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="aspect-[4/5] placeholder-img rounded-sm ring-soft relative">
              <div className="absolute top-4 right-4 mono-label bg-sand-50 px-2 py-1">{imageLabel}</div>
              <div className="absolute bottom-5 left-5 text-[10px] font-mono text-ink/50 max-w-[80%]">{imageNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCrossLink({ exclude }) {
  const all = [
    {
      key: "psychotherapy",
      label: "Virtual Psychotherapy",
      copy: "Trauma-informed therapy, delivered securely online across Ontario.",
      href: "psychotherapy.html",
      tag: "Ontario · Insurance eligible",
    },
    {
      key: "yoga",
      label: "Yoga & Somatic Work",
      copy: "Private and small-group practice for nervous system regulation.",
      href: "yoga.html",
      tag: "Private · Group",
    },
    {
      key: "the-return",
      label: "The Return",
      copy: "6-week mind-body-spirit integration program. Psychotherapy, embodiment, and spiritual grounding.",
      href: "the-return.html",
      tag: "⌖ Signature package",
    },
  ];
  const items = all.filter((s) => s.key !== exclude);
  return (
    <section className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-baseline gap-4">
          <MonoLabel>The other doors</MonoLabel>
          <span className="h-px flex-1 bg-ink/15"></span>
        </div>
        <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] text-ink mt-5 max-w-2xl">
          Continue through the practice.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {items.map((it) => (
            <a key={it.key} href={it.href} className={`group block p-8 lg:p-10 rounded-sm ring-soft transition-colors ${
              it.key === "the-return" ? "bg-forest-900 text-sand-100 hover:bg-forest-800" : "bg-sand-50 hover:bg-sand-100"
            }`}>
              <div className="flex items-baseline justify-between">
                <MonoLabel className={it.key === "the-return" ? "!text-terra-400" : ""}>{it.tag}</MonoLabel>
                <ArrowIcon className={`${it.key === "the-return" ? "text-sand-200" : "text-ink-mute"} group-hover:translate-x-1 transition-transform`} />
              </div>
              <h3 className={`font-display text-[40px] md:text-[48px] leading-[1.05] mt-8 ${it.key === "the-return" ? "text-sand-50" : "text-ink"}`}>{it.label}</h3>
              <p className={`mt-4 text-[15px] leading-[1.6] max-w-md ${it.key === "the-return" ? "text-sand-200/80" : "text-ink-soft"}`}>{it.copy}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- export ----------

Object.assign(window, {
  MonoLabel, SectionHeader, JaneCTA, ArrowIcon,
  Nav, Footer, TrustBanner,
  ServicePageHero, ServiceCrossLink,
});
