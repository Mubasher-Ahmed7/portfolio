import { useAuth } from './context/AuthContext'
import Auth from './components/Auth.jsx'
import TodoList from './components/TodoList.jsx'

export default function App() {
  const { user, logout } = useAuth()

  if (!user) return <Auth />

  return (
    <div>
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <span className="font-semibold">Welcome, {user.name || user.email}</span>
        <button onClick={logout} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-slate-500">
          Logout
        </button>
      </header>
      <TodoList />
    </div>
  )
}