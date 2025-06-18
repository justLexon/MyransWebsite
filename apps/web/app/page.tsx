import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}></div>

      <main>
        <section className={homeStyles.sectionWholeCont}>
          <div className={homeStyles.sectionContBehind}>
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
                    <a>Seasonal Crawfish!</a>
                  </div>
                </div>

                <div className={homeStyles.imgCont}>
                  <div className={homeStyles.img1Cont}>
                    <img src="cajunfries.png"></img>
                  </div>

                  <div className={homeStyles.text1Cont}>
                    <a>Fresh Fries!</a>
                  </div>
                </div>

                <div className={homeStyles.imgCont}>
                  <div className={homeStyles.img1Cont}>
                    <img src="cajuntenders.png"></img>
                  </div>

                  <div className={homeStyles.text1Cont}>
                    <a>Awesome Tenders!</a>
                  </div>
                </div>
              </div>

              <div className={homeStyles.CajunBoldText}>
                  <a>Cajun Flavor, All Day</a>
              </div>
            
              
              <a href='/menus'>
                <div className={homeStyles.fullMenuButton}>
                    <div className={homeStyles.WholeButtonMenu}>
                      <img src="fullMenuIcon.png"></img>
                      <p>Full Menu</p>
                    </div>
                </div>
              </a>


              {/* add section line here from canva(need img) */}

              <div className={homeStyles.redLine}>
                <img src="redline1200px.png"></img>
              </div>


              <div className={homeStyles.visitText}>
                <a>Visit Us!</a>
              </div>

              <div className={homeStyles.visitCont}>
                <div>
                  <a>Dine with us @</a>
                  <a href='https://maps.app.goo.gl/iikT4Jtu9wKEGA5B7' target="_blank" rel="noopener noreferrer" className={homeStyles.linkText}><u>1023 Neblett St, Arnaudville LA 70512</u></a>
                </div>

                <div className={homeStyles.scheduleGap}>
                  <a>Mon-Sun</a>
                  <a>7:00 A.M. - 8:30 P.M.</a>
                </div>

                <a href="tel:+3377545064">
                  <div className={homeStyles.callButtonCont}>
                    <div className={homeStyles.callButton}>
                      <img src="callIcon.png"></img>
                      <p>Call for Pickup Now!</p>
                    </div>
                  </div>
                </a>

              </div>


            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
