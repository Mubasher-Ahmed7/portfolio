import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  // TODO: Replace with your EmailJS service/template/public key from https://www.emailjs.com
  const SERVICE_ID = 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (SERVICE_ID.startsWith('YOUR_')) {
      setStatus(
        'EmailJS is not configured yet. Please set your EmailJS keys in src/components/Contact.jsx, or message me directly via WhatsApp. ' +
        `mailto:${profile.email}`,
      )
      return
    }
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setStatus('Success! Your message has been sent. I\'ll get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please email me directly or use WhatsApp.')
    }
  }

  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    'Hi Mubasher! I found your portfolio and I\'d like to discuss a project.',
  )}`

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x py-16">
        <h2 className="section-title">Let's Build Something Together</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
          Have a project in mind? Send me a message or reach out directly — I usually respond within a day.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            {status && (
              <p className={`text-sm ${status.startsWith('Success') ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                {status}
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-semibold mb-3">Contact Details</h3>
              <p className="text-slate-600 dark:text-slate-300">Email: <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Location: Rawalpindi/Islamabad, Pakistan</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-outline mt-4 inline-flex">
                Message on WhatsApp
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-semibold mb-3">Find Me On</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li><a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
                <li><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href={profile.socials.upwork} target="_blank" rel="noreferrer" className="hover:underline">Upwork</a></li>
                <li><a href={profile.socials.freelancer} target="_blank" rel="noreferrer" className="hover:underline">Freelancer.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}