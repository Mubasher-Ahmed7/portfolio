import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Auth() {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (isLogin) await login(form.email, form.password)
      else await register(form.email, form.password)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Realtime Tasks</h1>
        <p className="mt-1 text-center text-sm text-slate-500">Firebase Auth + Firestore demo</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {error && <p className="text-sm text-red-600 break-words">{error}</p>}
          <button className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-orange-600 hover:underline">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>

        <p className="mt-6 rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
          Set up your Firebase project and paste your config in src/firebase/config.js to use this demo.
        </p>
      </div>
    </div>
  )
}