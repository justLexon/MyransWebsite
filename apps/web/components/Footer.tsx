'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Header() {

  return (
    <header className={styles.headerMain}>
      <div className={styles.headerLeft}>
        <img src="/myranslogo.png" className="myronsLogo" alt="logo" />
      </div>

      <nav className="headerNav">
        <a href="#">Lexon</a>
        <a href="#">Weekly Ad</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </nav>

      <div className="headerRight">
        <a>Order Now!</a>
        <a>123-123-4567</a>
      </div>

    </header>
  );
}
