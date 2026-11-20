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
              <TextLink href="psychotherapy.html">See what I offer</TextLink>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            {/* Hero image. Unlike the About teaser's photo this one is above the fold, so
                it loads eagerly and at high priority — fetchpriority is spelled lowercase
                because React 18 forwards it verbatim as a plain attribute. Capped and
                centred until the two-column split at lg: at full width the 4:5 crop eats
                a whole phone screen before any of the page shows. */}
            <div className="aspect-[4/5] w-full max-w-[200px] sm:max-w-[260px] mx-auto lg:max-w-none lg:mx-0 bg-sand-100 rounded-sm ring-soft relative overflow-hidden">
              <img
                src="assets/stone-cairn.jpg"
                srcSet="assets/stone-cairn@600.jpg 600w, assets/stone-cairn.jpg 1000w"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 260px, 200px"
                width={1000}
                height={1250}
                decoding="async"
                fetchpriority="high"
                alt="A cairn of smooth grey and turquoise stones balanced on a marble plinth inlaid with an Islamic geometric pattern"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  maskImage: "radial-gradient(ellipse 78% 78% at 50% 45%, black 55%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 78% 78% at 50% 45%, black 55%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 grain opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- About teaser ----------

// The About-teaser photo. Two art-directed crops of the same portrait: a tight
// editorial square beside the copy on desktop, a roomier one at thumbnail size on
// phones. Only the visible one is ever fetched — the hidden copy never intersects
// the viewport, so lazy-loading leaves it alone.
function AboutPhoto({ src, srcSet, sizes, size, className = "" }) {
  return (
    <div className={`aspect-square bg-sand-100 rounded-sm ring-soft relative overflow-hidden ${className}`}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        alt={PORTRAIT.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none"></div>
    </div>
  );
}

function AboutTeaser() {
  return (
    <section id="about" data-screen-label="Home — About teaser" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-16 items-center">
          <div className="hidden md:block md:col-span-5">
            <AboutPhoto {...PORTRAIT.tight} sizes="40vw" />
          </div>

          <div className="col-span-12 md:col-span-7">
            {/* Small and roomier on phones, tucked to the right of the section title so
                the copy flows around it instead of being pushed down a full-width photo. */}
            <AboutPhoto {...PORTRAIT.roomy} className="md:hidden float-right w-24 sm:w-32 ml-5 mb-4" />
            <SectionHeader
              index="01"
              kicker="About me"
              title="Hello, I'm Motahareh."
              lede="I am a psychotherapist, yoga teacher, and student of the Islamic psychospiritual tradition. I work with people who are functioning on the outside and depleted on the inside."
            />
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
      t: "Whole-person healing",
      d: "You are more than any one struggle or symptom. We make space for your thoughts, emotions, body, relationships, and inner life, understanding how each shapes the others.",
    },
    {
      n: "02",
      t: "Healing in relationship",
      d: "We are shaped in relationship, and often heal through relationship too. Together, we explore the patterns, attachments, and connections that influence how you relate to yourself and to the people around you.",
    },
    {
      n: "03",
      t: "Embodied healing",
      d: "Sometimes understanding something is not enough to change how it lives within us. We may work with the body, breath, emotions, and nervous system to help insight become something you can actually feel and live.",
    },
    {
      n: "04",
      t: "Spiritually & culturally responsive",
      d: "Your spirituality, culture, values, and ways of making meaning are welcome here. They can become part of our work in whatever way feels authentic and supportive to you.",
    },
  ];

  return (
    <section id="approach" data-screen-label="Home — Approach teaser" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="My approach"
          title="How we'll work together."
          lede="There is no single path to healing. Together, we'll explore your experience with curiosity and care, making room for all of you."
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
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
