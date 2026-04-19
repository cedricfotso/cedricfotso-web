import Link from "next/link"
import { cn } from "@/lib/utils"
type Props = { href: string; children: React.ReactNode; className?: string; external?: boolean }
export function AccentLink({ href, children, className, external }: Props) {
	const classes = cn("group inline-flex items-center gap-1.5 text-brand underline underline-offset-4 decoration-1 transition-[text-decoration-thickness] duration-150 hover:decoration-2", className)
	const content = (<><span>{children}</span><span aria-hidden className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span></>)
	if (external) return <a className={classes} href={href} target="_blank" rel="noreferrer noopener">{content}</a>
	return <Link className={classes} href={href}>{content}</Link>
}