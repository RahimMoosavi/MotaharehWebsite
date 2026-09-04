// page-the-return.jsx — The Return: 6-week mind-body-spirit integration program page

const { useState } = React;

// ---------- Hero ----------

function ReturnHero() {
  return (
    <section data-screen-label="The Return — Hero" className="relative overflow-hidden">
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
              <MonoLabel className="!text-terra-400">⌖ Signature program</MonoLabel>
              <span className="h-px w-16 bg-terra-400/40"></span>
              <MonoLabel className="!text-sand-200/50">6 weeks · Virtual</MonoLabel>
            </div>

            <h1 className="font-display text-[56px] leading-[0.95] md:text-[120px] md:leading-[0.92] tracking-[-0.025em] text-sand-50 mt-8">
              The<br />
              <em className="text-terra-400">Return.</em>
            </h1>

            <p className="mt-6 mono-label !text-sand-200/60">A 6-Week Mind–Body–Spirit Integration Program</p>

            <p className="mt-6 text-[18px] md:text-[21px] leading-[1.6] text-sand-200/85 max-w-xl">
              For students, professionals, parents, and caregivers who feel overwhelmed, disconnected, or spiritually depleted — and who are longing to feel more grounded, connected, and whole.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors group">
                Book a free discovery call
                <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#pillars" className="inline-flex items-center gap-2 text-[15px] text-sand-200/80 hover:text-sand-50 transition-colors group">
                <span className="underline decoration-sand-200/30 underline-offset-4">See what's inside</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="border-t border-sand-200/15 divide-y divide-sand-200/15">
              {[
                ["6 sessions",     "At your own pace"],
                ["Fully virtual",  "Secure video"],
                ["$175 / session", "Insurance eligible · Sliding scale"],
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
    <section data-screen-label="The Return — Overview" className="py-20 md:py-28 border-b border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="01"
              kicker="The idea"
              title={<>A return to yourself<br />— not a fix.</>}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[17px] md:text-[19px] leading-[1.7] text-ink-soft">
              <strong className="text-ink font-medium">The Return</strong> is a personalized therapeutic program that integrates spiritually informed psychotherapy, somatic regulation, gentle yoga-based embodiment, reflection, and spiritual practice. It offers a space to slow down, listen inwardly, and reconnect with your mind, body, soul, and relationships.
            </p>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.7] text-ink-soft">
              Together, we explore the emotional, relational, bodily, and spiritual patterns that may be shaping your experience. From there, we co-create practical tools that support you beyond the session — grounding practices, breathwork, embodiment or yoga-based movement, journaling prompts, personalized dhikr or du'a, and curated resources.
            </p>
            <p className="mt-8 text-[19px] md:text-[22px] leading-[1.5] text-ink font-display italic">
              This is not a one-size-fits-all program, and it is not about fixing you. It is about returning to yourself with compassion, recognizing your inner strengths, and building a sustainable personal practice that can support you in everyday life.
            </p>
            <p className="mt-6 text-[15px] leading-[1.65] text-ink-mute">
              The journey moves from overwhelm and fragmentation toward groundedness, spiritual anchoring, and embodied connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Four Pillars ----------

function FourPillars() {
  const pillars = [
    {
      n: "01",
      t: "Reflective Psychotherapy",
      d: "We explore your story, emotional patterns, relationships, inner conflicts, values, and sources of meaning — including parts work, attachment-informed reflection, grief work, self-compassion, and the patterns that keep you feeling overwhelmed or disconnected.",
      accent: "terra",
    },
    {
      n: "02",
      t: "Embodied Regulation",
      d: "You learn to listen to the body as a source of wisdom rather than something to ignore, control, or push through. Sessions may include breathwork, grounding, gentle movement, somatic awareness, and trauma-informed yoga-based practices.",
      accent: "sage",
    },
    {
      n: "03",
      t: "Spiritual Grounding",
      d: "For clients who desire Islamic or spiritually integrated support, we may incorporate intention-setting, dhikr, du'a, reflection, trust, surrender, gratitude, and reconnecting with the soul's deeper orientation.",
      accent: "forest",
    },
    {
      n: "04",
      t: "Personalized Integration",
      d: "The program ends with a practical toolkit designed around your actual life — a personalized embodiment sequence, breathwork practice, dhikr/du'a suggestions, journaling prompts, reflective exercises, and curated book or resource recommendations.",
      accent: "terra",
    },
  ];

  const accentColors = {
    terra: { dot: "bg-terra-500", num: "text-terra-600", border: "border-terra-500/20" },
    sage:  { dot: "bg-sage-500", num: "text-sage-600", border: "border-sage-500/20" },
    forest:{ dot: "bg-forest-800", num: "text-forest-800", border: "border-forest-800/20" },
  };

  return (
    <section id="pillars" data-screen-label="The Return — Four pillars" className="py-24 md:py-32 bg-sand-100/70 border-b border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="What's inside"
          title={<>The four pillars<br />of The Return.</>}
          lede="Each session draws from any or all of these four — shaped by what you need, not a fixed script."
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
                  "A clearer understanding of your emotional, spiritual & relational patterns",
                  "A personalized grounding & nervous system regulation toolkit",
                  "A gentle yoga or embodiment sequence for your needs & capacity",
                  "Breathwork and somatic practices for daily life",
                  "Personalized dhikr, du'a, or spiritual reflection practices, if desired",
                  "Journaling prompts for continued self-inquiry",
                  "Curated book or resource recommendations",
                  "A realistic ongoing practice plan that fits your life",
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

// ---------- Who this is for ----------

function ForWhom() {
  const lines = [
    "You feel overwhelmed, scattered, or disconnected from yourself.",
    "You are functioning outwardly but feel depleted inwardly.",
    "You want therapy that makes room for the body, spirituality, and lived experience.",
    "You are seeking tools that are practical, personal, and sustainable.",
    "You want to reconnect with your faith in a gentle, embodied, and compassionate way.",
    "You are navigating stress, transition, caregiving, identity questions, or emotional exhaustion.",
    "You want more than insight alone — you want practices you can carry into daily life.",
  ];

  return (
    <section data-screen-label="The Return — Who this is for" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeader
              index="03"
              kicker="Who this is for"
              title={<>This program may<br />be for you if…</>}
            />
            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.6] text-ink font-display italic max-w-md">
              This is a personalized therapeutic journey for people who do not just want to talk about healing, but want to embody it, spiritualize it, and carry it into daily life.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-4">
            {lines.map((line, i) => (
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

// ---------- Pricing ----------

function Pricing() {
  return (
    <section id="pricing" data-screen-label="The Return — Pricing" className="py-24 md:py-32 bg-sand-100/70 border-y border-ink/8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          index="04"
          kicker="Investment"
          title="Transparent pricing."
          lede="Six sessions. One integrated container. Insurance applicable — sliding scale available."
        />

        <div className="mt-16 grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-7 p-8 lg:p-10 bg-forest-900 text-sand-100 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 grain-dark opacity-30 pointer-events-none"></div>
            <div className="relative">
              <MonoLabel className="!text-terra-400">The Return · 6 weeks</MonoLabel>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-[72px] md:text-[96px] leading-none text-sand-50">$175</span>
                <span className="text-[16px] text-sand-200/60">/ session</span>
              </div>
              <div className="mt-3 text-[15px] text-sand-200/70">$1,050 for the full 6-session program</div>

              <div className="mt-10 border-t border-sand-200/15 pt-8 space-y-4">
                {[
                  ["Schedule", "At your own pace"],
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
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-7 py-3.5 rounded-full text-[15px] font-medium transition-colors group">
                  Book a free discovery call
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-sand-50 rounded-sm ring-soft flex-1">
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

            <div className="p-8 bg-sand-50 rounded-sm ring-soft">
              <MonoLabel>Sliding scale</MonoLabel>
              <h3 className="font-display text-[26px] mt-4 leading-tight text-ink">Cost shouldn't be a barrier.</h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-ink-soft">
                A limited number of sliding-scale spots are available. Pay per session and submit each receipt to your insurer individually — no lump sum required. Ask during your discovery call.
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
    { q: "How is this different from regular therapy?", a: "Many people aren't looking for traditional, open-ended talk therapy — they want something more practical and curated, with tools they can actually carry into everyday life. The Return gives you the full experience of psychotherapy inside a container that offers more than regular sessions do: a focused arc, embodied practice, and a toolkit you leave with, woven around your needs." },
    { q: "Do I need yoga experience?", a: "None at all. The embodiment and movement elements are gentle, invitational, and adapted entirely to you. You won't be doing a yoga class — you'll be learning tools for your nervous system." },
    { q: "Is this religious counselling?", a: "No. It's clinical psychotherapy that is spiritually fluent. Islamic practices like dhikr, du'a, and contemplation are options we can draw on together if you desire them — not a default or a requirement." },
    { q: "What if I need more than 6 sessions?", a: "Many clients continue with ongoing therapy after the program. The 6 weeks are designed to be a focused, intensive container — a beginning, not the whole story." },
    { q: "Can I set my own schedule?", a: "Yes. Sessions happen at your own pace — we set a rhythm that works for you and can adjust it anytime based on what serves you." },
    { q: "Is this covered by insurance?", a: "Each session is billed as psychotherapy with a Registered Psychotherapist (Qualifying). Most extended health plans in Ontario cover RP services — check your benefits or ask your HR department. Sliding-scale pricing is also available if cost is a barrier." },
    { q: "What happens in the discovery call?", a: "We talk for 15–20 minutes about what's bringing you in and what you're hoping for. I'll share how the program works and we'll figure out together if it's the right fit. No pressure, no cost." },
  ];

  return (
    <section id="faq" data-screen-label="The Return — FAQ" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeader index="05" kicker="Questions" title="Before you begin." />
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

// ---------- Closing CTA ----------

function ClosingCTA() {
  return (
    <section id="book" data-screen-label="The Return — Book" className="bg-forest-900 text-sand-100 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grain-dark opacity-30 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{backgroundImage: "radial-gradient(circle at 70% 30%, #c8784f 0, transparent 55%)"}}></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative text-center">
        <MonoLabel className="!text-terra-400">Begin</MonoLabel>
        <h2 className="font-display text-[48px] md:text-[80px] leading-[0.98] mt-6 tracking-[-0.015em] max-w-3xl mx-auto">
          Return to yourself, <em className="text-terra-400">with compassion.</em>
        </h2>
        <p className="mt-7 max-w-lg mx-auto text-[17px] leading-[1.65] text-sand-200/85">
          A discovery call is 15–20 minutes, free, and completely without pressure. We'll talk about what you're carrying and whether this program is the right fit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-terra-500 hover:bg-terra-600 text-sand-50 px-8 py-4 rounded-full text-[16px] font-medium transition-colors group">
            Book a free discovery call
            <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-[15px] text-sand-200/80 hover:text-sand-50 transition-colors">
            <span className="underline decoration-sand-200/30 underline-offset-4">Or email me first</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8 text-[13px] text-sand-200/50">
          <span>CRPO (Qualifying)</span>
          <span className="w-1 h-1 rounded-full bg-sand-200/30"></span>
          <span>Insurance eligible in Ontario</span>
          <span className="w-1 h-1 rounded-full bg-sand-200/30"></span>
          <span>Fully virtual</span>
        </div>
      </div>
    </section>
  );
}

// ---------- App ----------

function App() {
  return (
    <>
      <Nav current="the-return" darkHero={true} />
      <main>
        <ReturnHero />
        <Overview />
        <FourPillars />
        <ForWhom />
        <Pricing />
        <ReturnFAQ />
        <ClosingCTA />
        <ServiceCrossLink exclude="the-return" />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
