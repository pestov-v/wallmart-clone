import Link from "next/link";
import type React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${styles[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
