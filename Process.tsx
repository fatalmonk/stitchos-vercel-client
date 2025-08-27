export default function Process(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold">Process</h1>
      <ol className="list-decimal list-inside space-y-2 text-slate-700">
        <li><strong>Tag & Encode with Intelligence</strong> — RFID or QR applied at source, validated by AI.</li>
        <li><strong>Track & Verify in Real Time</strong> — Readers & QR stream events; anomalies highlighted automatically.</li>
        <li><strong>Analyze & Improve Continuously</strong> — Dashboards & suggestions to reduce rework and delays.</li>
      </ol>
      <pre className="rounded-xl border p-4 text-sm overflow-auto">
{`[ CUTTING ] -> [ ISSUE ] -> (RFID Portal) -> [ LINE ] -> [ QC ] -> (Carton Verify) -> [ SHIP ]`}
      </pre>
    </div>
  )
}
