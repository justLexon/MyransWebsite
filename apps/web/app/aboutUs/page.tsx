import styles from "./aboutUs.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
          <div className={styles.imgHeader}>
            <img src="aboutUsheader.png"></img>
          </div>
          
          <section className={styles.mainHeader}>
            <p>
                Our Story
            </p>
          </section>


          <section className={styles.subHeader}>
            <div>
              help
            </div>

          </section>

        </div>
      </main>

    </div>
  );
}
