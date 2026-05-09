import { Link, useParams } from 'react-router-dom'
import { testBank } from '../lib/testBank'
import { ArrowLeft, ArrowRight, Clock3, Shuffle } from 'lucide-react'

export default function Topics() {
  const { subjectId } = useParams()
  const subject = testBank.find((s) => s.id === subjectId)

  if (!subject) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold">Fan topilmadi</div>
        <Link to="/subjects" className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300">
          <ArrowLeft className="size-4" /> Orqaga
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      <header className="grid gap-2">
        <Link to="/subjects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
          <ArrowLeft className="size-4" /> Fanlar
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight">{subject.title} — Variantlar</h1>
        <p className="text-sm text-slate-300">Mavzuni tanlang va testni boshlang.</p>
      </header>

      <div className="grid gap-4">
        {subject.topics.map((t) => (
          <div key={t.id} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-semibold">{t.title}</div>
                
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                    <Shuffle className="size-3.5" /> Avto aralash
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                    <Clock3 className="size-3.5" /> {t.timePerQuestionSec} soniya/savol
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                    {t.questions.length} ta savol
                  </span>
                </div>
              </div>

              <Link
                to={`/quiz/${subject.id}/${t.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Testni ochish <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
