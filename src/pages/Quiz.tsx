import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { testBank } from '../lib/testBank'
import { buildSession, scoreSession } from '../lib/quizEngine'
import { cn, formatTime } from '../lib/utils'
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flag,
  RotateCcw,
  XCircle,
} from 'lucide-react'

type Status = 'idle' | 'in_progress' | 'finished'

export default function Quiz() {
  const { subjectId, topicId } = useParams()
  const navigate = useNavigate()

  const topic = useMemo(() => {
    const subj = testBank.find((s) => s.id === subjectId)
    return subj?.topics.find((t) => t.id === topicId)
  }, [subjectId, topicId])

  const session = useMemo(() => (topic ? buildSession(topic) : null), [topic])

  const [status, setStatus] = useState<Status>('idle')
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | null>>({})
  const [remaining, setRemaining] = useState<number>(session?.timePerQuestionSec ?? 25)
  const [reveal, setReveal] = useState(false)
  const revealTimerRef = useRef<number | null>(null)

  const tickRef = useRef<number | null>(null)

  const current = session?.questions[idx]

  const progress = session ? Math.round(((idx + 1) / session.questions.length) * 100) : 0

  useEffect(() => {
    if (!session) return
    setRemaining(session.timePerQuestionSec)
    setIdx(0)
    setAnswers({})
    setStatus('idle')
    setReveal(false)
    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
    revealTimerRef.current = null
  }, [session])

  useEffect(() => {
    return () => {
      if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
      revealTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!session) return
    if (status !== 'in_progress') return

    if (tickRef.current) window.clearInterval(tickRef.current)

    tickRef.current = window.setInterval(() => {
      setRemaining((r) => r - 1)
    }, 1000)

    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current)
      tickRef.current = null
    }
  }, [status, session])

  useEffect(() => {
    if (!session) return
    if (status !== 'in_progress') return
    if (remaining > 0) return

    // vaqt tugasa: avtomatik keyingi savolga o'tadi (javob bo'lmasa null)
    goNext(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, status, session])

  if (!topic || !session) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold">Test topilmadi</div>
        <Link to="/subjects" className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300">
          <ArrowLeft className="size-4" /> Fanlar
        </Link>
      </div>
    )
  }

  // session null emasligini TS'ga aniq qilib beramiz (yuqoridagi guard sabab)
  const sessionSafe = session

  const total = sessionSafe.questions.length
  const chosen = current ? answers[current.id] ?? null : null

  const canPrev = status !== 'idle' && idx > 0
  const canNext = status !== 'idle' && idx < total - 1

  function start() {
    setStatus('in_progress')
    setIdx(0)
    setRemaining(sessionSafe.timePerQuestionSec)
    setReveal(false)
  }

  function restart() {
    // Qayta aralashtirish: sahifani soft-reload qilamiz (session qayta build bo'ladi).
    // Ba'zi router versiyalarida navigate(0) noaniq ishlashi mumkin, shuning uchun window.location.
    window.location.reload()
  }

  function choose(optionId: string) {
    if (status !== 'in_progress') return
    if (!current) return
    if (reveal) return

    setAnswers((a) => ({ ...a, [current.id]: optionId }))
    setReveal(true)

    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
    revealTimerRef.current = window.setTimeout(() => {
      setReveal(false)
      goNext(false)
    }, 3000)
  }

  function goPrev() {
    if (idx <= 0) return
    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
    revealTimerRef.current = null
    setReveal(false)
    setIdx((i) => i - 1)
    setRemaining(sessionSafe.timePerQuestionSec)
  }

  function goNext(auto = false) {
    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
    revealTimerRef.current = null
    setReveal(false)
    if (idx >= total - 1) {
      finish()
      return
    }
    setIdx((i) => i + 1)
    setRemaining(sessionSafe.timePerQuestionSec)
    if (auto) {
      // no-op
    }
  }

  function finish() {
    setStatus('finished')
    if (tickRef.current) window.clearInterval(tickRef.current)
    tickRef.current = null
    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current)
    revealTimerRef.current = null
    setReveal(false)
  }

  const result = status === 'finished' ? scoreSession(sessionSafe, answers) : null

  return (
    <div className="grid gap-6">
      <header className="grid gap-2">
        <Link
          to={`/subjects/${subjectId}`}
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
        >
          <ArrowLeft className="size-4" /> Mavzular
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight">{topic.title}</h1>
        
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <div className="text-xs text-slate-400">Jarayon</div>
            <div className="text-sm font-semibold">
              {status === 'idle' ? 'Boshlashga tayyor' : status === 'in_progress' ? 'Test ketmoqda' : 'Yakunlandi'}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-950/40 px-4 py-3 text-sm ring-1 ring-white/10">
              <Clock3 className="size-4 text-slate-300" />
              <span className={cn('font-mono', remaining <= 5 && status === 'in_progress' && 'text-rose-300')}>
                {formatTime(remaining)}
              </span>
              <span className="text-slate-400">/ {formatTime(session.timePerQuestionSec)}</span>
            </div>

            {status === 'idle' ? (
              <button
                onClick={start}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Boshlash <Flag className="size-4" />
              </button>
            ) : (
              <button
                onClick={restart}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Qayta boshlash <RotateCcw className="size-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-sky-400" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
            <span>
              Savol {Math.min(idx + 1, total)} / {total}
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      </section>

      {status === 'finished' && result ? (
        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Natija</h2>
              <p className="mt-1 text-sm text-slate-300">
                To‘g‘ri: <span className="font-semibold text-white">{result.correct}</span> / {result.total} •
                Noto‘g‘ri: <span className="font-semibold text-white">{result.wrong}</span> • Foiz:{' '}
                <span className="font-semibold text-white">{result.percent}%</span>
              </p>
            </div>
            <Link
              to={`/subjects/${subjectId}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Boshqa mavzu <ChevronRight className="size-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-3">
            {session.questions.map((q, i) => {
              const picked = answers[q.id] ?? null
              const pickedOpt = q.options.find((o) => o.id === picked)
              const correctOpt = q.options.find((o) => o.isCorrect)
              const isCorrect = Boolean(pickedOpt?.isCorrect)
              return (
                <div key={q.id} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-400">Savol {i + 1}</div>
                      <div className="mt-1 text-sm font-semibold">{q.prompt}</div>
                      <div className="mt-2 text-sm text-slate-300">
                        Sizning javobingiz:{' '}
                        <span className={cn('font-semibold', isCorrect ? 'text-emerald-300' : 'text-rose-300')}>
                          {pickedOpt ? pickedOpt.text : '—'}
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-slate-300">
                        To‘g‘ri javob: <span className="font-semibold text-emerald-300">{correctOpt?.text}</span>
                      </div>
                    </div>
                    {isCorrect ? (
                      <CheckCircle2 className="mt-1 size-5 text-emerald-300" />
                    ) : (
                      <XCircle className="mt-1 size-5 text-rose-300" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ) : (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid gap-2">
              <div className="text-xs text-slate-400">Savol</div>
              <div className="text-lg font-semibold">{current?.prompt}</div>
              <div className="text-xs text-slate-400">
                Javoblar tartibi avtomatik aralashadi. Har safar qayta boshlaganda ham.
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={!canPrev}
                onClick={goPrev}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold ring-1 ring-white/15 transition',
                  canPrev ? 'bg-white/10 hover:bg-white/15' : 'bg-white/5 text-slate-500',
                )}
              >
                <ChevronLeft className="size-4" /> Oldingi
              </button>
              <button
                disabled={!canNext}
                onClick={() => goNext(false)}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold ring-1 ring-white/15 transition',
                  canNext ? 'bg-white/10 hover:bg-white/15' : 'bg-white/5 text-slate-500',
                )}
              >
                Keyingi <ChevronRight className="size-4" />
              </button>
              <button
                disabled={status === 'idle'}
                onClick={finish}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold ring-1 ring-white/15 transition',
                  status === 'idle' ? 'bg-white/5 text-slate-500' : 'bg-white/10 hover:bg-white/15',
                )}
              >
                Yakunlash <CheckCircle2 className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {current?.options.map((o) => {
              const selected = chosen === o.id

              const correctOpt = current?.options.find((x) => x.isCorrect) ?? null
              const isCorrect = Boolean(selected && o.isCorrect)
              const isWrongSelected = Boolean(selected && !o.isCorrect)
              const isCorrectToShow = Boolean(reveal && correctOpt && o.id === correctOpt.id)

              const base = 'group w-full rounded-2xl border px-4 py-3 text-left text-sm transition'
              const disabledStyle = status !== 'in_progress' ? 'opacity-70' : ''

              const revealStyle = reveal
                ? isCorrect || isCorrectToShow
                  ? 'border-emerald-400/60 bg-emerald-500/10 ring-1 ring-emerald-400/25'
                  : isWrongSelected
                    ? 'border-rose-400/60 bg-rose-500/10 ring-1 ring-rose-400/25'
                    : 'border-white/10 bg-slate-950/20'
                : selected
                  ? 'border-sky-400/60 bg-sky-500/10 ring-1 ring-sky-400/30'
                  : 'border-white/10 bg-slate-950/20 hover:bg-white/5'

              return (
                <button
                  key={o.id}
                  onClick={() => choose(o.id)}
                  disabled={status !== 'in_progress' || reveal}
                  className={cn(
                    base,
                    revealStyle,
                    disabledStyle,
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-100">{o.text}</div>
                    {reveal ? (
                      isCorrect || isCorrectToShow ? (
                        <CheckCircle2 className="size-5 text-emerald-300" />
                      ) : isWrongSelected ? (
                        <XCircle className="size-5 text-rose-300" />
                      ) : null
                    ) : selected ? (
                      <CheckCircle2 className="size-5 text-sky-300" />
                    ) : null}
                  </div>
                </button>
              )
            })}
          </div>

          {reveal && current ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm">
              {(() => {
                const pickedId = answers[current.id] ?? null
                const pickedOpt = current.options.find((x) => x.id === pickedId) ?? null
                const correctOpt = current.options.find((x) => x.isCorrect) ?? null
                const ok = Boolean(pickedOpt?.isCorrect)
                return (
                  <div className="flex flex-col gap-1">
                    <div className={cn('font-semibold', ok ? 'text-emerald-300' : 'text-rose-300')}>
                      {ok ? "To‘g‘ri!" : "Noto‘g‘ri."}
                    </div>
                    {!ok && correctOpt ? (
                      <div className="text-slate-300">
                        To‘g‘ri javob: <span className="font-semibold text-emerald-300">{correctOpt.text}</span>
                      </div>
                    ) : null}
                  </div>
                )
              })()}
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>
              Holat: <span className="text-slate-200">{status === 'idle' ? 'Boshlanmagan' : 'Davom etmoqda'}</span>
            </div>
            <div>
              Agar vaqt tugasa, avtomatik keyingi savolga o‘tadi.
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
