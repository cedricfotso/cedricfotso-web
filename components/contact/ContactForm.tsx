"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setError(null)

    const formData = new FormData(event.currentTarget)
    const payload = {
      nom: String(formData.get("nom") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      sujet: String(formData.get("sujet") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    if (!payload.nom || !payload.email || !payload.message) {
      setStatus("error")
      setError("Merci de remplir les champs obligatoires.")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setStatus("success")
      event.currentTarget.reset()
    } catch (err) {
      console.error("[ContactForm] submit failed:", err)
      setStatus("error")
      setError("L'envoi a échoué. Réessaie ou écris-moi directement à in@tambour.cm.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white/5 p-8 text-center">
        <p className="text-xl font-semibold">Message envoyé.</p>
        <p className="mt-3 text-neutral-400">
          Je reviens vers toi sous 24h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field
        name="nom"
        label="Nom"
        required
        autoComplete="name"
      />
      <Field
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        name="sujet"
        label="Sujet"
      />
      <Field
        name="message"
        label="Message"
        required
        multiline
      />

      {error ? (
        <p className="text-sm text-red-400">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition",
          status === "submitting"
            ? "cursor-wait opacity-60"
            : "hover:bg-neutral-200",
        )}
      >
        {status === "submitting" ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  )
}

type FieldProps = {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  multiline?: boolean
}

function Field({ name, label, type = "text", required, autoComplete, multiline }: FieldProps) {
  const common =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"

  return (
    <label className="block">
      <span className="mb-2 block text-sm text-neutral-400">
        {label}
        {required ? <span className="text-red-400"> *</span> : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          rows={6}
          className={common}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={common}
        />
      )}
    </label>
  )
}