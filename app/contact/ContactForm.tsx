"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"

const types = [
	{ id: "site-web", label: "Site web" },
	{ id: "design", label: "Design" },
	{ id: "strategie", label: "Stratégie" },
	{ id: "autre", label: "Autre" },
]

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
	const [status, setStatus] = useState<Status>("idle")
	const [errorMsg, setErrorMsg] = useState("")

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setStatus("loading"); setErrorMsg("")
		const fd = new FormData(e.currentTarget)
		const payload = {
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			company: String(fd.get("company") ?? ""),
			message: String(fd.get("message") ?? ""),
			types: fd.getAll("types").map(String),
			honeypot: String(fd.get("website") ?? ""),
		}
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			})
			if (!res.ok) {
				const data = await res.json().catch(() => ({}))
				throw new Error(data.error ?? "Erreur")
			}
			setStatus("success")
			;(e.target as HTMLFormElement).reset()
		} catch (err) {
			setStatus("error")
			setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.")
		}
	}

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			<input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" aria-hidden />

			<div className="grid gap-4 md:grid-cols-2">
				<Field name="name" label="Nom" required />
				<Field name="email" label="Email" type="email" required />
			</div>
			<Field name="company" label="Structure (facultatif)" />

			<fieldset>
				<Label>Type de demande</Label>
				<div className="mt-3 flex flex-wrap gap-2">
					{types.map((t) => (
						<label key={t.id} className="inline-flex cursor-pointer items-center gap-2 rounded-[8px] border border-border px-3 py-2 text-sm has-[:checked]:border-brand has-[:checked]:bg-brand-soft has-[:checked]:text-brand-hover">
							<input type="checkbox" name="types" value={t.id} className="sr-only" />
							{t.label}
						</label>
					))}
				</div>
			</fieldset>

			<div>
				<Label>Message</Label>
				<textarea name="message" required rows={6} className="mt-3 w-full rounded-[8px] border border-border bg-background-1 px-4 py-3 text-[15px] focus:border-foreground focus:outline-none" />
			</div>

			<div className="flex items-center gap-4">
				<Button type="submit" variant="primary" disabled={status === "loading"}>
					{status === "loading" ? "Envoi…" : "Envoyer le message"}
				</Button>
				{status === "success" && <p className="text-sm text-brand">Message envoyé. Je réponds sous 48h ouvrées.</p>}
				{status === "error" && <p className="text-sm text-red-600">{errorMsg || "Erreur d'envoi."}</p>}
			</div>
		</form>
	)
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
	return (
		<div>
			<Label>{label}{required && " *"}</Label>
			<input name={name} type={type} required={required} className="mt-3 w-full rounded-[8px] border border-border bg-background-1 px-4 py-3 text-[15px] focus:border-foreground focus:outline-none" />
		</div>
	)
}