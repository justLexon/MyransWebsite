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

        <nav className={styles.footerCenter}>
          <a href="#">Lexon</a>
          <a href="#">All Rights Reserved.</a>
           <div className={styles.scheduleGap}>
              <a>Mon-Sun</a>
              <a>7:00 A.M. - 8:30 P.M.</a>
            </div>
        </nav>

        <div className={styles.footerRight}>
          <a>Order Now!</a>
        </div>

      </div>
    </header>
  );
}
