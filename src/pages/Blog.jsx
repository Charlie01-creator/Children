import { updates } from '../data/content.js'

export default function Blog() {
  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Updates</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            News from our programs, events, and financial transparency reports.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 divide-y divide-forest/10">
        {updates.map((u) => (
          <article key={u.slug} className="py-8 first:pt-0">
            <p className="text-xs text-ink/50">
              {new Date(u.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} &middot; {u.author}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-forest-dark">{u.title}</h2>
            <p className="mt-3 text-[15px] text-ink/70 leading-relaxed max-w-prose">{u.excerpt}</p>
          </article>
        ))}
      </section>
    </>
  )
}

