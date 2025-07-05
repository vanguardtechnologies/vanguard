import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-[#0052e0] to-[#003ba6] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[#1366f1] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity font-medium [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        destructive: 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-red-600 font-medium [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        outline: 'border-2 border-[#24292f] bg-transparent text-[#24292f] hover:bg-[#f8f9fa] hover:border-[#1366f1] hover:text-[#1366f1] hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[#1366f1] font-medium',
        'outline-dark': 'border-2 border-white bg-white/10 text-white font-medium hover:bg-white hover:text-[#0052e0] hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-white backdrop-blur-sm [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        secondary: 'bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[#0f172a] font-medium [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        ghost: 'text-[#24292f] hover:bg-[#f0f2f5] hover:text-[#0d1117] focus-visible:ring-[#d0d7de]',
        link: 'text-[#1366f1] underline-offset-4 hover:underline hover:text-[#0052e0] focus-visible:ring-[#1366f1]',
        success: 'bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[#10b981] font-medium [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        primary: 'bg-gradient-to-r from-[#0052e0] via-[#0080d4] to-[#0a8754] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[#1366f1] bg-size-200 bg-pos-0 hover:bg-pos-100 font-semibold [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]',
        glass: 'glass border border-white/20 text-[#0d1117] shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-white/80 focus-visible:ring-white/50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }