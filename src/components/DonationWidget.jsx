import { useState } from 'react'
import { Smartphone, ExternalLink, ShieldCheck, Copy, Check, Mail } from 'lucide-react'
import { donationAmounts, paypalMeLink, airtelMoneyNumber, contactEmail } from '../data/content.js'

const methods = [
  { id: 'paypal', label: 'PayPal', note: 'Card or PayPal balance, worldwide' },
  { id: 'airtel', label: 'Airtel Money', note: 'Send directly from your phone, Uganda' },
]

export default function DonationWidget({ compact = false }) {
  const [amount, setAmount] = useState(donationAmounts[1])
  const [custom, setCustom] = useState('')
  const [frequency, setFrequency] = useState('once')
  const [method, setMethod] = useState('paypal')
  const [showAirtelDetails, setShowAirtelDetails] = useState(false)
  const [copied, setCopied] = useState(false)

  const activeAmount = custom ? Number(custom) : amount

  function handleCopyNumber() {
    navigator.clipboard?.writeText(airtelMoneyNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!activeAmount || activeAmount <= 0) return

    if (method === 'paypal') {
      // paypal.me supports one-time payments only — there is no recurring
      // option through a plain paypal.me link, so "monthly" is a manual
      // repeat, not an automated subscription.
      const url = `${paypalMeLink}/${activeAmount}USD`
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }

    if (method === 'airtel') {
      // No payment link or webhook exists for Airtel Money here — this
      // reveals transfer instructions instead of pretending to process
      // anything automatically.
      setShowAirtelDetails(true)
    }
  }

  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Airtel Money donation — $${activeAmount}${frequency === 'monthly' ? '/month' : ''}`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI just sent $${activeAmount} (or the UGX equivalent) via Airtel Money to ${airtelMoneyNumber}.\n\nMy name: \nDate/time sent: \nAirtel transaction reference (if available): \n\nThanks!`
  )}`

  return (
    <form onSubmit={handleSubmit} className={`bg-canvas ${compact ? '' : 'border border-forest/10 rounded-lg p-7 md:p-9'}`}>
      <div className="flex rounded overflow-hidden border border-forest/15 mb-6 w-fit">
        {['once', 'monthly'].map((f) => (
          <button
            type="button"
            key={f}
            onClick={() => { setFrequency(f); setShowAirtelDetails(false) }}
            className={`px-5 py-2 text-sm font-medium transition-colors ${
              frequency === f ? 'bg-forest text-white' : 'bg-transparent text-forest/70 hover:bg-forest/5'
            }`}
          >
            {f === 'once' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      {frequency === 'monthly' && (
        <p className="mb-6 text-xs text-clay bg-clay/10 border border-clay/20 rounded px-3 py-2">
          Monthly donations currently repeat manually — PayPal.me and Airtel Money transfers don't auto-recur, so you'll get a reminder from us (or can just repeat this each month).
        </p>
      )}

      <fieldset>
        <legend className="text-sm font-medium text-ink/70 mb-3">Choose an amount (USD)</legend>
        <div className="grid grid-cols-4 gap-2">
          {donationAmounts.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => { setAmount(a); setCustom(''); setShowAirtelDetails(false) }}
              className={`py-3 rounded border text-sm font-medium transition-colors ${
                amount === a && !custom
                  ? 'border-gold-dark bg-gold/15 text-forest-dark'
                  : 'border-forest/15 text-ink/70 hover:border-forest/30'
              }`}
            >
              ${a}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
          <input
            id="custom-amount"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Or enter a custom amount"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setShowAirtelDetails(false) }}
            className="w-full rounded border border-forest/15 px-4 py-3 text-sm focus:border-gold-dark"
          />
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink/70 mb-3">Payment method</legend>
        <div className="grid grid-cols-2 gap-2">
          {methods.map(({ id, label, note }) => (
            <button
              type="button"
              key={id}
              onClick={() => { setMethod(id); setShowAirtelDetails(false) }}
              className={`flex flex-col items-start gap-1 rounded border p-3 text-left transition-colors ${
                method === id ? 'border-gold-dark bg-gold/10' : 'border-forest/15 hover:border-forest/30'
              }`}
            >
              {id === 'airtel' ? <Smartphone size={18} className="text-forest" /> : <ExternalLink size={18} className="text-forest" />}
              <span className="text-sm font-medium text-ink">{label}</span>
              <span className="text-xs text-ink/50">{note}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {!showAirtelDetails && (
        <button
          type="submit"
          className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded bg-gold py-3.5 font-medium text-forest-dark hover:bg-gold-dark hover:text-white transition-colors"
        >
          {method === 'paypal'
            ? <>Continue to PayPal <ExternalLink size={16} /></>
            : <>Show Airtel Money details</>}
        </button>
      )}

      {showAirtelDetails && method === 'airtel' && (
        <div className="mt-7 rounded-lg border border-forest/15 bg-sand p-5">
          <p className="text-sm text-ink/80">
            Send <span className="font-semibold text-forest-dark">${activeAmount}</span> (or the UGX equivalent at today's rate) via Airtel Money to:
          </p>
          <div className="mt-3 flex items-center justify-between gap-3 rounded border border-forest/15 bg-canvas px-4 py-3">
            <span className="font-display text-lg font-semibold text-forest-dark tracking-wide">{airtelMoneyNumber}</span>
            <button
              type="button"
              onClick={handleCopyNumber}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-gold-dark"
            >
              {copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}
            </button>
          </div>
          <p className="mt-3 text-xs text-ink/60 leading-relaxed">
            Dial <span className="font-medium">*185#</span> or use the Airtel Money app, choose "Send Money," and enter the number above. Once sent, letting us know helps us match your donation and send a receipt.
          </p>
          <a
            href={mailtoHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-gold-dark underline underline-offset-4 decoration-1"
          >
            <Mail size={15} /> I've sent it — notify us
          </a>
        </div>
      )}

      <p className="mt-4 flex items-start gap-2 text-xs text-ink/50">
        <ShieldCheck size={15} className="mt-0.5 shrink-0" />
        {method === 'paypal'
          ? "You'll be taken to PayPal's own secure checkout — we never see or store your card or PayPal details."
          : 'Airtel Money transfers go directly from your phone to ours — we never see your PIN or phone credentials.'}
      </p>
    </form>
  )
        }
