import { Link, NavLink } from 'react-router-dom'
import { BookOpenCheck, Home, Info, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <Sparkles className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Yakuniy Nazorat Testlari</div>
              
            </div>
          </Link>

          <nav className="flex items-center gap-2 text-sm">
            <TopNav to="/" icon={<Home className="size-4" />} label="Bosh sahifa" />
            <TopNav to="/subjects" icon={<BookOpenCheck className="size-4" />} label="Fanlar" />
            
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>

      <footer className="border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-300">
          <div className=" text-slate-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>Bizdan biror yaxshilik ko'rgan bo'lsangiz ota onamiz haqqiga duo qiling</div>
            <div className='text-white'>
             Savollar va takliflar uchun: @fx_xolmurodov
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TopNav({
  to,
  icon,
  label,
}: {
  to: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-white/10 transition',
          isActive
            ? 'bg-white/10 text-white'
            : 'text-slate-300 hover:bg-white/5 hover:text-white',
        )
      }
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </NavLink>
  )
}
