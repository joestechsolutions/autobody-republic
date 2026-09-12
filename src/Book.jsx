import React, { useState } from 'react'

const RATE = 220 // per door, pilot rate

// Deterministic slot generator placeholder — replaced by /api/availability
// when Supabase lands. 9:00–16:00, 1hr slots, travel-gap pattern = max ~4/day.
function slotsFor(dateStr) {
  if (!dateStr) return []
  const d = new Date(dateStr + 'T00:00:00')
  const dow = d.getDay()
  if (dow === 0 || dow === 6) return []
  const seed = dateStr.split('-').reduce((a, x) => a + Number(x), 0)
  return [9, 11, 13, 15].map((h, i) => ({
    min: h * 60,
    label: `${h % 12 === 0 ? 12 : h % 12}:00 ${h < 12 ? 'AM' : 'PM'}`,
    open: (seed + i) % 3 !== 0,
  }))
}

function Bear({ size = 34 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Autobody Republic">
      <circle cx="24" cy="14" r="7" fill="#7a4a2b"/><circle cx="42" cy="14" r="7" fill="#7a4a2b"/>
      <ellipse cx="32" cy="34" rx="20" ry="17" fill="#7a4a2b"/>
      <rect x="18" y="28" width="28" height="14" rx="7" fill="#9aa0a6"/>
      <circle cx="25" cy="33" r="4.5" fill="#565b60"/><rect x="33" y="30" width="8" height="7" rx="2" fill="#565b60"/>
      <circle cx="26" cy="26" r="2" fill="#111"/><circle cx="38" cy="26" r="2" fill="#111"/>
    </svg>
  )
}

function Header() {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a className="brand" href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Bear size={34} />
          <div className="brand-name">AUTOBODY <em>REPUBLIC</em></div>
        </a>
        <a className="hdr-link" href="/">← Site</a>
      </div>
    </header>
  )
}

export default function Book() {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState(null)
  const [doors, setDoors] = useState(1)
  const [vin, setVin] = useState('')
  const [ro, setRo] = useState('')
  const [dealer, setDealer] = useState('')
  const [done, setDone] = useState(null)
  const total = RATE * doors

  const today = new Date().toISOString().slice(0, 10)
  const slots = slotsFor(date)

  function pay() {
    if (!vin || !dealer) return alert('Fill VIN and dealership name')
    setDone({ date, slot, doors, total })
  }

  return (
    <>
      <Header />
      <div className="wrap bk">
        <h1>Schedule a vehicle</h1>
        <p className="sub">Self-serve — pick your slot, enter the vehicle, pay by card. Instant confirmation.</p>

        {done ? (
          <div className="card pad done">
            <h3>✓ Slot held</h3>
            <p><strong>{done.slot.label}</strong> on <strong>{done.date}</strong> — {done.doors} door{done.doors > 1 ? 's' : ''}, total <strong>${done.total}</strong></p>
            <p className="fine">Demo mode: card payment activates when the shop's Stripe account connects. You'd pay via Stripe Checkout and the slot confirms instantly.</p>
            <p className="fine">Questions: <a href="tel:+18054235325">(805) 423-5325</a></p>
          </div>
        ) : (
          <>
            <div className="card pad bk-step">
              <h3>1 · Pick a day</h3>
              <input type="date" min={today} value={date} onChange={e => { setDate(e.target.value); setSlot(null) }} />
            </div>

            {date && (
              <div className="card pad bk-step">
                <h3>2 · Pick a time</h3>
                {slots.length === 0 ? <p className="fine">Closed this day (no weekend service).</p> : (
                  <div className="slotgrid">
                    {slots.map(s => (
                      <button key={s.min} className={'slot' + (slot?.min === s.min ? ' on' : '') + (s.open ? '' : ' off')}
                        disabled={!s.open} onClick={() => setSlot(s)}>{s.label}</button>
                    ))}
                  </div>
                )}
                <p className="fine">One slot = one vehicle, about one hour (both doors). Travel time between dealerships is auto-buffered.</p>
              </div>
            )}

            {slot && (
              <div className="card pad bk-step">
                <h3>3 · Vehicle details</h3>
                <label>Dealership name<input value={dealer} onChange={e => setDealer(e.target.value)} placeholder="e.g. Kearny Mesa Ford" /></label>
                <label>VIN<input value={vin} onChange={e => setVin(e.target.value)} maxLength={17} placeholder="17-character VIN" /></label>
                <label>Repair Order # (RO)<input value={ro} onChange={e => setRo(e.target.value)} placeholder="RO number" /></label>
                <label>Doors
                  <div className="doorpick">
                    <button className={doors === 1 ? 'on' : ''} onClick={() => setDoors(1)}>One door</button>
                    <button className={doors === 2 ? 'on' : ''} onClick={() => setDoors(2)}>Both doors</button>
                  </div>
                </label>
                <div className="bk-total">
                  <span>Total ({doors} door{doors > 1 ? 's' : ''} × ${RATE})</span>
                  <strong>${doors * RATE}</strong>
                </div>
                <button className="btn btn-red btn-big" onClick={pay}>Pay ${doors * RATE} & confirm</button>
                <p className="fine">Card payment placeholder — Stripe Checkout wires in with the shop's account keys.</p>
              </div>
            )}
          </>
        )}
        <p className="fine" style={{ marginTop: 18 }}><a href="/">← Back to Autobody Republic</a></p>
      </div>
    </>
  )
}
