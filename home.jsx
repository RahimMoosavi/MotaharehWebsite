// home.jsx — landing page.
// Hero → about teaser → approach teaser → teaser of every page → book.

function Hero() {
  return (
    <section id="top" data-screen-label="Home — Hero" className="relative pt-[112px] pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-terra-500 animate-pulse"></span>
              <MonoLabel>Now accepting new clients — virtual</MonoLabel>
            </div>

            <h1 className="font-display text-[40px] leading-[1.05] sm:text-[52px] sm:leading-[1.0] md:text-[92px] md:leading-[0.96] tracking-[-0.02em] text-ink mt-7">
              Bring your whole self{" "}
              <br className="hidden md:block" />
              to <em className="text-terra-600">healing.</em>
            </h1>

            <p className="mt-7 text-[18px] md:text-[20px] leading-[1.55] text-ink-soft max-w-xl">
              A space to reconnect mind, body, spirit, and relationships — through integrative
              psychotherapy, embodied practice, and spiritually grounded care.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <BookCTA size="lg">Book a free consult</BookCTA>
              <TextLink href="#pages">See what I offer</TextLink>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] w-full placeholder-img rounded-sm ring-soft relative overflow-hidden">
              <div className="absolute inset-0 flex items-end p-5">
                <div className="text-[10px] font-mono text-ink/50">[ portrait — practitioner, soft natural light ]</div>
              </div>
              <div className="absolute top-4 right-4 mono-label bg-sand-50 px-2 py-1">Portrait</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- About teaser ----------

function AboutTeaser() {
  return (
    <section id="about" data-screen-label="Home — About teaser" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/3] md:aspect-square placeholder-img rounded-sm ring-soft relative overflow-hidden">
              <div className="absolute inset-0 grain opacity-30"></div>
              <div className="absolute bottom-4 left-4 mono-label bg-sand-50 px-2 py-1">In practice</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <SectionHeader
              index="01"
              kicker="About me"
              title="Hello, I'm Motahareh."
              lede="I am a psychotherapist, yoga teacher, and student of the Islamic psychospiritual tradition. I work with people who are functioning on the outside and depleted on the inside."
            />
            <p className="mt-5 text-[16px] leading-[1.7] text-ink-soft max-w-2xl">
              My work sits where three things meet: what the mind understands, what the body carries,
              and what the soul is asking for. Sessions are slow, collaborative, and paced by you —
              never a protocol applied to your life from the outside.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Registered Psychotherapist (Qualifying)",
                "CRPO registered",
                "Trauma-informed yoga",
                "Islamic psychospiritual care",
              ].map((t) => (
                <span key={t} className="text-[12px] px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{t}</span>
              ))}
            </div>

            <div className="mt-8">
              <TextLink href="about.html">More about me</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Approach teaser ----------

function ApproachTeaser() {
  const pillars = [
    {
      n: "01",
      t: "Whole person",
      d: "Mind, body, spirit, and relationships are not separate files. We work with all of them, in whatever order your life is asking for.",
    },
    {
      n: "02",
      t: "Regulation before insight",
      d: "Understanding rarely lands in a body that does not feel safe. We build steadiness first, then go where the story leads.",
    },
    {
      n: "03",
      t: "Your pace, your consent",
      d: "Nothing is pushed. You choose what we open, how far we go, and when we stop. Agency is part of the work.",
    },
    {
      n: "04",
      t: "Faith made welcome",
      d: "Bring your faith into the room, or leave it at the door. Spiritual language is offered when you want it — never assumed.",
    },
  ];

  return (
    <section id="approach" data-screen-label="Home — Approach teaser" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="My approach"
          title="Healing you can actually live in."
          lede="Not a method applied to you, but a practice we build together — one that keeps working after the session ends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 mt-14 ring-soft rounded-sm overflow-hidden">
          {pillars.map((p) => (
            <div key={p.n} className="bg-sand-50 p-8 lg:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[40px] leading-none text-ink/15">{p.n}</span>
                <h3 className="font-display text-[26px] leading-tight text-ink">{p.t}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <TextLink href="about.html#approach">The full approach</TextLink>
        </div>
      </div>
    </section>
  );
}

// ---------- Teaser of every page ----------

function PagesTeaser() {
  const cards = [
    {
      n: "01",
      title: "Psychotherapy",
      copy: "One-on-one therapy, fully virtual. Trauma-informed, attachment-based, culturally fluent.",
      meta: "50 min · $175 · Insurance eligible",
      href: "psychotherapy.html",
    },
    {
      n: "02",
      title: "The Return",
      copy: "A 6-week mind–body–spirit integration program: reflective psychotherapy, embodied regulation, spiritual grounding, and a toolkit built around your life.",
      meta: "Signature · 6 weeks",
      href: "the-return.html",
      flagship: true,
    },
    {
      n: "03",
      title: "About & approach",
      copy: "Who I am, how I trained, and what actually happens in a session with me.",
      meta: "Background · Credentials",
      href: "about.html",
      wide: true,
    },
  ];

  return (
    <section id="pages" data-screen-label="Home — Pages teaser" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="Explore"
          title={<>Two ways in. <br className="hidden md:block" />One integrated practice.</>}
          lede="Each one stands on its own. Open whichever is closest to where you are right now."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c) => (
            <a
              key={c.n}
              href={c.href}
              className={`group flex flex-col p-8 lg:p-10 rounded-sm ring-soft relative overflow-hidden transition-all hover:translate-y-[-2px] ${
                c.wide ? "md:col-span-2 min-h-[220px]" : "min-h-[300px]"
              } ${c.flagship ? "bg-forest-900 text-sand-100" : "bg-sand-50 hover:bg-sand-100"}`}
            >
              {c.flagship && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.07]"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #c8784f 0, transparent 50%), radial-gradient(circle at 80% 80%, #9caa8e 0, transparent 50%)" }}
                ></div>
              )}

              <div className="relative flex items-baseline justify-between">
                <span className={`font-display text-[52px] leading-none ${c.flagship ? "text-terra-400" : "text-ink/15"}`}>{c.n}</span>
                <MonoLabel className={c.flagship ? "!text-sand-200/60" : ""}>{c.meta}</MonoLabel>
              </div>

              <div className="relative mt-auto pt-10">
                <h3 className={`font-display text-[28px] sm:text-[32px] md:text-[38px] leading-[1.05] ${c.flagship ? "text-sand-50" : "text-ink"}`}>
                  {c.title}
                </h3>
                <p className={`mt-4 text-[15px] leading-[1.6] ${c.flagship ? "text-sand-200/85" : "text-ink-soft"}`}>{c.copy}</p>
                <div className={`mt-6 inline-flex items-center gap-2 text-[14px] font-medium ${c.flagship ? "text-sand-50" : "text-ink"}`}>
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

// ---------- App ----------

function App() {
  return (
    <>
      <Nav current="home" />
      <main>
        <Hero />
        <TrustBanner />
        <AboutTeaser />
        <ApproachTeaser />
        <PagesTeaser />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
