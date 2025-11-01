import Link from "next/link";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
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
          <Button type="submit">Login</Button>
        </form>
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerTextContainer}>
            <span className={styles.dividerText}>Or continue with</span>
          </div>
        </div>
        <div className={styles.googleButtonContainer}>
          <Button type="button" variant="secondary">
            Login with Google
          </Button>
        </div>
        <p className={styles.registerLinkContainer}>
          Don't have an account?{" "}
          <Link href="/register" className={styles.registerLink}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
