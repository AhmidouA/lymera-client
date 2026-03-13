// src/components/ui/Button.tsx
import Link from "next/link";
import type { ButtonProps } from "@/types";

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary: `
    bg-brown text-white border-0
    hover:opacity-90 hover:-translate-y-0.5
    dark:bg-night-accent dark:text-night-bg
  `,
  outline: `
    bg-transparent border border-brown text-brown
    hover:bg-brown hover:text-white
    dark:border-night-accent dark:text-night-accent
    dark:hover:bg-night-accent dark:hover:text-night-bg
  `,
  ghost: `
    bg-transparent border-0 text-muted
    hover:text-brown hover:bg-beige
    dark:text-night-text2 dark:hover:text-night-accent dark:hover:bg-night-surface
  `,
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    rounded-full font-sans font-medium tracking-wide
    transition-all duration-200 whitespace-nowrap cursor-pointer
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} target={target} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}