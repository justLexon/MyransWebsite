'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Header() {

  return (
    <header className={styles.footerMain}>
      <div className={styles.footerCont}>

        <div className={styles.footerLeft}>
          <img src="/myranslogo.png" className="myronsLogo" alt="logo" />
        </div>

        <div className={styles.yes}>
          <div className={styles.midLeft}>
            <div>
              <a href='https://maps.app.goo.gl/iikT4Jtu9wKEGA5B7' target="_blank" rel="noopener noreferrer" className={styles.linkText}><u>1023 Neblett St, Arnaudville LA 70512</u></a>
            </div>
            <a>(337)-754-5064</a>
          </div>
        </div>

        <nav className={styles.footerCenter}>
          <a>All Rights Reserved.</a>
        </nav>

        <div className={styles.scheduleGap}>
          <a>Mon-Sun</a>
          <a>7:00 A.M. - 8:30 P.M.</a>
          <a href='https://g.co/kgs/1rVDqT2' target="_blank" rel="noopener noreferrer" className={styles.linkText}>
            <u>Rate Us</u>
          </a>
        </div>

        <div className={styles.footerRight}>
          <a href='https://www.facebook.com/myransmaisondemanger/' target="_blank" rel="noopener noreferrer">
            <img src="/fbLogo.png" className={styles.fbLogo} />
          </a>      
        </div>

      </div>
    </header>
  );
}
