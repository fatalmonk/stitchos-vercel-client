type CTA = { label: string; href: string };
export default function Hero({ title, subtitle, primary, secondary }: { title: string; subtitle: string; primary: CTA; secondary?: CTA }){
  return (
    <section className="relative overflow-hidden rounded-2xl bg-brand-gradient text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href={primary.href} className="px-6 py-3 bg-white text-ink rounded-lg font-medium">{primary.label}</a>
          {secondary && (<a href={secondary.href} className="px-6 py-3 border border-white/80 rounded-lg hover:bg-white/10">{secondary.label}</a>)}
        </div>
      </div>
    </section>
  )
}
