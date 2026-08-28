// page-yoga.jsx — dedicated yoga & somatic page

const { useState } = React;

function YogaOfferings() {
  const items = [
    {
      n: "B1",
      t: "Private Yoga",
      d: "One-on-one practice designed around your body, your nervous system, and the season of life you're in.",
      bullets: ["Personalized sequencing", "Bring questions, not athleticism", "Virtual or in-person*", "60 / 75 min"],
      img: "sage",
    },
    {
      n: "B2",
      t: "Trauma-Informed Yoga",
      d: "TCTSY-influenced practice. Invitational language, agency at every step. The room never tells your body what to do.",
      bullets: ["Choice-based cueing", "No physical adjustments", "Predictable structure", "Slow & resourced"],
      img: "warm",
    },
    {
      n: "B3",
      t: "Breathwork",
      d: "Pranayama and clinical breath protocols, calibrated to your nervous system. Never coercive, never theatrical.",
      bullets: ["Down-regulation", "Up-regulation", "Sleep & anxiety", "Daily anchors"],
      img: "mid",
    },
    {
      n: "B4",
      t: "Embodiment Practices",
      d: "Somatic resourcing for grounding, boundaries, and the felt sense of re-inhabiting the body that's yours.",
      bullets: ["Grounding sequences", "Boundary work", "Interoception", "Co-regulation"],
      img: "deep",
    },
  ];
  const imgClasses = {
    sage: "placeholder-img-sage",
    warm: "bg-terra-400/30 placeholder-img",
    mid:  "bg-sage-400/40 placeholder-img",
    deep: "bg-forest-700/15 placeholder-img",
  };

  return (
    <section id="offerings" data-screen-label="Yoga — Offerings" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="The offerings"
          title="Four ways into the body."
          lede="All offerings are trauma-informed by default. Whether you've practiced for years or never rolled out a mat, the work starts where you are."
        />

        <div className="mt-16 space-y-4 lg:space-y-6">
          {items.map((it, i) => (
            <div key={it.n} className="bg-sand-100 rounded-sm ring-soft overflow-hidden">
              <div className={`grid grid-cols-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className={`col-span-12 md:col-span-4 aspect-[4/3] md:aspect-auto md:min-h-[280px] relative ${imgClasses[it.img]}`}>
                  <div className="absolute inset-0 grain opacity-30"></div>
                  <div className="absolute top-4 left-4 mono-label bg-sand-50 px-2 py-1">{it.n}</div>
                </div>
                <div className="col-span-12 md:col-span-8 p-8 lg:p-10 [direction:ltr] flex flex-col justify-center">
                  <h3 className="font-display text-[36px] md:text-[48px] leading-[1.05] text-ink">{it.t}</h3>
                  <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-xl">{it.d}</p>
                  <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {it.bullets.map((b) => (
                      <div key={b} className="text-[12px] text-ink-soft flex items-baseline gap-2">
                        <span className="w-1 h-1 rounded-full bg-sage-500 shrink-0"></span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-[12px] text-ink-mute">*In-person yoga occasionally available in Ottawa &amp; Toronto. Inquire via contact.</div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section data-screen-label="Yoga — What to expect" className="py-24 md:py-32 bg-sage-300/30 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="What to expect"
          title="A practice that doesn't perform."
          lede="No mirrors. No music telling you how to feel. Plain language, real time, your body."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 ring-soft">
          {[
            {
              t: "Choice-based language",
              d: "Cues are invitations, not commands. 'If it feels right, you might…' replaces 'now do this.'"
            },
            {
              t: "No physical adjustments",
              d: "I will not touch you. Virtual format makes this structural, not a special rule."
            },
            {
              t: "Predictable shapes",
              d: "Familiar rhythms across sessions, so your nervous system can stop predicting threat."
            },
            {
              t: "Slow & resourced",
              d: "We build capacity, not catharsis. Less intensity, more integration."
            },
            {
              t: "Stop anytime",
              d: "You can pause, modify, or end. The session belongs to you, not the protocol."
            },
            {
              t: "Bring what you have",
              d: "A chair counts as equipment. A wall counts. You do not need a studio at home."
            },
          ].map((s, i) => (
            <div key={s.t} className="bg-sand-50 p-8 lg:p-10 min-h-[220px] flex flex-col">
              <MonoLabel>0{i + 1}</MonoLabel>
              <h4 className="font-display text-[26px] mt-6 text-ink leading-tight">{s.t}</h4>
              <p className="mt-3 text-[14px] text-ink-soft leading-[1.6]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  return (
    <section data-screen-label="Yoga — For whom" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="03"
              kicker="Who this is for"
              title={<>It might be for you if…</>}
            />
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-4">
            {[
              "You've been told to 'just breathe' and want to know what that actually means.",
              "Public yoga classes are too loud, too fast, or too performative.",
              "Your therapy is helpful but your body still feels disconnected.",
              "You're navigating chronic anxiety, trauma history, or burnout.",
              "You want to integrate spiritual practice with embodiment, not pick between them.",
              "You're new to yoga and don't want to be the worst person in the room.",
            ].map((line, i) => (
              <div key={i} className="flex items-baseline gap-5 border-t border-ink/10 pt-4">
                <MonoLabel>0{i + 1}</MonoLabel>
                <p className="font-display text-[22px] md:text-[26px] leading-[1.2] text-ink flex-1">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section id="formats" data-screen-label="Yoga — Formats & Pricing" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="04"
          kicker="Format & pricing"
          title="Three ways to commit."
          lede="A drop-in to try, a series for rhythm, a private container for depth."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { t: "Drop-in", price: "$30", per: "per class", d: "Single class. A way to feel it out without a commitment.", cta: "Book a class", featured: false },
            { t: "Six-class series", price: "$160", per: "$26 / class", d: "Six weeks of consistency. Build the relationship with the practice.", cta: "Reserve a seat", featured: true },
            { t: "Private (60 min)", price: "$130", per: "per session", d: "One-on-one, designed around you. Some plans cover via insurance.", cta: "Inquire", featured: false },
          ].map((f) => (
            <div key={f.t} className={`p-8 lg:p-10 rounded-sm ring-soft flex flex-col ${f.featured ? "bg-forest-900 text-sand-100" : "bg-sand-50"}`}>
              <MonoLabel className={f.featured ? "!text-terra-400" : ""}>{f.t}</MonoLabel>
              <div className={`font-display text-[56px] md:text-[72px] leading-none mt-6 ${f.featured ? "text-sand-50" : "text-ink"}`}>{f.price}</div>
              <div className={`mt-2 text-[13px] ${f.featured ? "text-sand-200/70" : "text-ink-mute"}`}>{f.per}</div>
              <p className={`mt-5 text-[14px] leading-[1.6] ${f.featured ? "text-sand-200/80" : "text-ink-soft"} flex-1`}>{f.d}</p>
              <div className="mt-8">
                <JaneCTA variant={f.featured ? "primary" : "ghost"} size="md">{f.cta}</JaneCTA>
              </div>
              {f.featured && (
                <div className="mt-4 inline-flex items-center gap-2 mono-label !text-terra-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra-400"></span> Best value
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-2xl p-6 border border-ink/15 rounded-sm bg-sand-50">
          <MonoLabel>A note on insurance</MonoLabel>
          <p className="mt-3 text-[14px] leading-[1.6] text-ink-soft">
            Yoga sessions are not insurance-eligible the way psychotherapy is. Some clients use Health Spending
            Accounts (HSAs) or wellness benefits to offset cost — check with your plan.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section data-screen-label="Yoga — Closing CTA" className="bg-forest-900 text-sand-100 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none mix-blend-overlay"></div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <MonoLabel className="!text-terra-400">Begin</MonoLabel>
            <h2 className="font-display text-[48px] md:text-[80px] leading-[0.98] mt-6 tracking-[-0.015em]">
              You don't need to be flexible.<br/>
              <em className="text-terra-400">You need to feel met.</em>
            </h2>
            <p className="mt-7 max-w-xl text-[16px] leading-[1.65] text-sand-200/85">
              Try a single class. Book a private. Or send a message first — there are no wrong doors here.
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

function YogaHero() {
  return (
    <section data-screen-label="Yoga — Hero" className="relative overflow-hidden">
      <div className="absolute inset-0" style={{background: "linear-gradient(170deg, #f5efe3 0%, #e8edd4 50%, #f5efe3 100%)"}}></div>
      <div className="absolute inset-0 grain opacity-40 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-[112px] relative">
        <a href="index.html" className="inline-flex items-center gap-2 text-[12px] text-ink-mute hover:text-ink mono-label">
          <span>←</span> Back home
        </a>

        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <span className="h-px w-16 bg-sage-500/40"></span>
            <MonoLabel className="!text-sage-600">Service 02 · Yoga &amp; Somatic</MonoLabel>
            <span className="h-px w-16 bg-sage-500/40"></span>
          </div>

          <h1 className="font-display text-[48px] leading-[1.02] md:text-[96px] md:leading-[0.96] tracking-[-0.025em] text-ink mt-10">
            Come home<br />
            <em className="text-sage-600">to the body.</em>
          </h1>

          <p className="mt-8 text-[17px] md:text-[19px] leading-[1.65] text-ink-soft max-w-xl mx-auto">
            Private and small-group yoga, breathwork, and somatic resourcing — all trauma-informed by default. The work isn't to push the body harder. It's to come home to it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <JaneCTA size="lg">Book via JaneApp</JaneCTA>
            <a href="#offerings" className="inline-flex items-center gap-2 text-[15px] text-ink hover:text-sage-600 transition-colors group">
              <span className="underline decoration-ink/30 underline-offset-4 group-hover:decoration-sage-500">See the four offerings</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20 relative">
          <div className="aspect-[21/9] w-full rounded-t-sm ring-soft relative overflow-hidden" style={{backgroundColor: "#bcc7b1", backgroundImage: "repeating-linear-gradient(135deg, rgba(31,38,31,0.06) 0 1px, transparent 1px 14px)"}}>
            <div className="absolute inset-0 grain opacity-25"></div>
            <div className="absolute top-5 right-5 mono-label bg-sand-50 px-2 py-1">02 / Yoga</div>
            <div className="absolute bottom-6 left-6 text-[10px] font-mono text-ink/50 max-w-[60%]">[ wide — practice in motion, soft daylight, minimal space, single mat on warm floor ]</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 ring-soft">
          {[
            ["Trauma-Informed", "TCTSY-influenced"],
            ["Format",          "Private · Small group"],
            ["Delivery",        "Virtual · Ontario"],
            ["Duration",        "60 / 75 min sessions"],
          ].map(([k, v]) => (
            <div key={k} className="bg-sand-50 py-5 px-5">
              <MonoLabel className="!text-sage-600">{k}</MonoLabel>
              <div className="mt-2 font-display text-[17px] md:text-[19px] text-ink leading-tight">{v}</div>
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
      <Nav current="yoga" />
      <main>
        <YogaHero />
        <YogaOfferings />
        <WhatToExpect />
        <ForWhom />
        <Formats />
        <ClosingCTA />
        <ServiceCrossLink exclude="yoga" />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
