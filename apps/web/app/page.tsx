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

              <div className={homeStyles.sect1Desc}>

                <div className={homeStyles.imgCont}>
                  <div className={homeStyles.img1Cont}>
                    <img src="cajuncrawfish.png"></img>
                  </div>

                  <div className={homeStyles.text1Cont}>
                    <a>sum cruwfish cuh</a>
                  </div>
                </div>

                <div className={homeStyles.imgCont}>
                  <div className={homeStyles.img1Cont}>
                    <img src="cajunfries.png"></img>
                  </div>

                  <div className={homeStyles.text1Cont}>
                    <a>sum fries cuh</a>
                  </div>
                </div>

                <div className={homeStyles.imgCont}>
                  <div className={homeStyles.img1Cont}>
                    <img src="cajuntenders.png"></img>
                  </div>

                  <div className={homeStyles.text1Cont}>
                    <a>sum tenders cuh</a>
                  </div>
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
