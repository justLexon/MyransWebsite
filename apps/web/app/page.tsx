import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <main>
        <section className={homeStyles.sectionContBehind}>
          <div className={homeStyles.sectionCont1}> 
            <div className={homeStyles.no}>
              <div className={homeStyles.sect1Head}>
                <Image 
                  src="/myranslogo.png" 
                  alt="logo" 
                  className={homeStyles.headerT}
                  width={530}
                  height={250}
                />
                <a className={homeStyles.paraT}>A Southern, Savory Experience</a>
              </div>
            </div>
          </div>
        </section>

        <section className={homeStyles.sectionCont2}>
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
