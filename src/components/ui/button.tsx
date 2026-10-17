import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-[var(--radius-control)] text-sm font-semibold transition-[background-color,color,transform] duration-[var(--dur-fast)] ease-[var(--ease-spring)] active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-color)] disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100 motion-reduce:transition-none motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent-color)] text-[var(--accent-ink)] hover:bg-[color-mix(in_oklch,var(--accent-color)_88%,var(--page))]",
        destructive:
          "bg-[var(--error)] text-[var(--accent-ink)] hover:bg-[color-mix(in_oklch,var(--error)_88%,black)]",
        outline:
          "bg-[var(--surface-raised)] text-[var(--fg)] hover:bg-[color-mix(in_oklch,var(--surface-raised)_90%,var(--fg))]",
        secondary:
          "bg-[var(--surface-raised)] text-[var(--fg)] hover:bg-[color-mix(in_oklch,var(--surface-raised)_90%,var(--fg))]",
        ghost: "bg-transparent text-[var(--fg)] hover:bg-[var(--surface-raised)]",
        link: "text-[var(--fg)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-11 rounded-[var(--radius-control)] px-3",
        lg: "h-11 rounded-[var(--radius-control)] px-8",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
