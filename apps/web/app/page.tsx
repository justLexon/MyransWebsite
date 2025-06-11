import styles from "./page.module.css";
import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <main>
        <section className={homeStyles.font1}>
           <a className={homeStyles.no}>
              {/* <img src="sign.png"></img> */}
           </a>
        </section>


      </main>

      <footer className={styles.footer}>
        <p>© 2025 Myran's Grill. All rights reserved.</p>
      </footer>
    </div>
  );
}
