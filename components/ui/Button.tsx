import Link from "next/link"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary"
type CommonProps = { variant?: Variant; className?: string; children: React.ReactNode }
type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsLink = CommonProps & { href: string; external?: boolean }

const base = "inline-flex items-center justify-center gap-2 rounded-[8px] px-[18px] py-[10px] text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
const variants: Record<Variant, string> = {
	primary: "bg-brand text-white hover:bg-brand-hover",
	secondary: "border border-border text-foreground bg-transparent hover:border-foreground",
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
	const { variant = "primary", className, children } = props
	const classes = cn(base, variants[variant], className)
	if ("href" in props && props.href) {
		const { href, external } = props
		if (external) return <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>{children}</a>
		return <Link href={href} className={classes}>{children}</Link>
	}
	const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsButton
	return <button className={classes} {...rest}>{children}</button>
}