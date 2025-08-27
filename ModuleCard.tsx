export default function ModuleCard({ icon, title, blurb, bullets }: { icon?: React.ReactNode; title: string; blurb: string; bullets: string[] }){
  return (
    <div className="rounded-2xl border p-5 hover:shadow transition bg-white">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-600 mb-3">{blurb}</p>
      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}
