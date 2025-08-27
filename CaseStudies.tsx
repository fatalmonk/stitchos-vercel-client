export default function CaseStudies(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {["KTL Pilot Line", "Denim Line Rollout", "Carton EPC Verification"].map((t) => (
          <div key={t} className="rounded-2xl border p-5">
            <h3 className="font-semibold">{t}</h3>
            <ul className="text-sm text-slate-600 mt-2 space-y-1">
              <li>Problem → manual visibility & rework</li>
              <li>Solution → hybrid RFID + QR</li>
              <li>Outcome → higher accuracy & on-time pack</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
