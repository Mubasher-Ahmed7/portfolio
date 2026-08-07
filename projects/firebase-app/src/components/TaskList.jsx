import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/index.js'
import { useAuth } from '../context/AuthContext'

export default function TaskList() {
  const { user } = useAuth()
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (!user) return
    const q = query(collection(db, 'tasks'))
    const unsub = onSnapshot(q, (snap) => {
      setTasks(
        snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((t) => t.uid === user.uid)
          .sort((a, b) => b.createdAt - a.createdAt),
      )
    })
    return unsub
  }, [user])

  const add = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await addDoc(collection(db, 'tasks'), {
      title,
      completed: false,
      uid: user.uid,
      createdAt: Date.now(),
    })
    setTitle('')
  }

  const toggle = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), { completed: !task.completed })
  }

  const remove = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">My Tasks</h1>

        <form onSubmit={add} className="mt-6 flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="rounded-lg bg-orange-500 px-5 font-semibold text-white hover:bg-orange-600">Add</button>
        </form>

        <ul className="mt-6 space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <input type="checkbox" checked={task.completed} onChange={() => toggle(task)} className="h-5 w-5" />
              <span className={`flex-1 ${task.completed ? 'line-through text-slate-400' : ''}`}>{task.title}</span>
              <button onClick={() => remove(task.id)} className="text-red-600 hover:underline">Delete</button>
            </li>
          ))}
          {tasks.length === 0 && <li className="text-center text-slate-400">No tasks yet. Add one above.</li>}
        </ul>
      </div>
    </div>
  )
}