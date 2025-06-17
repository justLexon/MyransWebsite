import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
            <section className={styles.mainHeader}>
            <div className={styles.menuCont}>
                Contact Us
            </div>
            </section>

            <section>
                <div className={styles.box}>
                    <div>
                        <p>We would love to hear from you! If you would like to pay us a visit, 
                            our store hours are from 7:00 A.M. - 8:30 P.M. Monday through Sunday.
                            For pick up orders, please dial 123-123-1234.
                        </p>
                    </div>
                    <div>
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
