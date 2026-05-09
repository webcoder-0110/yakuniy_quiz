import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenCheck, Clock3, Shuffle } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid gap-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.16),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(34,197,94,0.12),transparent_45%)]" />
        <div className="relative grid gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
            <BookOpenCheck className="size-4" />
            3 ta fan • Yakuniy Nazorat testlari
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Dinshunoslik, Falsafa va Dasturlash bo‘yicha test platformasi
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-slate-300 sm:text-base">
            Fanni tanlang → mavzuni tanlang → testni bajaring. Har bir savolga 25 soniya.
            Savollar va javoblar tartibi har safar avtomatik aralashadi.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/subjects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Boshlash <ArrowRight className="size-4" />
            </Link>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Badge icon={<Shuffle className="size-4" />} title="Avto aralash" desc="Savol/javoblar" />
              <Badge icon={<Clock3 className="size-4" />} title="Taymer" desc="25 soniya" />
              <Badge icon={<BookOpenCheck className="size-4" />} title="Natija" desc="Foiz va ball" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Tez ko‘rsatma</h2>
        <ol className="grid gap-2 text-sm text-slate-300">
          <li>1) “Fanlar” bo‘limiga o‘ting.</li>
          <li>2) Dinshunoslik / Falsafa / Dasturlashdan birini tanlang.</li>
          <li>3) Variantlardan birini tanlang va testni boshlang.</li>
          <li>4) Yakunda natijani ko‘rasiz.</li>
        </ol>
      </section>
    </div>
  )
}

function Badge({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-slate-100">{title}</div>
        <div className="text-[11px] text-slate-400">{desc}</div>
      </div>
    </div>
  )
}
