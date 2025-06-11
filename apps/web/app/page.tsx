import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          yoGurt
        </header>



      </main>

      <footer className={styles.footer}>
        <p>© 2025 Myran's Grill. All rights reserved.</p>
      </footer>
    </div>
  );
}
