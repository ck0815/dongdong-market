import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-dark))] shadow-md hover:shadow-lg",
      secondary:
        "bg-[rgb(var(--theme-secondary))] text-white hover:bg-[rgb(var(--theme-primary))] shadow-md hover:shadow-lg",
      outline:
        "border-2 border-[rgb(var(--theme-primary))] text-[rgb(var(--theme-primary))] hover:bg-[rgb(var(--theme-light))]",
      ghost:
        "text-[rgb(var(--theme-primary))] hover:bg-[rgb(var(--theme-light))]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

