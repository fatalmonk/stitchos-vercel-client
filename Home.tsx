import Hero from "@/components/Hero";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/content/modules";
import { kpis } from "@/content/kpis";

export default function Home(){
  return (
    <div className="space-y-10">
      <Hero
        title="Weaving Intelligence Into Every Thread"
        subtitle="AI‑driven RFID, QR & IoT tracking for textile factories."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Download Brochure", href: "#" }}
      />
      <section>
        <h2 className="text-2xl font-display font-semibold mb-4">What We Do</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <div key={i} className="rounded-2xl border p-5 text-center">
              <div className="text-3xl font-display">{k.value}</div>
              <div className="text-slate-600">{k.label}</div>
              <div className="text-xs text-slate-500 mt-1">{k.hint}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-display font-semibold mb-4">Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <ModuleCard key={m.slug} title={m.title} blurb={m.blurb} bullets={m.bullets} />
          ))}
        </div>
      </section>
    </div>
  )
}
