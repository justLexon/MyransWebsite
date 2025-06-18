import styles from "./careers.module.css";

export default function CareersPage() {
  return (
    <div className={styles.page}>

      <main>
        <div className={styles.alignPage}>
            <section className={styles.mainHeader}>
            <div className={styles.menuCont}>
                Want To Join Us?
            </div>
            </section>

            <section>
                <div className={styles.box}>
                    <div className={styles.textFormat}>
                        <p>A job at Myran’s could be the perfect fit for you, if:</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>1. You are from the local area</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>2. You value customer service</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>3. You want to join a team of welcoming staff</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>4. You are interested in cooking, answering calls, taking orders, or serving tables.</p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>
                            If any of those sound like you, consider a career at Myran’s!
                            If you are interested, please contact us at the following email: 
                            ineedtheiremail@please.com.
                        </p>
                    </div>

                    <div className={styles.textFormat}>
                        <p>We will get back to you promptly about openings, interviews, and more.</p>
                    </div>
                </div>
            </section>
        </div>

      </main>

    </div>
  );
}
