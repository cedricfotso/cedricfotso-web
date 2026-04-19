import { cn } from "@/lib/utils"
type Props = React.HTMLAttributes<HTMLDivElement> & { as?: "div" | "article" | "section" }
export function Card({ as: Tag = "div", className, ...rest }: Props) {
	return <Tag className={cn("rounded-[8px] border border-border bg-background-1 p-7 transition-colors duration-200 hover:border-foreground", className)} {...rest} />
}