import styles from "./menu.module.css";
import homeStyles from "../home.module.css";

export default function MenuPage() {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <main>
        <section className={homeStyles.font1}>
           <div className={homeStyles.no}>
              <a>yoGurt</a>
              <a>yoGurt</a>
              <a>yoGurt</a>
           </div>
        </section>

        <section className={homeStyles.font2}>
           <div className={homeStyles.no}>
              <a>yoGurt</a>
              <a>yoGurt</a>
              <a>yoGurt</a>
           </div>
        </section>


      </main>

    </div>
  );
}
