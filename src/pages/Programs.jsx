import ProgramCard from '../components/ProgramCard.jsx'
import { programs } from '../data/content.js'

export default function Programs() {
  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Our programs</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Three focus areas, each addressing a different barrier standing between a child and a fair chance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <ProgramCard key={p.slug} program={p} />
        ))}
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest-dark text-center">How a child enters a program</h2>
          <ol className="mt-10 space-y-8">
            {[
              { step: '1', title: 'Referral', body: 'Children are referred by community leaders, teachers, or local health workers who know the family\u2019s situation directly.' },
              { step: '2', title: 'Assessment', body: 'Our program team visits the family to understand what kind of support would actually help \u2014 school fees, nutrition, healthcare, or a combination.' },
              { step: '3', title: 'Ongoing support', body: 'Support continues with regular check-ins, and is adjusted as the child\u2019s and family\u2019s circumstances change.' },
            ].map((s) => (
              <li key={s.step} className="flex gap-5">
                <span className="font-display text-2xl font-semibold text-gold-dark shrink-0 w-8">{s.step}</span>
                <div>
                  <h3 className="font-medium text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/65 leading-relaxed max-w-prose">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

