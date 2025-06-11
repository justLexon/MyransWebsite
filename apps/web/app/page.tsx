import styles from "./page.module.css";
import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <main>
        <section className={homeStyles.font1}>
           <a className={homeStyles.no}>
              yo Gurt
           </a>
        </section>


      </main>

    </div>
  );
}
