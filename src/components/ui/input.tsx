import * as React from "react"

import { cn } from "../../lib/utils"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[var(--radius-control)] border border-transparent bg-[var(--surface-sunken)] px-3.5 py-2 text-[.9375rem] text-[var(--fg)] transition-[border-color,box-shadow,background-color] duration-[var(--dur-fast)] ease-[var(--ease-out)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[color-mix(in_oklch,var(--muted-fg)_80%,transparent)] hover:border-[var(--line)] focus-visible:outline-none focus-visible:border-[var(--accent-color)] focus-visible:shadow-[0_0_0_3px_color-mix(in_oklch,var(--accent-color)_25%,transparent)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[var(--error)] motion-reduce:transition-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
