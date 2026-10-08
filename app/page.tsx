import { ButtonLink } from "@/components/button-link";
import { FaqList } from "@/components/faq-list";
import { MentorCard } from "@/components/mentor-card";
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
            className="aspect-[5/4] w-full md:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

function Pivot() {
  return (
    <section className="overflow-x-clip bg-cream pt-4 pb-10 md:pt-8 md:pb-24" aria-labelledby="pivot-title">
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
          <div className="copy mt-5 max-w-[46rem] space-y-3 text-ink/85 md:mt-8 md:space-y-5">
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
      </div>
      <QuoteMarquee />
      <div className="wrap">
        <div className="mt-2 max-w-[62ch] md:mt-4">
          <p className="copy text-ink/85">
            None of that is a character flaw. It’s just what happens when you try
            to build something new with no room built around it.
          </p>
          <p className="display mt-6 text-[1.35rem] text-brown md:mt-8 md:text-[clamp(1.85rem,2.8vw,2.35rem)]">
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
    <section aria-label="Video" className="bg-cream pb-10 md:pb-24">
      <div className="wrap">
        <div className="aspect-video overflow-hidden rounded-xl bg-tan">
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
    <section id="cohort" className="bg-brown py-10 text-cream md:py-24">
      <div className="wrap flex flex-col items-center text-center">
        <p className="eyebrow text-cream">Introducing</p>
        <h2 className="display headline mt-4 text-gold">
          {"Dreamers "}<em>&amp; Doers</em>
        </h2>
        <div className="copy mt-5 max-w-[40rem] space-y-3 text-cream/85 md:mt-8 md:space-y-5">
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
          <ButtonLink href="#schedule" variant="white">
            Get The Details
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="bg-tan py-10 text-brown md:py-20" aria-labelledby="founder-title">
      <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] items-start gap-8 md:w-[min(1280px,calc(100%-64px))] lg:grid-cols-[minmax(0,1.15fr)_minmax(36rem,0.9fr)] lg:gap-12">
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
          <div className="copy mt-4 space-y-3 text-charcoal md:mt-5 md:space-y-4">
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

      <dl className="mx-auto mt-12 grid w-[min(1280px,calc(100%-40px))] grid-cols-1 border-t border-brown/20 md:mt-16 md:w-[min(1280px,calc(100%-64px))] md:grid-cols-3 md:gap-4 md:pt-8 md:text-center">
        {stats.map((stat) => (
          <div key={stat.value} className="flex items-baseline justify-between gap-6 border-b border-brown/20 py-4 md:block md:border-b-0 md:py-0">
            <dt className="display text-[1.85rem] leading-none md:text-[clamp(2.5rem,4vw,3.75rem)]">{stat.value}</dt>
            <dd className="text-right font-sans text-[13px] tracking-[0.14em] text-charcoal uppercase md:mx-auto md:mt-2 md:max-w-[12ch] md:text-center md:text-[14px]">
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
      <div className="wrap py-8 text-center md:py-16">
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
        {mentors.map((mentor) => (
          <MentorCard key={mentor.name} {...mentor} />
        ))}
      </div>
    </section>
  );
}

function QuoteMarquee() {
  const reel = [...quotes, ...quotes];
  return (
    <div className="quote-marquee" role="region" aria-label="What’s in the way">
      <div className="quote-marquee-tilt">
        <div className="quote-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="quote-set" aria-hidden={copy === 1}>
              {reel.map((quote, index) => (
                <li key={`${copy}-${index}`}>
                  <p className="display inline-flex rounded-full border border-ochre bg-white px-4 py-1.5 text-[clamp(0.95rem,2vw,1.5rem)] whitespace-nowrap text-brown sm:px-5 sm:py-2.5">
                    {quote}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function Fit() {
  return (
    <section id="fit" className="bg-cream py-10 md:py-24" aria-labelledby="fit-title">
      <div className="wrap">
        <p className="eyebrow text-teal">Is this for you?</p>
        <h2 id="fit-title" className="display headline mt-3 text-brown">
          {"Know where "}<em>you stand</em>.
        </h2>
        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 md:gap-5">
          <FitCard title="It’s for you if…" items={fitForYou} tone="bg-tan text-brown" />
          <FitCard title="It’s probably not for you if…" items={fitNotForYou} tone="bg-brown text-cream" />
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
    <article className={`${tone} flex h-full flex-col rounded-md px-5 py-6 md:px-8 md:py-9`}>
      <h3 className="font-sans text-[13px] font-medium tracking-[0.14em] uppercase md:text-[15px] md:tracking-[0.16em]">{title}</h3>
      <ul className="mt-4 md:mt-5">
        {items.map((item) => (
          <li key={item} className="border-t border-current/25 py-3 text-[15px] leading-[1.55] first:border-t-0 first:pt-2 md:py-4 md:text-[18px] md:leading-[1.65]">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="bg-tan py-10 text-brown md:py-20">
      <div className="wrap">
        <p className="eyebrow text-brown">How the six weeks work</p>
        <h2 className="display headline mt-3">
          {"The "}<em>six-week</em>{" schedule"}
        </h2>
        <ol className="mt-10 border-b border-brown/25">
          {weeks.map((week) => (
            <li
              key={week.n}
              className="grid gap-1 border-t border-brown/25 py-3 md:grid-cols-[3.5rem_minmax(14rem,26rem)_1fr] md:items-baseline md:gap-8 md:py-5"
            >
              <span className="display text-lg md:text-xl">{week.n}</span>
              <h3 className="subhead text-[1.05rem] md:text-[1.625rem]">{week.title}</h3>
              <p className="copy text-charcoal">{week.body}</p>
            </li>
          ))}
        </ol>

        <ul className="chips mt-8 grid gap-3 sm:grid-cols-3">
          {rhythm.map((item) => (
            <li
              key={item.kicker}
              className="border-t-4 border-ochre bg-white px-4 py-4 text-center text-brown"
            >
              <p className="font-sans text-[13px] font-medium tracking-[0.12em] uppercase md:text-[16px] md:tracking-[0.14em]">{item.kicker}</p>
              <p className="mt-1 font-sans text-[13px] text-charcoal md:text-[16px]">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-brown py-10 text-cream md:py-20" aria-labelledby="outcomes-title">
      <div className="wrap">
        <p className="eyebrow text-center text-cream/75">What you’ll walk away with</p>
        <h2
          id="outcomes-title"
          className="display headline mx-auto mt-3 text-center"
        >
          Not another course.
          <br />
          <em className="text-gold">Actual progress.</em>
        </h2>
        <ul className="outcomes mt-8 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-0">
          {outcomes.map((item, index) => (
            <li
              key={item.n}
              className={`md:px-8 ${index > 0 ? "md:border-l md:border-cream/30" : ""} ${index === 0 ? "md:pl-0" : ""} ${index === outcomes.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-sans text-[15px] tracking-[0.16em] text-gold">{item.n}</p>
              <h3 className="subhead mt-3 max-w-[18ch] text-[1.15rem] leading-tight md:mt-4 md:max-w-[16ch] md:text-[1.65rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-[15px] leading-[1.55] text-cream/85 md:mt-4 md:max-w-[32ch] md:text-[18px] md:leading-[1.65]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-10 md:py-24">
      <div className="wrap">
        <p className="eyebrow text-center text-teal">The investment</p>
        <h2 className="display headline mt-3 text-center text-brown">
          {"Your six weeks "}<em>start here</em>.
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className={`${plan.tone} px-5 py-7 text-center text-white md:px-7 md:py-9`}>
              <p className="eyebrow text-white">{plan.name}</p>
              <p className="display mt-3 text-[2.25rem] md:mt-4 md:text-[clamp(3.4rem,6vw,4.4rem)]">{plan.price}</p>
              <p className="mt-2 text-[15px] leading-6 text-white md:mt-3 md:min-h-14 md:text-[18px] md:leading-7">{plan.detail}</p>
              <div className="mt-6">
                <ButtonLink href={plan.href} variant="white" uppercase>
                  Save my spot
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 text-center text-[15px] text-ink/70 md:mt-8 md:text-[18px]">
          Bringing a friend? Ask us about our cohort rate.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-cream py-10 md:py-24">
      <div className="wrap-faq">
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
    <section id="join" className="bg-brown py-12 text-cream md:py-28">
      <div className="wrap flex flex-col items-center text-center">
        <p className="eyebrow text-cream/75">Life in Progress</p>
        <h2 className="display headline mt-4">
          You’ve been watching
          <br />
          this account for years.
        </h2>
        <div className="copy mt-5 max-w-[46ch] space-y-3 text-cream/80 md:mt-6 md:space-y-4">
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
