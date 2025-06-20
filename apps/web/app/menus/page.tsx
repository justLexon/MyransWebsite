import styles from "./menu.module.css";

export default function MenuPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
          <div className={styles.imgHeader}>
            <img src="menuHeader.png"></img>
          </div>
          
          <section className={styles.mainHeader}>
            <div>
                Menu
            </div>
          </section>

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
