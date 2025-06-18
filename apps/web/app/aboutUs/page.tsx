import styles from "./aboutUs.module.css";

export default function AbousUsPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
            <section className={styles.mainHeader}>
            <div className={styles.menuCont}>
                Our Story
            </div>
            </section>

            <section>
                <div className={styles.box}>
                    <div className={styles.textFormat}>
                        <p>We would love to hear from you! If you would like to pay us a visit, 
                            our store hours are from 7:00 A.M. - 8:30 P.M. Monday through Sunday.
                            For pick up orders, please dial 123-123-1234.
                        </p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>You can find us at 1023 Neblett St, Arnaudville, Louisiana. 
                            Click to open the address in Google Maps or Apple Maps.
                        </p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>We process all business inquiries via email: ineedtheiremail@please.com</p>
                    </div>

                    <div className={styles.redline}>
                        <img src="redline1200px.png"></img>
                    </div>

                    <div className={styles.textFormat}>
                        <p>Interested in a career at Myran’s? Contact us to join our staff here.</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>Want to tell us about your dining experience? Leave us a review!</p>
                    </div>
                </div>
            </section>
        </div>

      </main>

    </div>
  );
}
