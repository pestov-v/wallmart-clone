import Link from "next/link";
import Button from "../ui/Button";
import styles from "./Header.module.css";

export default function Header() {
  const isAuthenticated = false; // This will be replaced with actual authentication logic

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Walmart Clone
        </Link>
        <nav className={styles.nav}>
          {isAuthenticated ? (
            <Button type="button" variant="danger">
              Logout
            </Button>
          ) : (
            <>
              <Button href="/login" variant="secondary">
                Login
              </Button>
              <Button href="/register">Register</Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
