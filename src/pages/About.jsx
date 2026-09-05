import { orgName } from '../data/content.js'
import Button from '../components/Button.jsx'

const values = [
  { title: 'Dignity', body: 'We tell stories of capability and hope, never pity. Every child we work with is a whole person, not a case file.' },
  { title: 'Accountability', body: 'Every dollar and shilling is tracked and reported. Donors and communities both deserve a clear account of impact.' },
  { title: 'Partnership', body: 'We work with families, schools, and local leaders \u2014 not around them. Lasting change is built with communities, not for them.' },
  { title: 'Safeguarding', body: 'Every staff member and volunteer completes child protection training. Children\u2019s safety comes before any program outcome.' },
]

const team = [
  { name: 'Nakimuli Patricia', role: 'Founder & Executive Director' },
  { name: 'Okello Brian', role: 'Programs Director' },
  { name: 'Aisha Namutebi', role: 'Finance & Accountability Lead' },
  { name: 'David Ssemwogerere', role: 'Community Partnerships' },
]

export default function About() {
  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Our story</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            {orgName} started with a simple observation: talent and effort are distributed equally, but opportunity isn't. Everything we've built since exists to close that gap for children in Uganda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-[15px] leading-relaxed text-ink/75">
          Our founder began sponsoring three children's school fees out of pocket while working as a teacher outside Kampala. Within two years, that grew into a small community fund. Today, {orgName} supports children in classrooms, clinics, and homes across 38 communities &mdash; but the starting question hasn't changed: what does this specific child, in this specific circumstance, actually need to stay in school and stay safe?
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
          We're intentionally not trying to be everything to everyone. We focus on education, basic needs, and child development because we've seen these three areas compound &mdash; a child who is fed, safe, and in school has a genuinely different trajectory.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="border-l-2 border-gold-dark pl-6">
            <h2 className="font-display text-xl font-semibold text-forest-dark">Our mission</h2>
            <p className="mt-2 text-[15px] text-ink/70 leading-relaxed">
              To support needy children by providing essential resources, care, education support, and opportunities for a better future.
            </p>
          </div>
          <div className="border-l-2 border-forest pl-6">
            <h2 className="font-display text-xl font-semibold text-forest-dark">Our vision</h2>
            <p className="mt-2 text-[15px] text-ink/70 leading-relaxed">
              A Uganda where no child's future is limited by circumstances beyond their control.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-forest-dark">What we hold ourselves to</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-canvas border border-forest/10 rounded-lg p-6">
                <h3 className="font-medium text-forest-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold text-forest-dark">Team &amp; leadership</h2>
        <p className="mt-3 text-[15px] text-ink/65 max-w-prose">Based in Kampala and working directly in the communities we serve.</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t) => (
            <div key={t.name}>
              <div className="aspect-square rounded-lg bg-forest/8 flex items-center justify-center text-forest/40 text-xs">Photo</div>
              <p className="mt-3 font-medium text-ink">{t.name}</p>
              <p className="text-sm text-ink/55">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-forest-dark text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Based in Bulenga, working across Uganda</h2>
          <p className="mt-4 text-white/70 max-w-[55ch] mx-auto leading-relaxed">
            Our team and community centres are on the ground &mdash; not managing programs remotely. That proximity is what lets us respond quickly when a family needs support.
          </p>
          <Button to="/donate" variant="onDark" className="mt-7">Support our work</Button>
        </div>
      </section>
    </>
  )
}

