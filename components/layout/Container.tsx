import { cn } from "@/lib/utils"
type Props = React.HTMLAttributes<HTMLDivElement>
export function Container({ className, ...rest }: Props) {
	return <div className={cn("site-container", className)} {...rest} />
}