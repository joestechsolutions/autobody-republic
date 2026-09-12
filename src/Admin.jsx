import React, { useState } from 'react'

const DEMO = [
  { date: 'Fri 9/12', time: '9:00 AM', dealer: 'Pilot Ford', vin: '1FMCU…4K2', ro: '44102', doors: 2, status: 'booked', pay: 'pending' },
  { date: 'Fri 9/12', time: '11:00 AM', dealer: 'Pilot Ford', vin: '3FMCR…9X1', ro: '44117', doors: 1, status: 'booked', pay: 'paid' },
  { date: 'Mon 9/15', time: '1:00 PM', dealer: 'Pilot Ford', vin: '1FMCU…7B8', ro: '44201', doors: 1, status: 'booked', pay: 'paid' },
]

export default function Admin() {
  const [blocks, setBlocks] = useState([])
  const [blockDate, setBlockDate] = useState('')

  function addBlock() {
    if (!blockDate) return
    setBlocks([...blocks, blockDate])
    setBlockDate('')
  }

  return (
    <div className="wrap bk">
      <h1>Admin — schedule</h1>
      <p className="sub">Your week at a glance. Demo data until the database is connected.</p>

      <div className="card pad">
        <h3>Upcoming jobs</h3>
        <table className="admintable">
          <thead><tr><th>When</th><th>Dealer</th><th>VIN</th><th>RO</th><th>Doors</th><th>Pay</th><th></th></tr></thead>
          <tbody>
            {DEMO.map((j, i) => (
              <tr key={i}>
                <td>{j.date} · {j.time}</td><td>{j.dealer}</td><td>{j.vin}</td><td>{j.ro}</td><td>{j.doors}</td>
                <td><span className={'pay ' + j.pay}>{j.pay}</span></td>
                <td><button className="mini" onClick={() => {}}>Mark done</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card pad">
        <h3>Block out dates</h3>
        <p className="fine">Blackout a whole day (parts wait, personal, paint-shop run).</p>
        <div className="blockrow">
          <input type="date" value={blockDate} onChange={e => setBlockDate(e.target.value)} />
          <button className="btn btn-ghost" onClick={addBlock}>Block</button>
        </div>
        {blocks.length > 0 && (
          <div className="blocks">{blocks.map(b => (
            <span key={b} className="blockchip" onClick={() => setBlocks(blocks.filter(x => x !== b))}>{b} ✕</span>
          ))}</div>
        )}
      </div>
      <p className="fine"><a href="/">← Back to site</a></p>
    </div>
  )
}
