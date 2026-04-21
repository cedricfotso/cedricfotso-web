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
      setError("L'envoi a échoué. Réessaie ou écris-moi directement à mr@cedricfotso.com.")
    }
  }

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="text-foreground font-medium">Message envoyé.</p>
        <p className="text-muted text-sm mt-2">
          Je reviens vers toi sous 24h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field name="nom" label="Nom" required autoComplete="name" />
      <Field name="email" label="Email" type="email" required autoComplete="email" />
      <Field name="sujet" label="Sujet" autoComplete="off" />
      <Field name="message" label="Message" required multiline />

      {error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-[8px] px-[18px] py-[10px] text-sm font-medium transition-colors duration-150 bg-brand text-white hover:bg-brand-hover disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
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
    "w-full rounded-md border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted focus:border-foreground focus:outline-none transition-colors"

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-brand ml-0.5">*</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          required={required}
          autoComplete={autoComplete}
          rows={5}
          className={cn(common, "resize-y")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={common}
        />
      )}
    </div>
  )
}