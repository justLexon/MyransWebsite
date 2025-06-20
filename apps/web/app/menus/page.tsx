import styles from "./menu.module.css";

export default function MenuPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
          <div className={styles.imgHeader}>
            <img src="menuHeader1.png"></img>
          </div>          
          
          <section className={styles.mainHeader}>
            <p className={styles.text}>
                Menu
            </p>
          </section>

          <div className={styles.subtitle}>
            <p>Delicious Is The Standard</p>
            <p className={styles.click}>(click to enlarge)</p>
          </div>

          <section className={styles.backCont}>
            <div>
                <img src="menuFront.png"></img>
            </div>

            <div>
                <img src="menuBack.png"></img>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
