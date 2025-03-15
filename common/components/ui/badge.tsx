import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-green-300 text-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export { Badge }