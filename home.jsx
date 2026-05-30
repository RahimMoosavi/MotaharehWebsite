// home.jsx — simplified landing page.
// Just: hero, brief services overview (cards link out), writings, past events.

const { useState } = React;

function Hero() {
  return (
    <section id="top" data-screen-label="Home — Hero" className="relative pt-[112px] pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-terra-500 animate-pulse"></span>
              <MonoLabel>Now accepting Ontario clients — virtual</MonoLabel>
            </div>

            <h1 className="font-display text-[56px] leading-[0.98] md:text-[112px] md:leading-[0.94] tracking-[-0.02em] text-ink mt-8">
              The body remembers
              <br />
              what the mind <em className="text-terra-600">cannot say.</em>
            </h1>

            <p className="mt-8 text-[18px] md:text-[20px] leading-[1.55] text-ink-soft max-w-2xl">
              An integrated practice of psychotherapy, yoga, and Islamic psychospiritual care —
              delivered virtually across Ontario.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <JaneCTA size="lg">Book via JaneApp</JaneCTA>
              <a href="#services" className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-terra-600 transition-colors group">
                <span className="underline decoration-ink/30 underline-offset-4 group-hover:decoration-terra-500">See the services</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 relative">
            <div className="aspect-[3/4] w-full placeholder-img rounded-sm ring-soft relative overflow-hidden">
              <div className="absolute inset-0 flex items-end p-5">
                <div className="text-[10px] font-mono text-ink/50">[ portrait — practitioner, soft natural light, sandstone backdrop ]</div>
              </div>
              <div className="absolute top-4 right-4 mono-label bg-sand-50 px-2 py-1">01 / Portrait</div>
            </div>
            <div className="mt-4 flex items-start gap-3 text-[13px] text-ink-soft leading-snug">
              <span className="font-display italic text-terra-600 text-2xl leading-none">"</span>
              <p>Healing is not the absence of difficulty — it is the return of capacity. To feel, to choose, to be present.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Brief services overview ----------

function ServicesOverview() {
  const items = [
    {
      n: "01",
      title: "Virtual Psychotherapy",
      copy: "One-on-one talk therapy, delivered securely online across Ontario. Trauma-informed, attachment-based, culturally fluent.",
      href: "psychotherapy.html",
      meta: "Ontario · Insurance eligible",
      bg: "bg-sand-100",
    },
    {
      n: "02",
      title: "Yoga & Somatic Work",
      copy: "Private and small-group practice for the body that has held too much. Trauma-informed yoga, breathwork, and embodiment.",
      href: "yoga.html",
      meta: "Private · Series · Drop-in",
      bg: "bg-sand-200/60",
    },
    {
      n: "03",
      title: "Return to Roots",
      copy: "A 5-week holistic healing package — psychotherapy, somatic practice, breathwork, and Islamic spirituality integrated into one container, co-created around you.",
      href: "signature.html",
      meta: "Signature · 5 weeks · $750",
      bg: "bg-forest-900 text-sand-100",
      flagship: true,
    },
  ];

  return (
    <section id="services" data-screen-label="Home — Services overview" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="The practice"
          title={<>Three doors.<br />One integrated practice.</>}
          lede="Each service stands on its own. Click any card for the full picture."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it) => (
            <a
              key={it.n}
              href={it.href}
              className={`group block ${it.bg} p-8 lg:p-10 rounded-sm ring-soft relative overflow-hidden transition-all hover:translate-y-[-2px] flex flex-col min-h-[360px]`}
            >
              {it.flagship && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
                     style={{backgroundImage: "radial-gradient(circle at 30% 20%, #c8784f 0, transparent 50%), radial-gradient(circle at 80% 80%, #9caa8e 0, transparent 50%)"}}></div>
              )}

              <div className="relative flex items-baseline justify-between">
                <span className={`font-display text-[64px] leading-none ${it.flagship ? "text-terra-400" : "text-ink/15"}`}>{it.n}</span>
                <MonoLabel className={it.flagship ? "!text-sand-200/60" : ""}>{it.meta}</MonoLabel>
              </div>

              <div className="relative mt-auto pt-12">
                <h3 className={`font-display text-[32px] md:text-[36px] leading-[1.05] ${it.flagship ? "text-sand-50" : "text-ink"}`}>
                  {it.title}
                </h3>
                <p className={`mt-4 text-[15px] leading-[1.6] ${it.flagship ? "text-sand-200/85" : "text-ink-soft"}`}>
                  {it.copy}
                </p>
                <div className={`mt-6 inline-flex items-center gap-2 text-[14px] font-medium ${
                  it.flagship ? "text-sand-50" : "text-ink"
                } group-hover:text-terra-${it.flagship ? "400" : "600"} transition-colors`}>
                  <span className="underline decoration-current/30 underline-offset-4">Learn more</span>
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Writings ----------

function Writing() {
  const posts = [
    { t: "Nervous System",       d: "On the polyvagal map for people who hate maps",       read: "8 min",  date: "May 2026", img: "warm" },
    { t: "Islamic Spirituality", d: "What dhikr is doing to your physiology",              read: "12 min", date: "Apr 2026", img: "deep" },
    { t: "Trauma",               d: "Why insight isn't enough — and what is",              read: "6 min",  date: "Apr 2026", img: "mid"  },
    { t: "Somatic Practices",    d: "Three breath patterns for difficult days",            read: "5 min",  date: "Mar 2026", img: "warm" },
    { t: "Islamic Spirituality", d: "The body in salah: a quiet curriculum",               read: "9 min",  date: "Mar 2026", img: "deep" },
    { t: "Nervous System",       d: "Why your therapist keeps mentioning your shoulders",  read: "7 min",  date: "Feb 2026", img: "mid"  },
  ];
  const imgClasses = { warm: "bg-terra-400/20", deep: "bg-forest-800/15", mid: "bg-sage-400/30" };

  return (
    <section id="writing" data-screen-label="Writing" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index="02"
            kicker="Writing"
            title="From the practice."
            lede="Essays and short reads on the nervous system, trauma, somatics, and Islamic psychospiritual life."
          />
          <a href="#" className="inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-terra-600 group">
            <span className="underline decoration-ink/20 underline-offset-4">All writing</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {posts.map((p, i) => (
            <a href="#" key={i} className="group block">
              <div className={`aspect-[4/3] rounded-sm ring-soft relative overflow-hidden ${imgClasses[p.img]}`}>
                <div className="absolute inset-0 grain opacity-30"></div>
                <div className="absolute bottom-3 left-3 mono-label bg-sand-50 px-2 py-1">{p.t}</div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <MonoLabel>{p.date}</MonoLabel>
                <MonoLabel>{p.read}</MonoLabel>
              </div>
              <h3 className="mt-3 font-display text-[24px] leading-[1.15] text-ink group-hover:text-terra-600 transition-colors">
                {p.d}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Past events ----------

function Events() {
  const events = [
    {
      date: "Nov 2025",
      kind: "Workshop",
      title: "Breath, Body, and the Sacred",
      where: "Noor Centre · Toronto",
      copy: "A half-day practical workshop bridging somatic breathwork and Islamic contemplative practice.",
      status: "Past",
    },
    {
      date: "Sep 2025",
      kind: "Retreat",
      title: "Sacred Regulation — Autumn Cohort",
      where: "Online · 12 weeks",
      copy: "The inaugural cohort of the Signature Program. Fifteen participants across three continents.",
      status: "Past",
    },
    {
      date: "Jun 2025",
      kind: "Talk",
      title: "The Nervous System & The Soul",
      where: "ICNA Convention · Hartford",
      copy: "Keynote on integrating polyvagal theory with classical Islamic psychology for a clinical audience.",
      status: "Past",
    },
    {
      date: "Mar 2025",
      kind: "Panel",
      title: "Mental Health in the Muslim Community",
      where: "MSA McMaster · Hamilton",
      copy: "Panel discussion on stigma, access, and culturally fluent care for second-generation Muslim youth.",
      status: "Past",
    },
  ];

  return (
    <section id="events" data-screen-label="Past Events" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="Past events"
          title="Talks, workshops & retreats."
          lede="Where I've taught, presented, and gathered with others over the past seasons."
        />

        <div className="mt-16 border-t border-ink/15">
          {events.map((e, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline border-b border-ink/15 py-8 group hover:bg-sand-100/50 transition-colors px-2 -mx-2 rounded-sm">
              <div className="col-span-6 md:col-span-2">
                <MonoLabel>{e.date}</MonoLabel>
                <div className="mt-2 inline-block text-[11px] mono-label !text-terra-600 border border-terra-500/30 px-2 py-0.5 rounded-full">{e.kind}</div>
              </div>
              <div className="col-span-12 md:col-span-6 order-3 md:order-none">
                <h3 className="font-display text-[26px] md:text-[30px] leading-[1.15] text-ink">{e.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft max-w-xl">{e.copy}</p>
              </div>
              <div className="col-span-6 md:col-span-3 text-right md:text-left">
                <div className="font-display text-[18px] text-ink">{e.where}</div>
                <MonoLabel className="mt-1 block">{e.status}</MonoLabel>
              </div>
              <div className="hidden md:flex col-span-1 justify-end items-baseline">
                <span className="w-6 h-px bg-ink/20 group-hover:bg-terra-500 group-hover:w-10 transition-all"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <a href="mailto:hello@motahareh.ca" className="inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-terra-600 group">
            <span className="underline decoration-ink/20 underline-offset-4">Invite me to speak or teach</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- App ----------

function App() {
  return (
    <>
      <Nav current="home" />
      <main>
        <Hero />
        <ServicesOverview />
        <Writing />
        <Events />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
