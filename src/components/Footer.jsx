import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { orgName } from '../data/content.js'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    // TODO: wire to a real newsletter provider (Mailchimp / Buttondown / ConvertKit) via API route
    setSubscribed(true)
  }

  return (
    <footer className="bg-forest-dark text-white/85">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Heart size={18} className="text-gold-light" />
            {orgName}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Supporting needy and vulnerable children across Uganda with education, essential care, and opportunity.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-gold-light"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gold-light"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter / X" className="hover:text-gold-light"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-white/65">
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/programs" className="hover:text-white">Our programs</Link></li>
            <li><Link to="/stories" className="hover:text-white">Impact stories</Link></li>
            <li><Link to="/updates" className="hover:text-white">Updates</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Bulenga, Kampala, Uganda</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +256 700 000 000</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> hello@mfchildrenfoundation.org</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Stay updated</h3>
          <p className="text-sm text-white/65 mb-3">Get program updates and children's success stories, a few times a month.</p>
          {subscribed ? (
            <p className="text-sm text-gold-light">You're subscribed — thank you.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full min-w-0 rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 border border-white/15 focus:border-gold-light"
              />
              <button type="submit" className="shrink-0 rounded bg-gold px-4 py-2 text-sm font-medium text-forest-dark hover:bg-gold-dark hover:text-white">
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {orgName}. Registered nonprofit organisation, Uganda. Reg. No. [XXXXX].</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white/80">Privacy</Link>
            <Link to="/contact" className="hover:text-white/80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

