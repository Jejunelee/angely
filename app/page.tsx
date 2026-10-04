import { ButtonLink } from "@/components/button-link";
import { FaqList } from "@/components/faq-list";
import { Photo } from "@/components/photo";
import { SiteHeader } from "@/components/site-header";
import {
  fitForYou,
  fitNotForYou,
  mentors,
  outcomes,
  plans,
  quotes,
  rhythm,
  stats,
  weeks,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Pivot />
        <Video />
        <Cohort />
        <Founder />
        <Progress />
        <Fit />
        <Schedule />
        <Outcomes />
        <Pricing />
        <Faq />
        <Close />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-73px)] items-center bg-cream py-10 md:py-12">
      <div className="wrap-wide grid w-full items-center gap-10 md:grid-cols-[1.35fr_0.7fr] md:gap-12">
        <div>
          <p className="eyebrow hero-kicker text-teal">Life in Progress presents</p>
          <h1 className="display headline mt-4 text-brown">
            <span className="hero-mask">
              <span className="hero-line" style={{ animationDelay: "0.12s" }}>
                Life in progress isn’t
              </span>
            </span>
            <span className="hero-mask">
              <span className="hero-line md:whitespace-nowrap" style={{ animationDelay: "0.28s" }}>
                an excuse. <em>it’s the plan</em>
              </span>
            </span>
          </h1>
          <p className="copy hero-fade mt-6 max-w-[40rem] text-ink/80" style={{ animationDelay: "0.48s" }}>
            A six-week live cohort for ambitious women who are ready to stop
            putting the thing off and start building it — alongside people who
            understand what it takes.
          </p>
          <div className="hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "0.64s" }}>
            <ButtonLink href="#pricing">Join Dreamers &amp; Doers</ButtonLink>
            <p className="font-sans text-[15px] tracking-[0.16em] text-brown/80 uppercase">
              Next cohort · [TBC]
            </p>
          </div>
        </div>
        <div className="hero-frame">
          <Photo
            src="/images/hero.jpg"
            alt="A woman with a full afro in a blush off-shoulder top, smiling"
            priority
            speed={0.62}
            sizes="(max-width: 768px) 100vw, 42vw"
            className="aspect-[4/5] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Pivot() {
  return (
    <section className="bg-cream pt-6 pb-16 md:pt-8 md:pb-24" aria-labelledby="pivot-title">
      <div className="wrap">
        <div className="max-w-[920px]">
          <p className="eyebrow text-teal">Life in Progress presents</p>
          <h2
            id="pivot-title"
            className="display headline mt-4 text-brown"
          >
            You’ve watched me pivot
            <br />
            in public for years.
          </h2>
          <div className="copy mt-8 max-w-[46rem] space-y-5 text-ink/85">
            <p>
              I stopped leading tours. I moved to Madrid with no real plan past
              “let’s see.” I’ve spent 15 years building Access Travel.
            </p>
            <p>
              So you know I won’t sugarcoat this. Life doesn’t move in a straight
              line. Yours probably isn’t either right now.
            </p>
            <p>
              I asked almost 100 of you what’s actually in the way of the thing
              you keep saying you’ll start. Not what you want, what’s stopping you.
            </p>
          </div>
        </div>
        <ul className="quote-row mt-10 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-6 sm:pb-2">
          {quotes.map((quote) => (
            <li key={quote}>
              <p className="quote-tilt display inline-flex rounded-full border border-brown/30 px-5 py-2.5 text-[1.5rem] text-brown sm:whitespace-nowrap">
                {quote}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-[62ch]">
          <p className="copy text-ink/85">
            None of that is a character flaw. It’s just what happens when you try
            to build something new with no room built around it.
          </p>
          <p className="display mt-8 text-[clamp(1.85rem,2.8vw,2.35rem)] text-brown">
            So we’re building that room
          </p>
          <p className="copy mt-3 text-ink/80">
            A community that makes progress faster.
          </p>
        </div>
      </div>
    </section>
  );
}

function Video() {
  return (
    <section aria-label="Video" className="bg-cream pb-16 md:pb-24">
      <div className="wrap">
        <div className="aspect-video overflow-hidden rounded-xl bg-[#CBAD86]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/r2OIYW-BNT4"
            title="It's Time to Be Your Own Adult | Life in Progress Podcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Cohort() {
  return (
    <section id="cohort" className="bg-brown py-16 text-cream md:py-24">
      <div className="wrap flex flex-col items-center text-center">
        <p className="eyebrow text-cream">Introducing</p>
        <h2 className="display headline mt-4 text-gold">
          {"Dreamers "}<em>&amp; Doers</em>
        </h2>
        <div className="copy mt-8 max-w-[40rem] space-y-5 text-cream/85">
          <p>
            A live, 6-week cohort inside Life in Progress, built on the idea that
            we all love to dream.
          </p>
          <p>The most challenging part is how to make that dream into a reality.</p>
          <p>This only happens with the right people around you.</p>
          <p>We will share with you what we learned and how to take action.</p>
          <p>They say, “you are the sum of the five people you hang out with the most.”</p>
          <p>
            What if I told you that this cohort will be full of ambitious and
            action-oriented women.....wouldn’t you want to be part of that?
          </p>
        </div>
        <div className="mt-10">
          <ButtonLink href="#schedule" variant="gold">
            Get The Details
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="bg-olive py-14 text-cream md:py-20" aria-labelledby="founder-title">
      <div className="mx-auto grid w-[min(1480px,calc(100%-40px))] items-start gap-8 md:w-[min(1480px,calc(100%-64px))] lg:grid-cols-[minmax(0,1.15fr)_minmax(36rem,0.9fr)] lg:gap-12">
        <div className="grid grid-cols-[0.62fr_1fr] gap-3 sm:gap-4">
          <div className="grid gap-3 sm:gap-4">
            <Photo
              src="/images/founder-flowers.jpg"
              alt="Angely with pink flowers in her hair, looking toward the camera"
              speed={0.22}
              sizes="(max-width: 1024px) 36vw, 22vw"
              className="aspect-[4/3]"
            />
            <Photo
              src="/images/founder-portrait.jpg"
              alt="Angely in a rust turtleneck and plaid blazer"
              speed={0.4}
              sizes="(max-width: 1024px) 36vw, 22vw"
              className="aspect-[2/3]"
            />
          </div>
          <Photo
            src="/images/founder-city.jpg"
            alt="Angely in an olive sweater with a black bag, standing in a city plaza"
            speed={0.16}
            sizes="(max-width: 1024px) 56vw, 34vw"
            className="h-full min-h-[300px]"
          />
        </div>
        <div>
          <h2
            id="founder-title"
            className="display headline"
          >
            I’ve spent years
            <br />
            learning how to
            <br />
            make ideas real.
          </h2>
          <div className="copy mt-5 space-y-4 text-cream/85">
            <p>I’ve built seven businesses. Nobody handed me a playbook for any of them.</p>
            <p>
              I stepped away from leading tours myself when I moved to Madrid. I came back
              different, and I kept building anyway. Access Lite, Explora Ahora, Happi Lab,
              Access Wellness Club, Ohana Pets, one after another, mostly in public, mistakes
              included.
            </p>
            <p>
              Somewhere in there, a community of over a million people started watching me
              figure it out.
            </p>
            <p>
              Dreamers &amp; Doers is everything I wish I’d had in year one. This is the actual
              thing I’ve used on myself, seven times over.
            </p>
            <p>🤎 Angely</p>
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-12 grid w-[min(1480px,calc(100%-40px))] grid-cols-3 gap-4 border-t border-cream/20 pt-8 text-center md:mt-16 md:w-[min(1480px,calc(100%-64px))]">
        {stats.map((stat) => (
          <div key={stat.value}>
            <dt className="display text-[clamp(2.5rem,4vw,3.75rem)]">{stat.value}</dt>
            <dd className="mx-auto mt-2 max-w-[12ch] font-sans text-[14px] tracking-[0.14em] text-cream/75 uppercase">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Progress() {
  return (
    <section id="progress" className="bg-charcoal text-cream" aria-labelledby="progress-title">
      <div className="wrap py-14 text-center md:py-16">
        <p className="eyebrow text-cream/60">People who have done it</p>
        <h2 id="progress-title" className="display headline mt-3">
          {"Progress, "}<em>faster</em>.
        </h2>
        <p className="lead mx-auto mt-4 max-w-[46ch] text-[18px] leading-[1.65] text-cream/75">
          A practical space to move your ideas forward, build momentum, and
          stop getting stuck in your own head.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
        <Mentor name={mentors[0].name} image={mentors[0].image} alt={mentors[0].alt} bar={mentors[0].bar} speed={0.28} />
        <Mentor name={mentors[1].name} image={mentors[1].image} alt={mentors[1].alt} bar={mentors[1].bar} speed={0.46} />
        <blockquote className="flex h-full min-h-[280px] flex-col bg-quote text-brown md:min-h-0">
          <p className="display flex-1 px-6 py-8 text-[2.05rem] leading-[1.15] sm:px-8 md:text-[2.3rem]">
            Still in the work, beside everyone else building.
          </p>
          <footer className="display grid min-h-[4.5rem] place-items-center bg-[#b89255] px-4 text-[2.05rem] text-brown md:text-[2.25rem]">
            Shai Ymbong
          </footer>
        </blockquote>
        <Mentor name={mentors[2].name} image={mentors[2].image} alt={mentors[2].alt} bar={mentors[2].bar} speed={0.22} />
      </div>
    </section>
  );
}

function Mentor({
  name,
  image,
  alt,
  bar,
  speed,
}: {
  name: string;
  image: string;
  alt: string;
  bar: string;
  speed: number;
}) {
  return (
    <figure className="flex h-full flex-col">
      <Photo
        src={image}
        alt={alt}
        speed={speed}
        sizes="(max-width: 768px) 100vw, 25vw"
        className="aspect-[4/5] w-full md:aspect-[4/9]"
      />
      <figcaption className={`${bar} display grid min-h-[4.5rem] place-items-center px-4 text-[2.05rem] text-cream md:text-[2.25rem]`}>
        {name}
      </figcaption>
    </figure>
  );
}

function Fit() {
  return (
    <section id="fit" className="bg-cream py-16 md:py-24" aria-labelledby="fit-title">
      <div className="wrap">
        <p className="eyebrow text-teal">Is this for you?</p>
        <h2 id="fit-title" className="display headline mt-3 text-brown">
          {"Know where "}<em>you stand</em>.
        </h2>
        <div className="mt-10 grid items-start gap-4 md:grid-cols-2 md:gap-5">
          <FitCard title="It’s for you if…" items={fitForYou} tone="bg-rust-card" />
          <FitCard title="It’s probably not for you if…" items={fitNotForYou} tone="bg-brown" />
        </div>
      </div>
    </section>
  );
}

function FitCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: string;
}) {
  return (
    <article className={`${tone} rounded-md px-7 py-8 text-cream md:px-8 md:py-9`}>
      <h3 className="font-sans text-[15px] font-medium tracking-[0.16em] uppercase">{title}</h3>
      <ul className="mt-5">
        {items.map((item) => (
          <li key={item} className="border-t border-cream/35 py-4 text-[18px] leading-[1.65] text-cream/95 first:border-t-0 first:pt-2">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="bg-tan py-16 text-brown md:py-20">
      <div className="wrap">
        <p className="eyebrow text-cream">How the six weeks work</p>
        <h2 className="display headline mt-3">
          {"The "}<em>six-week</em>{" schedule"}
        </h2>
        <ol className="mt-10 border-b border-brown/25">
          {weeks.map((week) => (
            <li
              key={week.n}
              className="grid gap-1 border-t border-brown/25 py-5 md:grid-cols-[3.5rem_minmax(14rem,26rem)_1fr] md:items-baseline md:gap-8"
            >
              <span className="display text-xl">{week.n}</span>
              <h3 className="subhead text-[1.625rem]">{week.title}</h3>
              <p className="copy text-brown/85">{week.body}</p>
            </li>
          ))}
        </ol>

        <ul className="chips mt-8 grid gap-3 sm:grid-cols-3">
          {rhythm.map((item) => (
            <li
              key={item.kicker}
              className="bg-cream px-4 py-4 text-center text-brown"
            >
              <p className="font-sans text-[16px] font-medium tracking-[0.14em] uppercase">{item.kicker}</p>
              <p className="mt-1 font-sans text-[16px] text-brown/75">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-tan-deep py-16 text-cream md:py-20" aria-labelledby="outcomes-title">
      <div className="wrap">
        <p className="eyebrow text-center text-cream/75">What you’ll walk away with</p>
        <h2
          id="outcomes-title"
          className="display headline mx-auto mt-3 text-center"
        >
          Not another course.
          <br />
          <em>Actual progress.</em>
        </h2>
        <ul className="outcomes mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {outcomes.map((item, index) => (
            <li
              key={item.n}
              className={`md:px-8 ${index > 0 ? "md:border-l md:border-cream/35" : ""} ${index === 0 ? "md:pl-0" : ""} ${index === outcomes.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-sans text-[15px] tracking-[0.16em] text-cream/80">{item.n}</p>
              <h3 className="subhead mt-4 max-w-[16ch] text-[1.65rem] leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[32ch] text-[18px] leading-[1.65] text-cream/85">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 md:py-24">
      <div className="wrap">
        <p className="eyebrow text-center text-teal">The investment</p>
        <h2 className="display headline mt-3 text-center text-brown">
          {"Your six weeks "}<em>start here</em>.
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className={`${plan.tone} px-7 py-9 text-center text-cream`}>
              <p className="eyebrow text-cream/80">{plan.name}</p>
              <p className="display mt-4 text-[clamp(3.4rem,6vw,4.4rem)]">{plan.price}</p>
              <p className="mt-3 min-h-14 text-[18px] leading-7 text-cream/90">{plan.detail}</p>
              <div className="mt-6">
                <ButtonLink href={plan.href} variant="white" uppercase>
                  Save my spot
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 text-center text-[18px] text-ink/70">
          Bringing a friend? Ask us about our cohort rate.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 md:py-24">
      <div className="wrap">
        <p className="eyebrow text-teal">Some questions from you</p>
        <h2 className="display headline mt-3 text-brown">Questions, answered.</h2>
        <div className="mt-8">
          <FaqList />
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section id="join" className="bg-brown py-20 text-cream md:py-28">
      <div className="wrap flex flex-col items-center text-center">
        <p className="eyebrow text-gold">Life in Progress</p>
        <h2 className="display headline mt-4">
          You’ve been watching
          <br />
          this account for years.
        </h2>
        <div className="copy mt-6 max-w-[46ch] space-y-4 text-[18px] leading-[1.65] text-cream/80">
          <p>Some of you have been in the DMs asking me how I’ve built my businesses and life.</p>
          <p>Well, here it is.</p>
          <p>You need six weeks, a community of other women, and momentum.</p>
          <p>This is that date.</p>
        </div>
        <div className="mt-8">
          <ButtonLink href="#pricing" variant="gold" uppercase className="w-full sm:w-auto">
            Join Dreamers &amp; Doers
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
