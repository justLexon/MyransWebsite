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
              <a className={styles.linkText}><u>1023 Neblett St, Arnaudville LA 70512</u></a>
            </div>
            <a>123-123-4567</a>
          </div>
        </div>

        <nav className={styles.footerCenter}>
          <a href="#">All Rights Reserved.</a>
        </nav>

        <div className={styles.scheduleGap}>
          <a>Mon-Sun</a>
          <a>7:00 A.M. - 8:30 P.M.</a>
          <a className={styles.linkText}><u>Rate Us</u></a>
        </div>

        <div className={styles.footerRight}>
          <img src="/myranslogo.png" className="myronsLogo" alt="logo" />
        </div>

      </div>
    </header>
  );
}
