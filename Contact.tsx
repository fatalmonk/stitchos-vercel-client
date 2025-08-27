export default function Contact(){
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-display font-bold">Contact</h1>
      <form className="space-y-3" onSubmit={(e)=> e.preventDefault()}>
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Name" required />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" required />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Company" />
        <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone" />
        <textarea className="w-full border rounded-lg px-3 py-2" placeholder="Message" rows={4}></textarea>
        <button className="px-4 py-2 rounded-lg bg-brand-gradient text-white">Send</button>
      </form>
    </div>
  )
}
