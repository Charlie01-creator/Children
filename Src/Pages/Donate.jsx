import { useState } from 'react'
import DonationWidget from '../components/DonationWidget.jsx'
import { faqs } from '../data/content.js'

export default function Donate() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Make a donation</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Your donation directly helps provide opportunities and support for vulnerable children.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <h2 className="font-display text-2xl font-semibold text-forest-dark">Before you give</h2>
          <div className="mt-5 space-y-5 text-[15px] text-ink/70 leading-relaxed">
            <p>Card payments are processed securely and we never store your card details. Mobile Money donations are confirmed instantly. Bank transfers may take 1&ndash;3 business days to reflect.</p>
            <p>Monthly donors receive a short update on the program their donation supports, roughly once a term.</p>
          </div>

          <h2 className="mt-10 font-display text-2xl font-semibold text-forest-dark">Other ways to give</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-ink/70">
            <li>&mdash; Bank transfer for larger or corporate gifts (details on request)</li>
            <li>&mdash; In-kind donations of scholastic materials or clothing</li>
            <li>&mdash; Company matching &mdash; ask your employer if they match donations</li>
          </ul>

          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-forest-dark">Common questions</h2>
            <div className="mt-4 divide-y divide-forest/10 border-t border-b border-forest/10">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-medium text-ink">{f.q}</span>
                    <span className="text-forest text-lg leading-none">{openFaq === i ? '\u2212' : '+'}</span>
                  </button>
                  {openFaq === i && <p className="pb-4 text-sm text-ink/65 leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <DonationWidget />
      </section>
    </>
  )
}
