import styles from "./aboutUs.module.css";

export default function AbousUsPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
            <section className={styles.mainHeader}>
                <div>
                    Our Story
                </div>
            </section>

            <section>
                <div className={styles.box}>
                    <div>
                        <img src="aboutUsImg.png" alt="hero" className={styles.circleImg} />
                    </div>

                    <div className={styles.textFormat}>
                        <p>You can find us at 1023 Neblett St, Arnaudville, Louisiana. 
                            Click to open the address in Google Maps or Apple Maps.
                        </p>
                    </div>
                    
                </div>
            </section>
        </div>

      </main>

    </div>
  );
}
