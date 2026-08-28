// page-psychotherapy.jsx — dedicated psychotherapy service page

const { useState } = React;

function FocusAreas() {
  const areas = [
    {
      n: "A1",
      t: "Anxiety & OCD",
      d: "For the spiral, the loop, the reassurance that never quite lands. ERP-informed and parts-aware — we work with the anxiety, not against it.",
      sub: ["Generalized anxiety", "OCD & intrusive thoughts", "Health anxiety", "Panic"],
    },
    {
      n: "A2",
      t: "Trauma & Attachment",
      d: "Complex trauma, relational wounds, and the patterns set down before language. Slow, resourced, and titrated — never re-traumatizing the telling.",
      sub: ["Childhood trauma", "Relational ruptures", "PTSD & C-PTSD", "Attachment work"],
    },
    {
      n: "A3",
      t: "Muslim Mental Health",
      d: "Therapy that doesn't ask you to translate. Cultural and faith fluency woven into clinical work — not as accommodation, but as foundation.",
      sub: ["Faith & identity", "Cultural reckoning", "Family systems", "Migration & belonging"],
    },
    {
      n: "A4",
      t: "Psychospiritual Therapy",
      d: "When the work has both a clinical and a contemplative axis. The Islamic tradition is welcomed; the clinical rigour does not soften.",
      sub: ["Tazkiyah & self-work", "Spiritual struggle", "Prayer & nervous system", "Meaning-making"],
    },
    {
      n: "A5",
      t: "Grief & Transitions",
      d: "Loss, change, identity shifts — the in-between that doesn't yet have a name. Held with patience.",
      sub: ["Bereavement", "Divorce & separation", "Career & identity shifts", "Reproductive loss"],
    },
    {
      n: "A6",
      t: "Adjunct to medication",
      d: "Collaborative care alongside your prescriber. Therapy is one part of a wider system of support.",
      sub: ["GP / psychiatrist collab", "Medication adjustments", "Side-effect support", "Integration work"],
    },
  ];

  return (
    <section id="focus" data-screen-label="Psychotherapy — Focus Areas" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="What we work on"
          title="Six entry points."
          lede="Most clients arrive with one of these and discover the others underneath. The work is always tailored — these are starting frames, not boxes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 mt-16 ring-soft">
          {areas.map((a) => (
            <div key={a.n} className="bg-sand-50 p-8 lg:p-10 flex flex-col">
              <div className="flex items-baseline justify-between">
                <MonoLabel>{a.n}</MonoLabel>
                <span className="w-1.5 h-1.5 rounded-full bg-terra-500"></span>
              </div>
              <h3 className="font-display text-[30px] leading-[1.1] mt-8 text-ink">{a.t}</h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">{a.d}</p>
              <ul className="mt-7 pt-5 border-t border-ink/10 space-y-1.5">
                {a.sub.map((s) => (
                  <li key={s} className="text-[12px] text-ink-soft flex items-baseline gap-2">
                    <span className="w-1 h-1 rounded-full bg-terra-500/60 shrink-0"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section data-screen-label="Psychotherapy — How it works" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="The path"
          title="From first email to first session."
          lede="Booking is through JaneApp. The path is intentionally simple — most of the energy belongs in the work, not the logistics."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-ink/10 ring-soft">
          {[
            { n: "01", t: "Reach out", d: "Book a free 15-minute consult via JaneApp, or message me first if you'd like." },
            { n: "02", t: "Consult call", d: "We talk about what's bringing you in and whether I'm the right fit. No pressure either way." },
            { n: "03", t: "Intake", d: "JaneApp sends paperwork — history, consent, insurance details. About 20 minutes." },
            { n: "04", t: "First session", d: "We meet over JaneApp's encrypted video. The first session is mostly listening." },
          ].map((s) => (
            <div key={s.n} className="bg-sand-50 p-7 flex flex-col min-h-[220px]">
              <div className="flex items-baseline justify-between">
                <MonoLabel>{s.n}</MonoLabel>
                <span className="w-1 h-1 rounded-full bg-terra-500"></span>
              </div>
              <h4 className="font-display text-[26px] mt-auto pt-8 text-ink leading-tight">{s.t}</h4>
              <p className="mt-3 text-[13px] text-ink-soft leading-[1.55]">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <JaneCTA size="lg">Book your free 15-min consult</JaneCTA>
        </div>
      </div>
    </section>
  );
}

function Modalities() {
  return (
    <section data-screen-label="Psychotherapy — Modalities" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="03"
              kicker="Modalities & training"
              title="The toolbox."
              lede="No single modality holds every story. I draw on what serves the moment — never as a script, always with consent."
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {[
                ["Attachment-based", "The earliest relationships shaped the architecture. We work with what's still here."],
                ["Parts-informed (IFS-adjacent)", "The self is plural. We listen to the parts — the protector, the exile, the one who shows up to therapy."],
                ["Trauma-focused & somatic", "Tracking the nervous system in parallel with the narrative. Regulation before insight."],
                ["Cognitive & ERP-informed", "For anxiety and OCD: structured exposure work, gently and collaboratively."],
                ["Psychospiritual integration", "When meaning, prayer, or spiritual struggle are part of what you came in carrying."],
                ["Culturally-grounded practice", "Faith fluency and cultural literacy are foundational, not optional."],
              ].map(([k, v], i) => (
                <div key={k} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-2 mono-label">0{i + 1}</div>
                  <div className="col-span-10 md:col-span-4 font-display text-[22px] text-ink leading-tight">{k}</div>
                  <div className="col-span-12 md:col-span-6 text-[14px] text-ink-soft leading-[1.6]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeesInsurance() {
  return (
    <section id="fees" data-screen-label="Psychotherapy — Fees & Insurance" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="04"
          kicker="Fees & insurance"
          title="Transparent, in Canadian dollars."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 mt-16 ring-soft">
          {[
            { t: "Free consult", price: "$0", d: "15 min · video", flag: false },
            { t: "Standard session", price: "$175", d: "50 min · weekly or biweekly", flag: true },
            { t: "Extended session", price: "$240", d: "80 min · for deep work or couples-adjacent", flag: false },
          ].map((f) => (
            <div key={f.t} className={`p-8 lg:p-10 flex flex-col ${f.flag ? "bg-forest-900 text-sand-100" : "bg-sand-50"}`}>
              <MonoLabel className={f.flag ? "!text-terra-400" : ""}>{f.t}</MonoLabel>
              <div className={`font-display text-[64px] md:text-[88px] leading-none mt-6 ${f.flag ? "text-sand-50" : "text-ink"}`}>{f.price}</div>
              <div className={`mt-3 text-[14px] ${f.flag ? "text-sand-200/70" : "text-ink-soft"}`}>{f.d}</div>
              {f.flag && (
                <div className="mt-8 inline-flex items-center gap-2 mono-label !text-terra-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra-400"></span> Most popular
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6 p-8 border border-ink/15 rounded-sm bg-sand-50">
            <MonoLabel>Insurance — Ontario</MonoLabel>
            <h3 className="font-display text-[32px] mt-4 leading-tight text-ink">Most extended health plans cover it.</h3>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
              Look for <strong className="font-medium text-ink">Registered Psychotherapist (RP)</strong> in your benefits.
              I issue a receipt after each session that you submit to your insurer for reimbursement. I do not
              direct-bill — but the paperwork is simple.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Manulife", "Sun Life", "GreenShield", "Canada Life", "Blue Cross", "Equitable Life"].map((p) => (
                <span key={p} className="text-[11px] px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{p}</span>
              ))}
            </div>
            <div className="mt-4 text-[12px] text-ink-mute">Coverage varies by plan — please check with your provider.</div>
          </div>

          <div className="col-span-12 md:col-span-6 p-8 border border-ink/15 rounded-sm bg-sand-50">
            <MonoLabel>Sliding scale</MonoLabel>
            <h3 className="font-display text-[32px] mt-4 leading-tight text-ink">A small number of spots reserved.</h3>
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
              I hold a limited number of sliding-scale spots for clients without insurance coverage who would
              otherwise be unable to access care. Please ask — there is no shame in asking.
            </p>
            <div className="mt-6">
              <JaneCTA variant="ghost" href="mailto:hello@motahareh.ca">Inquire about sliding scale</JaneCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PsychFAQ() {
  const faqs = [
    { q: "I've never done therapy before — what happens in the first session?", a: "Mostly we talk. I ask about what brought you in, your history, what's working in your life and what isn't. I share how I work and we figure out together whether we should book a second. There's no homework, no protocol on day one." },
    { q: "Is virtual therapy as effective as in-person?", a: "The research is consistent: for most concerns, outcomes from virtual therapy are equivalent to in-person. Practically, it removes the commute, lets you be in your own space, and makes consistent weekly sessions much easier to sustain." },
    { q: "Do I need to be religious or Muslim to see you?", a: "No. I welcome clients of any background. For those who arrive with a spiritual or Islamic vocabulary, I am fluent in it. For those who don't, the work is the same — clinical, embodied, and grounded." },
    { q: "What if I cry the whole first session?", a: "That's allowed. Most people cry at some point. The session does not require composure." },
    { q: "How long does therapy usually take?", a: "It depends entirely on what you're working with and what you're hoping for. Some clients work with me for a few months on a specific concern; others for years through different chapters. We talk about this openly as we go." },
  ];

  return (
    <section id="faq" data-screen-label="Psychotherapy — FAQ" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeader index="05" kicker="Frequently asked" title="About therapy with me." />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6 px-1" open={i === 0}>
                  <summary className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                      <MonoLabel className="pt-1">0{i + 1}</MonoLabel>
                      <h4 className="font-display text-[22px] md:text-[26px] leading-[1.15] text-ink group-open:text-terra-600 transition-colors">{f.q}</h4>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center shrink-0 group-open:bg-ink group-open:text-sand-50 group-open:border-ink transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform group-open:rotate-45">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-4 ml-9 max-w-2xl text-[15px] leading-[1.65] text-ink-soft">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section data-screen-label="Psychotherapy — Closing CTA" className="bg-forest-900 text-sand-100 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none mix-blend-overlay"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <MonoLabel className="!text-terra-400">Ready when you are</MonoLabel>
            <h2 className="font-display text-[48px] md:text-[80px] leading-[0.98] mt-6 tracking-[-0.015em]">
              The hardest part is <em className="text-terra-400">the first message.</em>
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-[1.65] text-sand-200/85">
              You don't have to know what to say. A consult is fifteen minutes and costs nothing. We'll figure
              out together whether this is the right room for you.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <JaneCTA size="lg">Book via JaneApp</JaneCTA>
            <a href="mailto:hello@motahareh.ca" className="inline-flex items-center gap-2 text-[14px] text-sand-200/80 hover:text-sand-50">
              <span className="underline decoration-sand-200/30 underline-offset-4">Or send a message first</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PsychHero() {
  return (
    <section data-screen-label="Psychotherapy — Hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-sand-100"></div>
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle at 70% 20%, #c8784f 0, transparent 60%)"}}></div>
      <div className="absolute inset-0 grain opacity-50 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-[112px] pb-0 relative">
        <a href="index.html" className="inline-flex items-center gap-2 text-[12px] text-ink-mute hover:text-ink mono-label">
          <span>←</span> Back home
        </a>

        <div className="mt-8 flex items-center gap-4">
          <span className="font-display text-[120px] md:text-[200px] leading-none text-terra-500/[0.07] absolute right-6 lg:right-10 top-[80px] select-none pointer-events-none">01</span>
          <span className="w-2 h-2 rounded-full bg-terra-500"></span>
          <MonoLabel>Service 01 · Virtual Psychotherapy</MonoLabel>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-6 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[48px] leading-[1.0] md:text-[80px] md:leading-[0.96] tracking-[-0.02em] text-ink">
              A room where<br />
              the whole story<br />
              <em className="text-terra-600">is welcome.</em>
            </h1>

            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.6] text-ink-soft max-w-lg">
              One-on-one talk therapy, delivered securely online across Ontario. Trauma-informed, attachment-based, and culturally fluent — designed to hold the clinical and the contemplative in the same room.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <JaneCTA size="lg">Book a free 15-min consult</JaneCTA>
              <a href="#focus" className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-terra-600 transition-colors group">
                <span className="underline decoration-ink/30 underline-offset-4 group-hover:decoration-terra-500">What we work on</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="aspect-[3/4] w-full placeholder-img rounded-sm ring-soft relative overflow-hidden">
              <div className="absolute inset-0 grain opacity-20"></div>
              <div className="absolute top-4 right-4 mono-label bg-sand-50 px-2 py-1">01 / Psychotherapy</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-sand-200/90 to-transparent">
                <div className="flex items-start gap-3">
                  <span className="font-display italic text-terra-600 text-3xl leading-none">"</span>
                  <p className="text-[15px] text-ink leading-snug font-display italic">
                    The hardest part is never the feeling itself — it's that no one was there to help you make sense of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ink/15 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
          {[
            ["Format",    "Virtual · Encrypted video"],
            ["Location",  "Ontario-wide"],
            ["Sessions",  "50 min  ·  80 min extended"],
            ["Insurance", "Covered by most plans"],
          ].map(([k, v]) => (
            <div key={k} className="bg-sand-100 py-6 px-1 md:px-4">
              <MonoLabel>{k}</MonoLabel>
              <div className="mt-2 font-display text-[18px] md:text-[20px] text-ink leading-tight">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav current="psychotherapy" />
      <main>
        <PsychHero />
        <FocusAreas />
        <HowItWorks />
        <Modalities />
        <FeesInsurance />
        <PsychFAQ />
        <ClosingCTA />
        <ServiceCrossLink exclude="psychotherapy" />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
