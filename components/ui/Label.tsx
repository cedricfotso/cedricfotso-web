import { cn } from "@/lib/utils"
type Props = React.HTMLAttributes<HTMLSpanElement>
export function Label({ className, ...rest }: Props) {
	return <span className={cn("label-caps", className)} {...rest} />
}