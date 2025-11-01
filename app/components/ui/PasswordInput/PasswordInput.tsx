"use client";
import type React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import inputStyles from "../Input/Input.module.css";
import styles from "./PasswordInput.module.css";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PasswordInput({ label, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={props.id} className={inputStyles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          className={inputStyles.input}
          {...props}
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
    </div>
  );
}
