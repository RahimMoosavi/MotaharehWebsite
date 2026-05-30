// page-signature.jsx — Return to Roots: 5-week signature package page

const { useState } = React;

// ---------- Hero ----------

function ReturnHero() {
  return (
    <section data-screen-label="Return to Roots — Hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-900"></div>
      <div className="absolute inset-0 grain-dark opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{backgroundImage: "radial-gradient(circle at 25% 15%, #c8784f 0, transparent 55%), radial-gradient(circle at 80% 80%, #9caa8e 0, transparent 50%)"}}></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-[112px] pb-24 md:pb-32 relative">
        <a href="index.html" className="inline-flex items-center gap-2 text-[12px] mono-label text-sand-200/60 hover:text-sand-100">
          <span>←</span> Back home
        </a>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4">
              <MonoLabel className="!text-terra-400">⌖ Signature package</MonoLabel>
              <span className="h-px w-16 bg-terra-400/40"></span>
              <MonoLabel className="!text-sand-200/50">5 weeks · Virtual</MonoLabel>
            </div>

            <h1 className="font-display text-[56px] leading-[0.95] md:text-[120px] md:leading-[0.92] tracking-[-0.025em] text-sand-50 mt-8">
              Return<br />
              to <em className="text-terra-400">Roots.</em>
            </h1>

            <p className="mt-8 text-[18px] md:text-[21px] leading-[1.6] text-sand-200/85 max-w-xl">
              A 5-week holistic healing container — integrating psychotherapy, somatic practice, breathwork, and Islamic spirituality — designed around you, for the life you're actually living.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#book" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors group">
                Book a free discovery call
                <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#whats-included" className="inline-flex items-center gap-2 text-[15px] text-sand-200/80 hover:text-sand-50 transition-colors group">
                <span className="underline decoration-sand-200/30 underline-offset-4">See what's inside</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="border-t border-sand-200/15 divide-y divide-sand-200/15">
              {[
                ["5 sessions",     "One per week (flexible)"],
                ["Fully virtual",  "Secure video · Ontario"],
                ["$750 total",     "$150 / session · Insurance eligible"],
                ["Rolling start",  "Begin when you're ready"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-4 gap-4">
                  <div className="font-display text-[20px] text-sand-50">{k}</div>
                  <div className="mono-label text-sand-200/55 text-right">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Overview strip ----------

function Overview() {
  return (
    <section data-screen-label="Return to Roots — Overview" className="py-20 md:py-28 border-b border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="01"
              kicker="The idea"
              title={<>Healing that holds<br />all of you.</>}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[17px] md:text-[19px] leading-[1.7] text-ink-soft">
              Most care compartmentalizes. The therapist takes the mind, the yoga teacher takes the body, and the spiritual guide takes the soul — but you arrive as one person. <strong className="text-ink font-medium">Return to Roots</strong> holds all of it in one container: psychotherapy, somatic practice, breathwork, and Islamic spirituality, woven into five sessions designed around your specific needs.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-ink-soft">
              This isn't a fixed curriculum — it's a co-created arc. You bring what you're carrying; we shape the sessions together. And you leave with more than insight — you leave with practices, tools, and anchors you can carry into your everyday life long after the five weeks end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- What's Included ----------

function WhatsIncluded() {
  const pillars = [
    {
      n: "01",
      t: "Psychospiritual Therapy",
      d: "Clinical psychotherapy with spiritual depth. Attachment, parts, grief, identity — held inside a framework that doesn't ask you to leave your deen at the door.",
      accent: "terra",
    },
    {
      n: "02",
      t: "Somatic & Yoga Practice",
      d: "Trauma-informed movement, breathwork, and nervous system regulation woven into sessions or practiced as standalone — depending on what you need that week.",
      accent: "sage",
    },
    {
      n: "03",
      t: "Islamic Spirituality",
      d: "Dhikr, du'a, contemplative practice, and Qur'anic reflection — not as a lecture but as a lived, embodied return to what grounds you.",
      accent: "forest",
    },
    {
      n: "04",
      t: "Your Personal Toolkit",
      d: "You leave with a personalized collection: yoga sequences, breathwork protocols, du'a and dhikr practices, journaling prompts, and book recommendations — yours to keep.",
      accent: "terra",
    },
  ];

  const accentColors = {
    terra: { dot: "bg-terra-500", num: "text-terra-600", border: "border-terra-500/20" },
    sage:  { dot: "bg-sage-500", num: "text-sage-600", border: "border-sage-500/20" },
    forest:{ dot: "bg-forest-800", num: "text-forest-800", border: "border-forest-800/20" },
  };

  return (
    <section id="whats-included" data-screen-label="Return to Roots — What's included" className="py-24 md:py-32 bg-sand-100/70 border-b border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="What's inside"
          title={<>Four threads,<br />one weave.</>}
          lede="Each session draws from any or all of these — shaped by what you need, not a fixed script."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => {
            const ac = accentColors[p.accent];
            return (
              <div key={p.n} className={`p-8 lg:p-10 bg-sand-50 rounded-sm ring-soft relative overflow-hidden`}>
                <div className="flex items-baseline justify-between">
                  <span className={`font-display text-[56px] leading-none ${ac.num} opacity-20`}>{p.n}</span>
                  <span className={`w-2 h-2 rounded-full ${ac.dot}`}></span>
                </div>
                <h3 className="font-display text-[28px] md:text-[32px] leading-[1.1] text-ink mt-6">{p.t}</h3>
                <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{p.d}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 lg:p-10 bg-forest-900 text-sand-100 rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 grain-dark opacity-30 pointer-events-none"></div>
          <div className="relative grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-5">
              <MonoLabel className="!text-terra-400">What you take home</MonoLabel>
              <h3 className="font-display text-[30px] md:text-[36px] leading-[1.1] text-sand-50 mt-4">More than sessions — a practice for life.</h3>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Personalized yoga sequences",
                  "Breathwork protocols",
                  "Du'a & dhikr practices",
                  "Journaling prompts",
                  "Book recommendations",
                  "Nervous system map",
                ].map((item) => (
                  <div key={item} className="flex items-baseline gap-3 text-[14px] text-sand-200/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-400 shrink-0 mt-1.5"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Pricing ----------

function Pricing() {
  return (
    <section id="pricing" data-screen-label="Return to Roots — Pricing" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="Investment"
          title="Transparent pricing."
          lede="Five sessions. One integrated container. Insurance-eligible."
        />

        <div className="mt-16 grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-7 p-8 lg:p-10 bg-forest-900 text-sand-100 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 grain-dark opacity-30 pointer-events-none"></div>
            <div className="relative">
              <MonoLabel className="!text-terra-400">Return to Roots · 5 weeks</MonoLabel>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-[72px] md:text-[96px] leading-none text-sand-50">$750</span>
                <span className="text-[16px] text-sand-200/60">CAD</span>
              </div>
              <div className="mt-3 text-[15px] text-sand-200/70">$150 per session · 5 sessions</div>

              <div className="mt-10 border-t border-sand-200/15 pt-8 space-y-4">
                {[
                  ["Schedule", "Weekly or biweekly — your pace"],
                  ["Duration", "50 min per session"],
                  ["Delivery", "Virtual · encrypted video"],
                  ["Start", "Rolling — begin when you're ready"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between">
                    <MonoLabel className="!text-sand-200/50">{k}</MonoLabel>
                    <span className="text-[15px] text-sand-50">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#book" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors group">
                  Book a free discovery call
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-sand-100 rounded-sm ring-soft flex-1">
              <MonoLabel className="!text-terra-600">Insurance</MonoLabel>
              <h3 className="font-display text-[26px] mt-4 leading-tight text-ink">Sessions are RP-eligible.</h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
                Each session is billed as psychotherapy with a Registered Psychotherapist (Qualifying). Most extended health plans cover this — check for <strong className="text-ink font-medium">RP</strong> in your benefits.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Manulife", "Sun Life", "GreenShield", "Canada Life", "Blue Cross"].map((p) => (
                  <span key={p} className="text-[11px] px-3 py-1 border border-ink/15 rounded-full text-ink-soft">{p}</span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-sand-100 rounded-sm ring-soft">
              <MonoLabel>Payment</MonoLabel>
              <h3 className="font-display text-[26px] mt-4 leading-tight text-ink">Pay as you go.</h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
                No lump sum required. Pay per session ($150) and submit each receipt to your insurer individually. Simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------

function ReturnFAQ() {
  const faqs = [
    { q: "How is this different from regular therapy?", a: "Regular therapy addresses the mind. Return to Roots addresses the mind, body, and soul together — psychotherapy, somatic practice, breathwork, and Islamic spirituality integrated into one session arc, co-created around your needs." },
    { q: "Do I need yoga experience?", a: "None at all. The somatic and movement elements are gentle, invitational, and adapted entirely to you. You won't be doing a yoga class — you'll be learning tools for your nervous system." },
    { q: "Is this religious counselling?", a: "No. It's clinical psychotherapy that is spiritually fluent. Islamic practices like dhikr, du'a, and contemplation are options we can draw on together — not a default or a requirement." },
    { q: "What if I need more than 5 sessions?", a: "Many clients continue with ongoing therapy after the package. The 5 weeks are designed to be a short, intensive container — a beginning, not the whole story." },
    { q: "Can I do biweekly instead of weekly?", a: "Yes. The rhythm is yours to set. Weekly gives momentum; biweekly gives integration time. We decide together based on what serves you." },
    { q: "Is this covered by insurance?", a: "Each session is billed as psychotherapy with a Registered Psychotherapist (Qualifying). Most extended health plans in Ontario cover RP services. Check your benefits or ask your HR department." },
    { q: "What happens in the discovery call?", a: "We talk for 15–20 minutes about what's bringing you in and what you're hoping for. I'll share how the package works and we'll figure out together if it's the right fit. No pressure, no cost." },
  ];

  return (
    <section id="faq" data-screen-label="Return to Roots — FAQ" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeader index="04" kicker="Questions" title="Before you begin." />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6 px-1" open={i === 0}>
                  <summary className="flex items-start justify-between gap-6 cursor-pointer">
                    <div className="flex items-baseline gap-4">
                      <MonoLabel className="pt-1">0{i + 1}</MonoLabel>
                      <h4 className="font-display text-[22px] md:text-[26px] leading-[1.15] text-ink group-open:text-terra-600 transition-colors">{f.q}</h4>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-ink/15 flex items-center justify-center shrink-0 group-open:bg-ink group-open:text-sand-50 group-open:border-ink transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform group-open:rotate-45">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

// ---------- Testimonials ----------

function Testimonials() {
  const quotes = [
    {
      text: "I came in fragmented — therapy for one thing, yoga for another, prayer feeling disconnected from both. Five weeks later, it all feels like one language.",
      name: "S.A.",
      context: "Completed Winter 2026",
    },
    {
      text: "The personalized toolkit alone was worth it. I still use the breathwork and journaling prompts daily, months later.",
      name: "N.K.",
      context: "Completed Fall 2025",
    },
    {
      text: "I didn't know therapy could feel this integrated. Motahareh held space for all of me — the clinical stuff, the spiritual questions, the body that was holding everything.",
      name: "F.M.",
      context: "Completed Summer 2025",
    },
  ];

  return (
    <section data-screen-label="Return to Roots — Testimonials" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-baseline gap-4 mb-14">
          <MonoLabel>From past participants</MonoLabel>
          <span className="h-px flex-1 bg-ink/15"></span>
          <MonoLabel className="!text-terra-600">Placeholder testimonials</MonoLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="p-8 bg-sand-100 rounded-sm ring-soft flex flex-col">
              <span className="font-display italic text-terra-500 text-4xl leading-none">"</span>
              <p className="mt-4 text-[16px] leading-[1.65] text-ink flex-1 font-display italic">{q.text}</p>
              <div className="mt-8 pt-5 border-t border-ink/10">
                <div className="font-medium text-[14px] text-ink">{q.name}</div>
                <MonoLabel className="mt-1 block">{q.context}</MonoLabel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Closing CTA ----------

function ClosingCTA() {
  return (
    <section id="book" data-screen-label="Return to Roots — Book" className="bg-forest-900 text-sand-100 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain-dark opacity-30 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{backgroundImage: "radial-gradient(circle at 70% 30%, #c8784f 0, transparent 55%)"}}></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative text-center">
        <MonoLabel className="!text-terra-400">Begin</MonoLabel>
        <h2 className="font-display text-[48px] md:text-[80px] leading-[0.98] mt-6 tracking-[-0.015em] max-w-3xl mx-auto">
          The roots are <em className="text-terra-400">already there.</em>
        </h2>
        <p className="mt-7 max-w-lg mx-auto text-[17px] leading-[1.65] text-sand-200/85">
          A discovery call is 15–20 minutes, free, and completely without pressure. We'll talk about what you're carrying and whether this container is the right fit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-8 py-4 rounded-full text-[16px] font-medium transition-colors group">
            Book a free discovery call
            <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="mailto:hello@motahareh.ca" className="inline-flex items-center gap-2 text-[15px] text-sand-200/80 hover:text-sand-50 transition-colors">
            <span className="underline decoration-sand-200/30 underline-offset-4">Or email me first</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8 text-[13px] text-sand-200/50">
          <span>CRPO (Qualifying)</span>
          <span className="w-1 h-1 rounded-full bg-sand-200/30"></span>
          <span>Insurance eligible</span>
          <span className="w-1 h-1 rounded-full bg-sand-200/30"></span>
          <span>Virtual · Ontario</span>
        </div>
      </div>
    </section>
  );
}

// ---------- App ----------

function App() {
  return (
    <>
      <Nav current="signature" darkHero={true} />
      <main>
        <ReturnHero />
        <Overview />
        <WhatsIncluded />
        <Pricing />
        <ReturnFAQ />
        <Testimonials />
        <ClosingCTA />
        <ServiceCrossLink exclude="signature" />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
