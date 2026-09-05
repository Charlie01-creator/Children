import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to a real form backend (Formspree, Resend, or a custom API route)
    setSent(true)
  }

  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest-dark">Get in touch</h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            Questions about donating, volunteering, or partnering with us &mdash; we read every message.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        <div className="space-y-8">
          <div className="flex gap-3">
            <MapPin size={18} className="text-forest mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-ink">Office</p>
              <p className="text-sm text-ink/65">Bulenga, Kampala, Uganda</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone size={18} className="text-forest mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-ink">Phone</p>
              <p className="text-sm text-ink/65">+256 700 000 000</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={18} className="text-forest mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-ink">Email</p>
              <p className="text-sm text-ink/65">hello@mfchildrenfoundation.org</p>
            </div>
          </div>
          <div className="aspect-video rounded-lg bg-forest/8 flex items-center justify-center text-forest/40 text-sm">
            Map placeholder &mdash; embed Google Maps here
          </div>
        </div>

        <div>
          {sent ? (
            <div className="rounded-lg border border-forest/15 bg-sand p-8 text-center">
              <p className="font-display text-xl font-semibold text-forest-dark">Message sent</p>
              <p className="mt-2 text-sm text-ink/65">Thank you &mdash; we'll get back to you within two business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink/70">Name</label>
                <input id="name" required className="mt-1.5 w-full rounded border border-forest/15 px-4 py-2.5 text-sm focus:border-gold-dark" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink/70">Email</label>
                <input id="email" type="email" required className="mt-1.5 w-full rounded border border-forest/15 px-4 py-2.5 text-sm focus:border-gold-dark" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-ink/70">Subject</label>
                <select id="subject" className="mt-1.5 w-full rounded border border-forest/15 px-4 py-2.5 text-sm focus:border-gold-dark bg-canvas">
                  <option>General inquiry</option>
                  <option>Donations</option>
                  <option>Volunteering</option>
                  <option>Partnerships &amp; corporate giving</option>
                  <option>Media</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-ink/70">Message</label>
                <textarea id="message" required rows={5} className="mt-1.5 w-full rounded border border-forest/15 px-4 py-2.5 text-sm focus:border-gold-dark" />
              </div>
              <button type="submit" className="sm:col-span-2 rounded bg-gold py-3 font-medium text-forest-dark hover:bg-gold-dark hover:text-white transition-colors">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

