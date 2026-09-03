import { motion } from 'framer-motion'
import { ArrowRight, HandHeart, ShieldCheck, BookOpen } from 'lucide-react'
import Button from '../components/Button.jsx'
import StatCounter from '../components/StatCounter.jsx'
import StoryCard from '../components/StoryCard.jsx'
import DonationWidget from '../components/DonationWidget.jsx'
import { stats, stories, updates, orgName } from '../data/content.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="font-display text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05] font-semibold text-forest-dark">
              A child's future shouldn't depend on circumstance.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-[46ch] leading-relaxed">
              {orgName} works alongside families and communities across Uganda so that vulnerable children get the education, care, and opportunity every child deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/donate" variant="primary">
                Donate Now <ArrowRight size={16} />
              </Button>
              <Button to="/programs" variant="secondary">
                Learn About Our Impact
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full rounded-lg bg-forest/10 flex items-center justify-center text-forest/40 text-sm border border-forest/15">
              {/* Replace with real photography: a warm, dignified photo of children/community */}
              Photo placeholder — community &amp; children
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-canvas border border-forest/10 rounded-lg px-5 py-4 shadow-sm">
              <p className="font-display text-2xl font-semibold text-forest-dark">410</p>
              <p className="text-xs text-ink/60 max-w-[16ch]">children in school through sponsorship this term</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT LEDGER */}
      <section className="border-y border-forest/10 bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-forest/10 ledger-rule">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-dark">
            Who we are, and why we exist
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70 max-w-prose">
            {orgName} is a Uganda-based nonprofit working directly with children and families whose circumstances put their education, health, and safety at risk. We believe every child has the capability to thrive &mdash; what's often missing isn't potential, it's access.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/70 max-w-prose">
            We work in close partnership with local schools, health clinics, and community leaders, so support reaches the children who need it and stays accountable to the communities we serve.
          </p>
          <Button to="/about" variant="ghost" className="mt-6 px-0">Read our full story</Button>
        </div>

        <div className="space-y-6">
          {[
            { icon: BookOpen, title: 'Education first', body: 'Consistent schooling is the single strongest predictor of a child\u2019s long-term wellbeing, so it anchors everything we do.' },
            { icon: HandHeart, title: 'Dignity, not dependency', body: 'We design programs with families and communities, not around them \u2014 support that builds toward independence.' },
            { icon: ShieldCheck, title: 'Full accountability', body: 'Every donation is tracked, and our financials are published annually for anyone to review.' },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="font-medium text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink/65 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-dark">Real children. Real change.</h2>
            <Button to="/stories" variant="ghost" className="px-0">All stories <ArrowRight size={14} className="inline ml-1" /></Button>
          </div>
          <div className="mt-8 bg-canvas rounded-lg border border-forest/10 px-6 md:px-8">
            {stories.slice(0, 3).map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className="mx-auto max-w-6xl px-5 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-dark">
            Your donation, at work within days
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70 max-w-prose">
            There's no minimum, and no donation is too small. Whether it's a one-time gift or a monthly commitment, here's roughly how it helps:
          </p>
          <ul className="mt-6 space-y-4 text-[15px] text-ink/75">
            <li className="flex gap-3"><span className="font-display font-semibold text-gold-dark w-14 shrink-0">$15</span> Scholastic materials for one child, for a full term</li>
            <li className="flex gap-3"><span className="font-display font-semibold text-gold-dark w-14 shrink-0">$35</span> A month of daily nutrition support for one child</li>
            <li className="flex gap-3"><span className="font-display font-semibold text-gold-dark w-14 shrink-0">$75</span> Full term school fees for one primary-level child</li>
            <li className="flex gap-3"><span className="font-display font-semibold text-gold-dark w-14 shrink-0">$150</span> A term of secondary school fees, books, and uniform</li>
          </ul>
        </div>
        <DonationWidget />
      </section>

      {/* TRUST SECTION */}
      <section className="border-t border-forest/10 bg-forest-dark text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">Transparency isn't an afterthought</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              We publish where every donation goes, in plain language, every year &mdash; because trust has to be earned continuously, not claimed once.
            </p>
          </div>
          <div className="text-sm text-white/70 leading-relaxed">
            <h3 className="text-white font-medium mb-2">How funds are used</h3>
            <p>Program delivery, direct family support, and community partnerships come first. Operational costs are kept deliberately lean and disclosed in full in our annual report.</p>
          </div>
          <div className="text-sm text-white/70 leading-relaxed">
            <h3 className="text-white font-medium mb-2">Accountability</h3>
            <p>Registered nonprofit organisation, Uganda (Reg. No. [XXXXX]). Independently reviewed financials available on request and published annually.</p>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-dark">Latest from the field</h2>
          <Button to="/updates" variant="ghost" className="px-0">All updates <ArrowRight size={14} className="inline ml-1" /></Button>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {updates.map((u) => (
            <article key={u.slug} className="border border-forest/10 rounded-lg p-6">
              <p className="text-xs text-ink/50">{new Date(u.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-forest-dark leading-snug">{u.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{u.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VOLUNTEER / BEYOND DONATION */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest-dark">There's more than one way to help</h2>
            <p className="mt-3 text-[15px] text-ink/70 max-w-[50ch]">Volunteer your time, mentor a child, or bring your company on as a program partner.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Button to="/contact" variant="secondary">Volunteer with us</Button>
            <Button to="/contact" variant="ghost">Partner with us</Button>
          </div>
        </div>
      </section>
    </>
  )
}

