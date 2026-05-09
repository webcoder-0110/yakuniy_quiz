import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AppShell } from './components/AppShell'

export default function App() {
  return <RouterProvider router={router} />
}

export function RootLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
