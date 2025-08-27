import { Link, Outlet, NavLink } from "react-router-dom";

export default function App(){
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold">StitchOS</Link>
          <ul className="flex gap-4 text-sm">
            {["/", "/services", "/process", "/case-studies", "/pricing", "/contact"].map((p, i) => (
              <li key={i}>
                <NavLink to={p === "/" ? "/" : p} className={({isActive}) => `px-2 py-1 rounded ${isActive ? "text-ink font-semibold" : "text-slate-600 hover:text-ink"}`}>
                  {p === "/" ? "Home" : p.replace("/", "").replace("-", " ").replace("-", " ")}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="px-3 py-2 rounded-lg bg-brand-gradient text-white text-sm">Request a Demo</Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-10">
        <Outlet/>
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} StitchOS — Weaving Intelligence Into Every Thread.
        </div>
      </footer>
    </div>
  )
}
