import Link from "next/link";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import styles from "./Register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Register</h1>
        <form className={styles.form}>
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
          />
          <PasswordInput
            label="Password"
            id="password"
            name="password"
            placeholder="********"
          />
          <Button type="submit">Register</Button>
        </form>
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerTextContainer}>
            <span className={styles.dividerText}>Or continue with</span>
          </div>
        </div>
        <div className={styles.googleButtonContainer}>
          <Button type="button" variant="secondary">
            Register with Google
          </Button>
        </div>
        <p className={styles.loginLinkContainer}>
          Already have an account?{" "}
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
