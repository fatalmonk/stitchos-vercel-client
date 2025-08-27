import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/content/modules";

export default function Services(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <ModuleCard key={m.slug} title={m.title} blurb={m.blurb} bullets={m.bullets} />
        ))}
      </div>
    </div>
  )
}
