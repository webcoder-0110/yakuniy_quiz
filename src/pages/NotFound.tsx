import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold">Sahifa topilmadi (404)</div>
      <p className="mt-2 text-sm text-slate-300">Bosh sahifaga qayting.</p>
      <Link to="/" className="mt-4 inline-flex items-center gap-2 text-sm text-sky-300">
        <ArrowLeft className="size-4" /> Bosh sahifa
      </Link>
    </div>
  )
}
