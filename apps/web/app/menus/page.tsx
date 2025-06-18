import styles from "./menu.module.css";

export default function MenuPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
          <section className={styles.mainHeader}>
            <div>
                Our Story
            </div>
          </section>

          <section className={styles.backCont}>
            <div className={styles.menuCont}>
                yo Gurt
            </div>

            <div className={styles.menuCont}>
                mud Salad
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
