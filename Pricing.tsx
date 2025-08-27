export default function Pricing(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {name:"Starter (QR-first)", price:"Tk 0/mo (pilot)", items:["1 line","Basic dashboards","Email support"]},
          {name:"Pro (Hybrid RFID)", price:"Tk 499–599/mo", items:["Multi-line","EPCIS export","SLA support"]},
          {name:"Enterprise", price:"Custom", items:["Multi-site","Advanced QC templates","DPP roadmap"]},
        ].map((p) => (
          <div key={p.name} className="rounded-2xl border p-5">
            <h3 className="font-semibold">{p.name}</h3>
            <div className="text-2xl mt-1">{p.price}</div>
            <ul className="text-sm text-slate-600 mt-2 space-y-1">{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}
