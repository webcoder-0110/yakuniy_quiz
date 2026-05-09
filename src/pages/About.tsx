import { Link } from 'react-router-dom'
import { ArrowRight, FileCode2 } from 'lucide-react'

export default function About() {
  return (
    <div className="grid gap-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Ma’lumot</h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Bu sayt namuna sifatida ishlaydi: 3 ta fan, har bir fanda mavzular, har bir mavzuda test savollari.
          Har safar test boshlanganda savollar va javoblar tartibi avtomatik aralashadi.
        </p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Savollarni qanday almashtiraman?</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          <span className="font-mono text-slate-200">src/lib/testBank.ts</span> faylini oching.
          Har bir fan ichida <span className="font-mono text-slate-200">topics</span> ro‘yxati,
          har bir mavzu ichida <span className="font-mono text-slate-200">questions</span> bo‘ladi.
          Shu joyga o‘zingizning savollaringizni qo‘shib, to‘g‘ri javob indeksini
          <span className="font-mono text-slate-200"> correctIndex</span> orqali belgilang.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/subjects"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Fanlarni ko‘rish <ArrowRight className="size-4" />
          </Link>
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300 ring-1 ring-white/10">
            <FileCode2 className="size-4" />
            Manba fayl: <span className="font-mono text-slate-200">src/lib/testBank.ts</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Taymer</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Hozirgi sozlama: har bir savol uchun <span className="font-semibold text-white">25 soniya</span>.
          Agar boshqa vaqt kerak bo‘lsa, mavzu ichidagi <span className="font-mono text-slate-200">timePerQuestionSec</span>
          qiymatini o‘zgartiring.
        </p>
      </section>
    </div>
  )
}
