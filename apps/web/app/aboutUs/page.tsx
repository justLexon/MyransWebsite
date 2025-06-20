import styles from "./aboutUs.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
          <div className={styles.headerCont}>
            <div className={styles.imgHeader}>
              <img src="aboutUsheader1.png"></img>
            </div>
            
            <section className={styles.mainHeader}>
              <p>
                  Our Story
              </p>
            </section>
          </div>

          <section className={styles.subHeader}>
            <div>
              <img src="aboutUsCardImg.png"></img>
            </div>
          </section>

          <section className={styles.textCont}>
            <p>
              Since 1979, Myran’s has been serving the Arnaudville area fresh, tasty Cajun dishes, marking over 40 years of dining experience! 
            </p>
            <p>
              With many more years—and meals—ahead of us, Myran’s Maison de Manger will continue to be “the house of eating” for locals and visitors.   
            </p>
            <p>
              Do us and your stomach a favor by paying us a visit! We would love to dine with you, so stop by  “La Junction” between Bayou Teche and Bayou Fusilier!
            </p>
          </section>

        </div>
      </main>

    </div>
  );
}
