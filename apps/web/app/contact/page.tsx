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
                    <div className={styles.textFormat}>
                        <p>We would love to hear from you! If you would like to pay us a visit, 
                            our store hours are from 7:00 A.M. - 8:30 P.M. Monday through Sunday.
                            For pick up orders, please dial 123-123-1234.
                        </p>
                    </div>

                    <div>
                        <a href="tel:+3377545064">
                            <div className={styles.callButtonCont}>
                                <div className={styles.callButton}>
                                    <img src="callIcon.png"></img>
                                    <p>Call for Pickup Now!</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.textFormat}>
                        <p>You can find us at 1023 Neblett St, Arnaudville, Louisiana. 
                            Click to open the address in&nbsp;
                            <a href='https://maps.app.goo.gl/iikT4Jtu9wKEGA5B7' target="_blank" rel="noopener noreferrer" className={styles.linkText}><u>Google Maps</u></a>
                            .
                        </p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>We process all business inquiries via email: ineedtheiremail@please.com</p>
                    </div>

                    <div className={styles.redline}>
                        <a href="tel:+3377545064">
                            <div className={styles.callButtonCont}>
                                <div className={styles.callButton}>
                                    {/* <img src="callIcon.png"></img> */}
                                    <p>Email Us</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={styles.textFormat}>
                        <p>Interested in a career at Myran’s? Contact us to join our staff&nbsp;
                            <a href='/careers' className={styles.linkText}><u>here</u></a>
                            .
                        </p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>Want to tell us about your dining experience?&nbsp;
                            <a href='https://g.co/kgs/1rVDqT2' target="_blank" rel="noopener noreferrer" className={styles.linkText}><u>Leave us a review!</u></a>
                        </p>
                    </div>
                </div>
            </section>
        </div>

      </main>

    </div>
  );
}
