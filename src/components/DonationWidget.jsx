import { useState } from 'react'
import { Smartphone, Landmark, CreditCard, ShieldCheck } from 'lucide-react'
import { donationAmounts } from '../data/content.js'

const methods = [
  { id: 'momo', label: 'Mobile Money', icon: Smartphone, note: 'MTN & Airtel, Uganda' },
  { id: 'bank', label: 'Bank Transfer', icon: Landmark, note: 'Local & international' },
  { id: 'card', label: 'Card Payment', icon: CreditCard, note: 'Visa, Mastercard' },
]

export default function DonationWidget({ compact = false }) {
  const [amount, setAmount] = useState(donationAmounts[1])
  const [custom, setCustom] = useState('')
  const [frequency, setFrequency] = useState('once')
  const [method, setMethod] = useState('momo')

  const activeAmount = custom ? Number(custom) : amount

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: replace with a real payment integration —
    // Flutterwave or Pesapal cover Uganda Mobile Money + cards well;
    // this form currently has no backend wired up.
    alert(`This is a demo. In production this would start a ${frequency === 'monthly' ? 'monthly' : 'one-time'} ${method} donation of $${activeAmount || 0}.`)
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-canvas ${compact ? '' : 'border border-forest/10 rounded-lg p-7 md:p-9'}`}>
      <div className="flex rounded overflow-hidden border border-forest/15 mb-6 w-fit">
        {['once', 'monthly'].map((f) => (
          <button
            type="button"
            key={f}
            onClick={() => setFrequency(f)}
            className={`px-5 py-2 text-sm font-medium transition-colors ${
              frequency === f ? 'bg-forest text-white' : 'bg-transparent text-forest/70 hover:bg-forest/5'
            }`}
          >
            {f === 'once' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink/70 mb-3">Choose an amount (USD)</legend>
        <div className="grid grid-cols-4 gap-2">
          {donationAmounts.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => { setAmount(a); setCustom('') }}
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
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded border border-forest/15 px-4 py-3 text-sm focus:border-gold-dark"
          />
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink/70 mb-3">Payment method</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {methods.map(({ id, label, icon: Icon, note }) => (
            <button
              type="button"
              key={id}
              onClick={() => setMethod(id)}
              className={`flex flex-col items-start gap-1 rounded border p-3 text-left transition-colors ${
                method === id ? 'border-gold-dark bg-gold/10' : 'border-forest/15 hover:border-forest/30'
              }`}
            >
              <Icon size={18} className="text-forest" />
              <span className="text-sm font-medium text-ink">{label}</span>
              <span className="text-xs text-ink/50">{note}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-7 w-full rounded bg-gold py-3.5 font-medium text-forest-dark hover:bg-gold-dark hover:text-white transition-colors"
      >
        Donate ${activeAmount || 0}{frequency === 'monthly' ? ' / month' : ''}
      </button>

      <p className="mt-4 flex items-start gap-2 text-xs text-ink/50">
        <ShieldCheck size={15} className="mt-0.5 shrink-0" />
        Your donation directly helps provide opportunities and support for vulnerable children. Payments are processed securely; card details are never stored on our servers.
      </p>
    </form>
  )
}

