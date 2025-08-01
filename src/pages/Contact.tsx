import { useState, type FormEvent } from 'react'

interface FormState {
  name: string
  company: string
  email: string
  time: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.company.trim()) newErrors.company = 'Company is required'
    if (!/^[^@\s]+@[^@\s]+$/.test(form.email))
      newErrors.email = 'Valid email is required'
    if (!form.time.trim()) newErrors.time = 'Preferred time is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-heading mb-2">Thank you!</h1>
        <p>We will be in touch soon to schedule your demo.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-heading mb-4">Contact Us</h1>
        <p className="mb-2">
          Reach out for a personalized demo or any questions.
        </p>
        <address className="not-italic mb-4">
          123 Realty Avenue
          <br />
          Hometown, USA
          <br />
          <a
            href="mailto:support@novaframerealty.com"
            className="text-primary hover:underline"
          >
            support@novaframerealty.com
          </a>
        </address>
        <div className="flex gap-4 text-primary">
          <a href="#" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19c11 0 17-9 17-17 0-.3 0-.5 0-.8A12.3 12.3 0 0028 0a12.1 12.1 0 01-3.6 1A6.3 6.3 0 0027.3-.5a12.3 12.3 0 01-4 1.5A6.1 6.1 0 0014 5a17.4 17.4 0 01-12.6-6.4A6 6 0 004 7.5a6.1 6.1 0 01-2.8-.8v.1a6.1 6.1 0 004.9 6 6.2 6.2 0 01-2.7.1 6.1 6.1 0 005.7 4.3A12.3 12.3 0 010 19.6a17.3 17.3 0 009.3 2.7" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.333 24h11.495v-9.294H9.691v-3.622h3.137V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.793.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            className="input"
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
          )}
        </div>
        <div>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            className="input"
            type="text"
            name="time"
            placeholder="Preferred Demo Time"
            value={form.time}
            onChange={handleChange}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  )
}
