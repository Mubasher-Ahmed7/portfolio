import { useAuth } from './context/AuthContext'
import Auth from './components/Auth.jsx'
import TaskList from './components/TaskList.jsx'

export default function App() {
  const { user, loading, logout } = useAuth()

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading...</div>
  if (!user) return <Auth />

  return (
    <div>
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <span className="font-semibold">Signed in as {user.email}</span>
        <button onClick={logout} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-slate-500">
          Logout
        </button>
      </header>
      <TaskList />
    </div>
  )
}