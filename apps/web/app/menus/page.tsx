import styles from "./menu.module.css";

export default function MenuPage() {
  return (
    <div className={styles.page}>

      <main>
        <section className={styles.backCont}>
           <div className={styles.menuCont}>
              yo Gurt
           </div>

           <div className={styles.menuCont}>
              mud Salad
           </div>
        </section>


      </main>

    </div>
  );
}
