import { useState } from 'react'
import { stories } from '../data/content.js'
import StoryCard from '../components/StoryCard.jsx'

const filters = ['All', 'Education', 'Healthcare', 'Community']

export default function ImpactStories() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? stories : stories.filter((s) => s.category === active)

  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Impact stories</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Every number on our stats page is a child. Here are a few of them, in their own communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === f ? 'bg-forest text-white border-forest' : 'border-forest/20 text-ink/70 hover:border-forest/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 bg-canvas rounded-lg border border-forest/10 px-6 md:px-8">
          {filtered.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-ink/50">No stories in this category yet.</p>
          )}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-display text-2xl font-semibold text-forest-dark">Video testimonials</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video rounded-lg bg-forest/8 flex items-center justify-center text-forest/40 text-sm">
                Video placeholder {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
