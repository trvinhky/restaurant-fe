import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority"
import React from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-white text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 focus-visible:ring-1 focus-visible:ring-ring [&_svg]:shrink-0 duration-300 cursor-pointer",
    {
        variants: {
            size: {
                default: "px-6 py-2",
                lg: "py-3 px-14",
                icon_sm: "w-5 h-5",
                icon_md: "w-10 h-10",
                icon_lg: "w-11 h-11",
                icon_xl: "w-14 h-14",
                icon_xxl: "w-18 h-18",
            },
            bg: {
                primary: "bg-red-700 hover:bg-red-700/85",
                secondary: "bg-white/15 hover:bg-white hover:text-red-700",
                banner: "bg-red-500/5 text-red-700 hover:bg-red-700 hover:text-white",
            }
        },
        defaultVariants: {
            size: "default",
            bg: "primary"
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, bg, ...props }, ref) => {
        return (
            <button
                className={cn(
                    buttonVariants({ size, bg, className }),
                )}
                ref={ref}
                {...props}
            />
        )
    }
);

Button.displayName = "Button"

export { Button, buttonVariants }