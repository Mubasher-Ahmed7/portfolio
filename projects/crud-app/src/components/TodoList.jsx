import { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../api/api'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null)

  const load = async () => {
    setLoading(true)
    try {
      const { data } = await getTasks()
      setTasks(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const add = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await createTask({ title })
    setTitle('')
    load()
  }

  const toggleComplete = async (task) => {
    await updateTask(task._id, { completed: !task.completed })
    load()
  }

  const saveEdit = async (e) => {
    e.preventDefault()
    if (editing) {
      await updateTask(editing._id, { title: editing.title })
      setEditing(null)
      load()
    }
  }

  const remove = async (id) => {
    await deleteTask(id)
    load()
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
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="rounded-lg bg-indigo-600 px-5 font-semibold text-white hover:bg-indigo-700">Add</button>
        </form>

        {loading && <p className="mt-6 text-slate-500">Loading...</p>}

        <ul className="mt-6 space-y-3">
          {tasks.map((task) => (
            <li key={task._id} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              {editing && editing._id === task._id ? (
                <form onSubmit={saveEdit} className="flex flex-1 gap-2">
                  <input
                    value={editing.title}
                    onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                    className="flex-1 rounded border border-slate-300 px-3 py-2"
                  />
                  <button className="rounded bg-emerald-600 px-3 text-white">Save</button>
                  <button type="button" onClick={() => setEditing(null)} className="rounded border px-3">Cancel</button>
                </form>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task)}
                    className="h-5 w-5"
                  />
                  <span className={`flex-1 ${task.completed ? 'line-through text-slate-400' : ''}`}>{task.title}</span>
                  <button onClick={() => setEditing(task)} className="text-indigo-600 hover:underline">Edit</button>
                  <button onClick={() => remove(task._id)} className="text-red-600 hover:underline">Delete</button>
                </>
              )}
            </li>
          ))}
          {!loading && tasks.length === 0 && (
            <li className="text-center text-slate-400">No tasks yet. Add one above.</li>
          )}
        </ul>
      </div>
    </div>
  )
}