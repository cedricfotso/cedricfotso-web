import { NextResponse } from "next/server"
import { z } from "zod"
import { createTransport } from "@/lib/mailer"

const schema = z.object({
	name: z.string().min(1).max(100),
	email: z.string().email(),
	company: z.string().max(200).optional().default(""),
	message: z.string().min(10).max(5000),
	types: z.array(z.string()).max(4).optional().default([]),
	honeypot: z.string().max(0).optional().default(""),
})

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const parsed = schema.safeParse(body)
		if (!parsed.success) return NextResponse.json({ error: "Données invalides" }, { status: 400 })
		if (parsed.data.honeypot) return NextResponse.json({ ok: true })

		const { name, email, company, message, types } = parsed.data
		const transport = createTransport()

		const typesLine = types.length ? types.join(", ") : "non précisé"
		const text = `Nouveau message depuis cedricfotso.com\n\nNom : ${name}\nEmail : ${email}\nStructure : ${company || "-"}\nType de demande : ${typesLine}\n\nMessage :\n${message}\n`

		await transport.sendMail({
			from: process.env.SMTP_FROM,
			to: process.env.SMTP_TO,
			replyTo: `${name} <${email}>`,
			subject: `[cedricfotso.com] Nouveau message — ${name}`,
			text,
		})

		return NextResponse.json({ ok: true })
	} catch (err) {
		console.error("[contact] failed", err)
		return NextResponse.json({ error: "Envoi impossible pour le moment." }, { status: 500 })
	}
}