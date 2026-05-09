import { Link } from 'react-router-dom'
import { testBank } from '../lib/testBank'
import { ArrowRight, BookOpenCheck } from 'lucide-react'

export default function Subjects() {
  return (
    <div className="grid gap-6">
      <header className="grid gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Fanlar</h1>
        <p className="text-sm text-slate-300">3 ta fandagi mavzulashtirilgan testlar.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {testBank.map((s) => (
          <Link
            key={s.id}
            to={`/subjects/${s.id}`}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">{s.title}</div>
              </div>
              <div className="grid size-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <BookOpenCheck className="size-5 text-slate-100" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{s.topics.length} variant</span>
              <span className="inline-flex items-center gap-1 text-slate-200 transition group-hover:translate-x-0.5">
                Ko‘rish <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
