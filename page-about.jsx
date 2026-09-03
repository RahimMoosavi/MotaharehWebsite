// page-about.jsx — who I am and how I work.

// The hero portrait — the same photo the home page carries, art-directed per
// breakpoint. From lg up the tight crop fills the column as a 4:5 plate beside the
// headline. Below that the column is the full page width, where a full-bleed face
// would swallow the hero, so it steps down to a contained square of the roomier
// crop — capped at 240px, the width that source stays sharp to on a 2x screen.
// <picture> does the switching, so the browser fetches exactly one of the two.
function HeroPortrait() {
  return (
    <div className="w-44 sm:w-52 md:w-60 lg:w-full aspect-square lg:aspect-[4/5] bg-sand-100 rounded-sm ring-soft relative overflow-hidden">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={PORTRAIT.tight.srcSet}
          sizes="40vw"
        />
        <img
          src={PORTRAIT.roomy.src}
          width={PORTRAIT.roomy.size}
          height={PORTRAIT.roomy.size}
          decoding="async"
          alt={PORTRAIT.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 grain opacity-20 pointer-events-none"></div>
    </div>
  );
}

function AboutHero() {
  return (
    <section data-screen-label="About — Hero" className="relative pt-[112px] pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-14 items-end">
          <div className="col-span-12 lg:col-span-7">
            <MonoLabel>About</MonoLabel>
            <h1 className="font-display text-[38px] leading-[1.05] sm:text-[48px] sm:leading-[1.02] md:text-[80px] md:leading-[0.98] tracking-[-0.02em] text-ink mt-5">
              Motahareh,{" "}
              <br className="hidden md:block" />
              <em className="text-terra-600">psychotherapist.</em>
            </h1>
            <p className="mt-7 text-[18px] md:text-[20px] leading-[1.55] text-ink-soft max-w-xl">
              Integrative psychotherapy, embodied practice, and spiritually grounded care —
              offered virtually.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <BookCTA size="lg">Book a free consult</BookCTA>
              <TextLink href="#approach">How I work</TextLink>
            </div>
          </div>

          {/* On phones the portrait opens the hero, above the name — the whole hero
              still lands in one screen. From lg it returns to the right column. */}
          <div className="col-span-12 lg:col-span-5 order-first lg:order-none">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Story ----------

function Story() {
  return (
    <section data-screen-label="About — Story" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader index="01" kicker="My story" title="How I got here." />
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-6 text-[16px] md:text-[17px] leading-[1.75] text-ink-soft">
            <p>
              Most people who find me are not in crisis. They are managing — holding a job, a household,
              a degree, a family — and quietly running on empty. They can describe the problem clearly and
              still feel no closer to relief. Insight alone has stopped being enough.
            </p>
            <p>
              That gap is what drew me to this work. Talking helps, but the body keeps its own record, and for
              many people faith is not a side topic — it is the frame around everything else. So I trained in
              three directions at once: psychotherapy, trauma-informed yoga and breathwork, and the Islamic
              psychospiritual tradition. In practice they are not three separate services. They are one
              conversation held from three angles.
            </p>
            <p>
              What I offer is a slower kind of attention. We look at the emotional patterns, the relationships,
              the nervous system, and — if you want it — the spiritual questions underneath. From there we build
              something practical you can carry into an ordinary week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Credentials ----------

function Credentials() {
  const items = [
    ["Registration", "Registered Psychotherapist (Qualifying), CRPO — Ontario"],
    ["Education", "[ Degree — program, institution, year ]"],
    ["Clinical training", "[ Key clinical trainings — modality, provider, year ]"],
    ["Yoga", "[ Yoga teacher training — hours, school, year ] · trauma-informed yoga training"],
    ["Psychospiritual", "[ Islamic psychospiritual study — teacher or program ]"],
    ["Languages", "[ Languages you practise in ]"],
  ];

  return (
    <section data-screen-label="About — Credentials" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="Credentials & training"
          title="Qualifications."
          lede="I practise under the College of Registered Psychotherapists of Ontario and keep training in the places where my clients actually live: the body, the family, and the faith."
        />

        <div className="mt-14 border-t border-ink/15">
          {items.map(([k, v]) => (
            <div key={k} className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline border-b border-ink/15 py-6">
              <div className="col-span-12 md:col-span-3">
                <MonoLabel>{k}</MonoLabel>
              </div>
              <div className="col-span-12 md:col-span-9 text-[16px] leading-[1.6] text-ink">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Approach ----------

function Approach() {
  const principles = [
    {
      n: "01",
      t: "Whole person",
      d: "Mind, body, spirit, and relationships are not separate files. In any given session we might follow a memory, a knot in the chest, a strained relationship, or a question about meaning — usually more than one.",
    },
    {
      n: "02",
      t: "Regulation before insight",
      d: "Understanding rarely lands in a body that does not feel safe. We build steadiness first — breath, grounding, pacing — so that the harder material has somewhere to land.",
    },
    {
      n: "03",
      t: "Your pace, your consent",
      d: "Nothing is pushed. You choose what we open, how far we go, and when we stop. In embodied work that means invitational language and no physical adjustments, ever.",
    },
    {
      n: "04",
      t: "Faith made welcome",
      d: "Bring your faith into the room or leave it at the door. For clients who want it, we may work with intention, dhikr, duʿā, gratitude, and trust — offered, never assumed, and never a substitute for clinical care.",
    },
  ];

  const session = [
    ["Free consult", "15 minutes, video. You describe what brought you here, I describe how I work, and we decide together whether to continue."],
    ["First sessions", "Mostly listening. Your history, what is working and what is not, and what you want to be different. No protocol on day one."],
    ["Ongoing work", "A rhythm of reflection, regulation, and practice — with tools you take home between sessions and adjust as your life changes."],
  ];

  return (
    <section id="approach" data-screen-label="About — Approach" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="My approach"
          title="Healing you can actually live in."
          lede="Not a method applied to you, but a practice we build together — one that keeps working after the session ends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 mt-14 ring-soft rounded-sm overflow-hidden">
          {principles.map((p) => (
            <div key={p.n} className="bg-sand-50 p-8 lg:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[40px] leading-none text-ink/15">{p.n}</span>
                <h3 className="font-display text-[26px] leading-tight text-ink">{p.t}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-baseline gap-4">
            <MonoLabel>What it looks like</MonoLabel>
            <span className="h-px flex-1 bg-ink/15"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-10">
            {session.map(([t, d], i) => (
              <div key={t}>
                <span className="font-display text-[44px] leading-none text-terra-500/40">0{i + 1}</span>
                <h3 className="font-display text-[24px] text-ink mt-4 leading-tight">{t}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Who I work with ----------

function WhoIWorkWith() {
  const tags = [
    "Anxiety & overwhelm",
    "Burnout & depletion",
    "Trauma & PTSD",
    "Grief & loss",
    "Identity & belonging",
    "Life transitions",
    "Relationship patterns",
    "Faith & spiritual struggle",
    "Caregiver fatigue",
    "Perfectionism",
    "Chronic stress",
    "Students & young professionals",
  ];

  return (
    <section data-screen-label="About — Who I work with" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="04"
              kicker="Who I work with"
              title="You do not have to be in crisis to come."
              lede="Adults — students, professionals, parents, and caregivers — who want more than coping strategies."
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-[14px] px-4 py-2 bg-sand-50 border border-ink/15 rounded-full text-ink-soft">{t}</span>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-[1.7] text-ink-soft max-w-xl">
              If what you are carrying is not on this list, that is not a reason to stay away. The consult exists
              exactly for that conversation — and if I am not the right fit, I will point you toward someone who is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- App ----------

function App() {
  return (
    <>
      <Nav current="about" />
      <main>
        <AboutHero />
        <TrustBanner />
        <Story />
        <Credentials />
        <Approach />
        <WhoIWorkWith />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
