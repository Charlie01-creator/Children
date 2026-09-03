import Button from './Button.jsx'

export default function ProgramCard({ program }) {
  return (
    <div className="flex flex-col h-full border border-forest/10 p-7 rounded-lg bg-canvas">
      <h3 className="font-display text-2xl font-semibold text-forest-dark">{program.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{program.summary}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-ink/75 flex-1">
        {program.points.map((p) => (
          <li key={p} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-dark" />
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium text-forest">{program.metric}</p>
      <Button to="/donate" variant="secondary" className="mt-6 self-start">Support this program</Button>
    </div>
  )
}

