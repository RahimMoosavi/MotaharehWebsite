// page-psychotherapy.jsx — the core therapy service: individual, couples, and family.

function PsychHero() {
  return (
    <section data-screen-label="Psychotherapy — Hero" className="relative pt-[112px] pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-14 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-terra-500"></span>
              <MonoLabel>Virtual · Insurance eligible in Ontario</MonoLabel>
            </div>
            <h1 className="font-display text-[38px] leading-[1.05] sm:text-[48px] sm:leading-[1.02] md:text-[80px] md:leading-[0.98] tracking-[-0.02em] text-ink mt-6">
              Psychotherapy,{" "}
              <br className="hidden md:block" />
              <em className="text-terra-600">one hour at a time.</em>
            </h1>
            <p className="mt-7 text-[18px] md:text-[20px] leading-[1.55] text-ink-soft max-w-xl">
              Individual therapy for adults and teens, couples therapy, and family therapy —
              trauma-informed, attachment-based, and culturally fluent. Delivered securely by
              video, from wherever you actually are.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <BookCTA size="lg">Book a free consult</BookCTA>
              <TextLink href="#fees">Fees & insurance</TextLink>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] placeholder-img rounded-sm ring-soft relative overflow-hidden">
              <div className="absolute inset-0 grain opacity-30"></div>
              <div className="absolute top-4 right-4 mono-label bg-sand-50 px-2 py-1">Therapy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- What we work on ----------

function FocusAreas() {
  const areas = [
    ["Anxiety & overwhelm", "Racing thoughts, dread, and the constant low hum that never quite switches off."],
    ["Trauma & its aftermath", "Single events and the long, quiet kind. Paced carefully, never re-told for its own sake."],
    ["Burnout & depletion", "Functioning outwardly, empty inwardly. Common in caregivers, students, and high performers."],
    ["Grief & loss", "People, places, futures, and versions of yourself that did not get to happen."],
    ["Identity & belonging", "Culture, faith, family expectation, and the space between the worlds you move through."],
    ["Relationship patterns", "The ones you keep repeating, and where in your history they were learned."],
  ];

  return (
    <section id="focus" data-screen-label="Psychotherapy — Focus areas" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="What we work on"
          title="What people bring."
          lede="You do not need a diagnosis or a tidy explanation to start. Most people arrive with a feeling and we find the shape of it together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 mt-14 ring-soft rounded-sm overflow-hidden">
          {areas.map(([t, d], i) => (
            <div key={t} className="bg-sand-50 p-8">
              <MonoLabel>0{i + 1}</MonoLabel>
              <h3 className="font-display text-[24px] leading-tight text-ink mt-4">{t}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How it works ----------

function HowItWorks() {
  const steps = [
    ["Free consult", "15 minutes by video. What brought you here, how I work, and whether we are a fit. No obligation either way."],
    ["First sessions", "Mostly listening — your history, what is working, what is not. We agree on what we are actually aiming at."],
    ["Ongoing rhythm", "At your own pace, 50 minutes. Reflection, regulation, and practices you carry with you between sessions."],
  ];

  const facts = [
    ["Format", "Secure video"],
    ["Length", "50 minutes"],
    ["Cadence", "At your own pace"],
    ["Booking", "Online via MePro"],
  ];

  return (
    <section data-screen-label="Psychotherapy — How it works" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader index="02" kicker="How it works" title="Three steps, no surprises." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-14">
          {steps.map(([t, d], i) => (
            <div key={t}>
              <span className="font-display text-[52px] leading-none text-terra-500/40">0{i + 1}</span>
              <h3 className="font-display text-[26px] text-ink mt-4 leading-tight">{t}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 ring-soft rounded-sm overflow-hidden">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-sand-50 p-6">
              <MonoLabel>{k}</MonoLabel>
              <div className="mt-2 font-display text-[20px] text-ink leading-tight">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Modalities ----------

function Modalities() {
  const items = [
    ["Attachment-based", "The earliest relationships shaped the architecture. We work with what is still standing."],
    ["Parts-informed", "The self is plural. We listen to the protector, the exile, and the one who booked the session."],
    ["Trauma-focused & somatic", "Tracking the nervous system alongside the narrative. Regulation before insight."],
    ["Relational", "We work with what happens between people — couples, families, and the patterns you keep repeating with each other."],
    ["Psychospiritual integration", "When meaning, prayer, or spiritual struggle are part of what you came in carrying."],
    ["Culturally grounded", "Faith fluency and cultural literacy are foundational here, not an add-on."],
  ];

  return (
    <section data-screen-label="Psychotherapy — Modalities" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="03"
              kicker="Modalities"
              title="The toolbox."
              lede="No single modality holds every story. I draw on what serves the moment — never as a script, always with your consent."
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {items.map(([k, v]) => (
                <div key={k} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-12 md:col-span-5 font-display text-[22px] text-ink leading-tight">{k}</div>
                  <div className="col-span-12 md:col-span-7 text-[14px] text-ink-soft leading-[1.6]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Fees & insurance ----------

function FeesInsurance() {
  const tiers = [
    { t: "Free consult", price: "$0", d: "15 minutes · video", flag: false },
    { t: "Individual session", price: "$175", d: "50 minutes · at your own pace", flag: true },
    { t: "Couples & family session", price: "$200", d: "60 minutes · at your own pace", flag: true },
  ];

  return (
    <section id="fees" data-screen-label="Psychotherapy — Fees & insurance" className="py-24 md:py-28 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="04"
          kicker="Fees & insurance"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 mt-14 ring-soft rounded-sm overflow-hidden">
          {tiers.map((f) => (
            <div key={f.t} className={`p-8 lg:p-10 ${f.flag ? "bg-forest-900 text-sand-100" : "bg-sand-50"}`}>
              <MonoLabel className={f.flag ? "!text-terra-400" : ""}>{f.t}</MonoLabel>
              <div className={`font-display text-[64px] md:text-[80px] leading-none mt-6 ${f.flag ? "text-sand-50" : "text-ink"}`}>{f.price}</div>
              <div className={`mt-3 text-[14px] ${f.flag ? "text-sand-200/70" : "text-ink-soft"}`}>{f.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8 items-start">
          <div className="col-span-12 md:col-span-6 p-8 border border-ink/15 rounded-sm bg-sand-50">
            <MonoLabel>Insurance — Ontario</MonoLabel>
            <h3 className="font-display text-[28px] mt-4 leading-tight text-ink">Many extended health plans cover it.</h3>
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-soft">
              Look for <strong className="font-medium text-ink">Registered Psychotherapist (RP)</strong> in your
              benefits. I issue a receipt after each session that you submit to your insurer. I do not direct-bill,
              but the paperwork is simple.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Manulife", "Sun Life", "GreenShield", "Canada Life", "Blue Cross", "Equitable Life"].map((p) => (
                <span key={p} className="text-[11px] px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{p}</span>
              ))}
            </div>
            <div className="mt-4 text-[12px] text-ink-mute">Coverage varies by plan — please confirm with your provider.</div>
          </div>

          <div className="col-span-12 md:col-span-6 p-8 border border-ink/15 rounded-sm bg-sand-50">
            <MonoLabel>Sliding scale</MonoLabel>
            <h3 className="font-display text-[28px] mt-4 leading-tight text-ink">A few spots are held back.</h3>
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-soft">
              I keep a small number of reduced-fee spots for people without coverage who would otherwise
              not be able to access care. Please ask — there is no shame in asking.
            </p>
            <div className="mt-6">
              <BookCTA variant="ghost" href={`mailto:${CONTACT_EMAIL}`}>Ask about sliding scale</BookCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------

function PsychFAQ() {
  const faqs = [
    {
      q: "I have never done therapy before. What happens in the first session?",
      a: "Mostly we talk. I ask what brought you in, a little about your history, what is working in your life and what is not. I explain how I work, and we decide together whether to book a second. No homework, no protocol on day one.",
    },
    {
      q: "Is virtual therapy as effective as in person?",
      a: "For most concerns the research finds outcomes comparable to in-person work. Practically it removes the commute, lets you be in your own space, and makes a consistent rhythm far easier to sustain at your own pace.",
    },
    {
      q: "Do I have to be religious to work with you?",
      a: "Not at all. Faith is available in the room if you want it and entirely absent if you do not. Many clients never raise it, and that changes nothing about the quality of the work.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Please give at least 24 hours notice to reschedule or cancel without charge. Late cancellations and missed sessions are billed at the full fee, with room for genuine emergencies.",
    },
  ];

  return (
    <section id="faq" data-screen-label="Psychotherapy — FAQ" className="py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader index="05" kicker="Questions" title="Before you book." />

        <div className="mt-12 max-w-3xl border-t border-ink/15">
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-ink/15 group">
              <summary className="py-6 flex items-baseline justify-between gap-6">
                <span className="font-display text-[20px] md:text-[26px] leading-snug text-ink">{f.q}</span>
                <span className="mono-label text-ink-mute shrink-0 mt-1 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-6 text-[15px] leading-[1.7] text-ink-soft max-w-2xl">{f.a}</p>
            </details>
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
      <Nav current="psychotherapy" />
      <main>
        <PsychHero />
        <TrustBanner />
        <FocusAreas />
        <HowItWorks />
        <Modalities />
        <FeesInsurance />
        <PsychFAQ />
        <ServiceCrossLink exclude="psychotherapy" />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
