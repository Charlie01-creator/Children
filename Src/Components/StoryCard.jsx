import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function StoryCard({ story }) {
  return (
    <Link
      to="/stories"
      className="group block border-b border-forest/10 py-6 first:pt-0 last:border-none"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-medium text-clay">{story.category} &middot; {story.location}</p>
          <h3 className="mt-1 font-display text-xl font-semibold text-forest-dark group-hover:text-gold-dark transition-colors">
            {story.name}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/70 max-w-prose">{story.excerpt}</p>
        </div>
        <ArrowUpRight className="mt-1 shrink-0 text-forest/40 group-hover:text-gold-dark transition-colors" size={20} />
      </div>
    </Link>
  )
}

